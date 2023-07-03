import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { AuthService } from 'src/app/services/auth.service';
import { SmedAggregationService } from 'src/app/services/smed-aggregation.service';
import { CsvexportService } from 'src/app/services/csvexport.service';
import { DBService } from 'src/app/services/dbservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.scss']
})
export class StartComponent implements OnInit {
  constructor(private db: DBService, private csv: CsvexportService,
    private api: ApiService, private auth: AuthService, private smed: SmedAggregationService,
    private router: Router) { }
  metadata = [];
  progress: boolean;
  metadataok: boolean;
  mapdata: any;
  mapdatafor: string;
  sortdata = [];
  level: any;
  levelvalues = [
    'Gesamt',
    'Baden-Württemberg',
    'Bayern',
    'Berlin',
    'Brandenburg',
    'Bremen',
    'Hamburg',
    'Hessen',
    'Mecklenburg-Vorpommern',
    'Niedersachsen',
    'Nordrhein-Westfalen',
    'Nordrhein',
    'Westfalen-Lippe',
    'Rheinland-Pfalz',
    'Saarland',
    'Sachsen',
    'Sachsen-Anhalt',
    'Schleswig-Holstein',
    'Thüringen'
  ];
  rkiLevelvalues = [
  ]
  subgroups: any;
  outcomes: any;
  determinants: any;
  levelsettings = {};
  data: any;
  datakeys: any;
  currentuser: any;
  data_rate: any;
  data_number: any;
  geojson_available: any;
  colorsscheme: any;
  levelid: string;
  datakeystable: any;
  debug = false;
  // SMED
  stats_ts: any = [];
  symptoms_list: any;
  symptoms_list_export: any;
  summaryinfo = {};
  smedrange = {};
  zeitaumoptions = ["Letzte 12 Monate", "Letztes Jahr", "Gesamt"];
  allpublicfields = ['stats', 'mainsymptoms_ts', 'timetotreat', 'timestats', 'qmCases'];
  ts_results = {};
  utiltimes = {};
  timetotreat: any;
  qmCases: any;
  decisions_ttt: any;
  decisions_poc: any;
  decisions_pocvsttt: any;
  timetogo: number;
  absoluteNumbers: boolean = false
  isRKIUser: boolean = false
  isRKIKVUser: boolean = false

  ngOnInit(): void {
    this.levelsettings = { "level": "KV", "levelvalues": "Gesamt", "zeitraum": "Letzte 12 Monate", 'resolution': 'monthly' };
    this.summaryinfo["done"] = false;
    this.colorsscheme = this.api.makescale(5);
    this.mapdatafor = "";
    this.mapdata = [];
    this.levelsettings = this.smed.updatestartstop(this.levelsettings);
    this.auth.currentUser.subscribe(data => { this.currentuser = data; });

    this.isRKIUser = this.auth.isRKIUser()
    this.isRKIKVUser = this.auth.isRKIKVUser()
    this.buildLevelValuesForCustomers()

    if(this.isRKIUser || this.isRKIKVUser) {
      this.absoluteNumbers = true
    }

    this.updatemetadata();
    window.scroll(0, 0);
    this.setlevel("__init", "");
    // fix long loading
    setTimeout(() => {
      if (this.stats_ts.length == 0) {
        this.setlevel("__init", "");
      };
    }, 1500);

    // counter
    this.timetogo = this.check_portal_online();
    if ((this.timetogo < 0) && !this.currentuser) {
      setInterval(() => {
        this.timetogo = this.check_portal_online();
        if (this.timetogo >= 0) {
          this.router.navigate(['/']);
        }
      }, 500);
    };

    console.log(this.auth.isRKIUser())
  }

  ngOnDestroy() {
    this.mapdata = [];
  }

  buildLevelValuesForCustomers() {
    if (this.isRKIUser || this.isRKIKVUser) {
      for (const item of this.currentuser.usergroups.smed_reporting) {
        if(item === 'kvuser') continue

        this.rkiLevelvalues.push(item)
      }

      if (this.isRKIUser) {
        this.rkiLevelvalues.push('Gesamt')
      }

      if (this.isRKIKVUser) {
        for (const item of this.levelvalues) {
          this.rkiLevelvalues.push(item)
        }
      }
    }
  }

  async setlevel(level, value) {
    if (!this.currentuser && (this.timetogo < 0)) {
      return null;
    }

    if (level !== "__init") {
      this.levelsettings[level] = value;
      this.levelsettings = this.smed.updatestartstop(this.levelsettings);
    };

    this.summaryinfo = [];
    this.stats_ts = [];
    this.utiltimes = {};
    this.decisions_ttt = [];
    this.decisions_poc = [];
    this.decisions_pocvsttt = [];
    this.timetotreat = NaN;
    this.qmCases = NaN;

    if (this.metadata.length == 0) {
      this.updatemetadata();
      return null;
    }

    if (this.levelsettings['start'] && this.levelsettings['stop']) {
      this.progress = true;
      await this.querydatasmed();
      if (this.currentuser) {
        await this.querydatasmed('decisions');
      };
    }
  }

  async updatemetadata() {
    if (this.api.getmetadata("metadata")) {
      this.metadata = await this.api.getmetadata("metadata");
      // Performance optimization - use only if needed by app
      // this.sortdata = this.api.getmetadata("sortdata");
      // this.geojson_available = this.api.getmetadata("geodata");
    }

    if (this.metadata) {
      if (this.metadata.length > 0) {
        this.dometasettings();
      }
    } else {
      this.metadata = [];
      setTimeout(() => {
        if ((this.metadata !== undefined) && (this.sortdata !== undefined)) {
          if (this.metadata.length > 0) {
            this.dometasettings();
          }
        }
        else {
          this.metadataok = false;
          this.metadata = [];
        }
      }, 1500);
    };
  }

  handleklick(plot, event) {
  }

  dometasettings() {
    this.level = this.api.filterArray(this.metadata, "type", "level")[0]["varname"];
    this.levelid = this.api.filterArray(this.metadata, "type", "levelid")[0]['varname'];
    this.subgroups = ["Keine"].concat(this.api.getValues(this.api.filterArray(this.metadata, "type", "group"), "varname"));
    this.metadataok = true;
  }

  async querydatasmed(thefield = "") {
    let now: Date = new Date();
    let oldstand: Date = new Date();
    let dataage = 0; // 0 hours old     
    let query = {
      "client_id": this.api.REST_API_SERVER_CLIENTID,
      "groupinfo": {}
    };
    // console.log(this.level)
    query["groupinfo"]["level"] = (this.isRKIUser || this.isRKIKVUser) && this.levelsettings['levelvalues'] !== 'Gesamt' ? "customer" : "KV"
    query["groupinfo"]["levelid"] = this.levelsettings["levelvalues"];
    query["groupinfo"]["timeframe"] = this.levelsettings["resolution"];
    query["groupinfo"]["Jahr"] = {
      "$gte": parseInt(this.levelsettings["start"].slice(0, 4)),
      "$lte": parseInt(this.levelsettings["stop"].slice(0, 4))
    };

    if (thefield != "") {
      query["showfields"] = [thefield, 'KM6Versicherte', 'BEVSTAND'];
    }
    else {
      query["showfields"] = this.allpublicfields.concat(['KM6Versicherte', 'BEVSTAND']);
    };

    let dbdaterange;

    if (thefield != "") {
      await this.db.querydatadates(
        'KV', this.levelsettings["levelvalues"], thefield, this.levelsettings["resolution"]).then(data => {
          if (data.length > 0) { dbdaterange = Object.create(data[0]); }
        }
        );
    }
    else {
      await this.db.querydatadates(
        'KV', this.levelsettings["levelvalues"], this.allpublicfields[0], this.levelsettings["resolution"]).then(data => {
          console.log(data)
          if (data.length > 0) { dbdaterange = Object.create(data[0]); }
        });
    };

    if (!dbdaterange) {
      dbdaterange = { 'startdate': '2000-01-01', 'stopdate': '2000-01-01' };
    }
    else {
      oldstand = new Date(dbdaterange['Stand']);
      dataage = (now.getTime() - oldstand.getTime()) / (1000 * 60 * 60);
    };
    if ((dbdaterange['startdate'] <= this.levelsettings["start"]) && (dbdaterange['stopdate'] >= this.levelsettings["stop"]) &&
      (dataage < 6)
    ) {
      //console.log("local data!", dataage,'hours old',(now.getTime()-oldstand.getTime()));
      if (thefield != "") {
        this.makesmeditems(thefield);
      }
      else {
        for (let fielditem of this.allpublicfields) {
          this.makesmeditems(fielditem);
        };
      };
    }
    else {
      await this.api.postTypeRequest('get_data/', query).subscribe(
        data => {
          let res = data["data"];

          if (thefield === "") {
            for (const item of res) {
              if (!item.mainsymptoms_ts) {
                item.mainsymptoms_ts = []
              }
            }
          }

          if (thefield != "" && res.length > 0) {
            this.db.deletewhere(thefield, 'KV', this.levelsettings["levelvalues"], this.levelsettings["resolution"],
              this.levelsettings["start"], this.levelsettings["stop"],
            ).then(() => {
              this.updatedb(res, thefield)
            });
            this.db.storestand(thefield, 'KV',
              this.levelsettings["levelvalues"], now.toISOString(),
              this.levelsettings["start"], this.levelsettings["stop"], this.levelsettings["resolution"]);
          };
          if (thefield == "" && res.length > 0) {
            for (let fielditem of this.allpublicfields) {
              this.db.deletewhere(fielditem, 'KV', this.levelsettings["levelvalues"], this.levelsettings["resolution"],
                this.levelsettings["start"], this.levelsettings["stop"],
              ).then(() => {
                this.updatedb(res, fielditem)
              });
              this.db.storestand(fielditem, 'KV',
                this.levelsettings["levelvalues"], now.toISOString(),
                this.levelsettings["start"], this.levelsettings["stop"], this.levelsettings["resolution"]);
            };
          };
        },
        error => { });
    };
  }

  async updatedb(data, thefield) {
    await this.smed.newcombine(data, thefield);
    await this.makesmeditems(thefield);
  }

  exportascsv(name, data) {
    this.csv.exportToCsv(name, data);
    this.csv.exportToCsv(name + "_settings.csv", [this.levelsettings]);
  }

  async makesmeditems(thefield) {
    this.levelsettings = this.smed.updatestartstop(this.levelsettings);
    let startdate = this.levelsettings['startdate'];
    let enddate = this.levelsettings['enddate'];

    if (thefield == "stats") {
      this.stats_ts = [];
      this.summaryinfo = [];
      let statswdate = await this.db.listdata('stats', "KV",
        this.levelsettings['levelvalues'], this.levelsettings['start'], this.levelsettings['stop'], true,
        this.levelsettings["resolution"]);

      if (statswdate.length > 0) {

        for (let item of statswdate) {
          item["Mittlere Dauer (Sek.)"] = (item["DAUERsmed"] / item["DAUERsmedFaelle"]);

          if (item["Dauer_sek"] == 0) {
            item["Mittlere Dauer (Sek.)"] = null;
          }

          item["Mittlere Anzahl Beschwerden"] = item["Anzahl_Beschwerden"] / item["Assessments"];
          item["Mittlere Anzahl Fragen"] = item["Anzahl_Fragen"] / item["Assessments"];

          if (item["Anzahl_Beschwerden"] == 0) {
            item["Mittlere Anzahl Beschwerden"] = null;
          }

          item["Assessments pro 100 Tsd. Einw."] = item["Assessments"] / (item["BEVSTAND"] / 1e5);
          // item["ARE Assessments pro 100 Tsd. Einw."] = item["Assessments_mit_ARE"] / (item["BEVSTAND"] / 1e5);
          // item["ARE Assessments (v2) pro 100 Tsd. Einw."] = item["Assessments_mit_ARE_v2"] / (item["BEVSTAND"] / 1e5);
          item["Anteil ARE Assessments"] = (100 * ((item["Assessments_mit_ARE_v3"] / item["Assessments"]) / .25)) - 100;

          item['totaleNumbers'] = item['Assessments']
        };

        this.stats_ts = statswdate;
        let theid = this.stats_ts[0]['levelid'];

        if (theid != "Gesamt") { this.summaryinfo["levelid"] = " in ".concat(theid); }
        else { this.summaryinfo["levelid"] = " in Deutschland"; };

        this.summaryinfo["Assessments Gesamt"] = this.api.sumArray(this.api.getValues(this.stats_ts, "Assessments"));
        this.summaryinfo["Assessments pro Woche"] = this.summaryinfo["Assessments Gesamt"] / this.api.getValues(this.stats_ts, "Assessments").length;
        this.summaryinfo["Mittlere Dauer"] = this.api.sumArray(this.api.getValues(this.stats_ts, "DAUERsmed")) / this.api.sumArray(this.api.getValues(this.stats_ts, "DAUERsmedFaelle"));
        this.summaryinfo["Anzahl Beschwerden"] = this.api.sumArray(this.api.getValues(this.stats_ts, "Anzahl_Beschwerden")) / this.summaryinfo["Assessments Gesamt"];
        this.summaryinfo["Anzahl Fragen"] = this.api.sumArray(this.api.getValues(this.stats_ts, "Anzahl_Fragen")) / this.summaryinfo["Assessments Gesamt"];
        let sorteddates = this.api.getValues(this.stats_ts, "Datum").sort();
        this.summaryinfo["Beginn"] = new Date(sorteddates[0]);
        this.summaryinfo["Ende"] = new Date(sorteddates.pop());
        this.summaryinfo["done"] = true;
        // only here signal for loading done:
        this.progress = false;
      }
    };

    if (thefield == "mainsymptoms_ts") {
      let symptoms_list = [];

      symptoms_list = await this.db.listdata('mainsymptoms_ts', "KV", this.levelsettings['levelvalues'], this.levelsettings['start'], this.levelsettings['stop'], true, this.levelsettings["resolution"]);
      symptoms_list = this.api.getValues(symptoms_list, 'data');

      this.symptoms_list_export = this.api.sortArray(this.api.groupbysum(symptoms_list, 'Sympt', '', 'n'), 'n', "descending");

      for (let item of this.symptoms_list_export) {
        let anzahl_symptome = this.api.sumArray(this.api.getValues(this.symptoms_list_export, "n"));
        item["Anteil"] = Math.round(1000 * item['n'] / anzahl_symptome) / 10;
      }

      this.symptoms_list = this.symptoms_list_export.slice(0, 15);
    };

    if (thefield == "timestats") {
      let utiltimes = [];
      let dbutiltimes = await this.db.listdata('timestats', "KV", this.levelsettings['levelvalues'], this.levelsettings['start'], this.levelsettings['stop'], false, this.levelsettings["resolution"]);
      dbutiltimes = this.api.getValues(dbutiltimes, 'data');
      utiltimes = this.api.groupbysum(dbutiltimes, "wt", "h", "n");
      let ntotal = this.api.sumArray(this.api.getValues(utiltimes, 'n'));
      dbutiltimes = [];

      for (let item of utiltimes) {
        item["Wochentag"] = this.api.getweekdayname(item["wt"]);
        item['Anzahl'] = item['n'];
        item['Anteil'] = 0.1 * Math.round(1000 * item['n'] / ntotal);
        item['TimeLabel'] = item['h'] + "-" + (item['h'] + 2) + 'h';
        delete item['n'];
      }
      this.utiltimes = this.api.makeheatmapdata(utiltimes, "wt", "h", 'Anteil', 'Wochentag', 'TimeLabel');
    };

    if (thefield == "timetotreat") {
      let result = [];
      let standardSort = [
        {
          TTTsmed_text: undefined,
          Anzahl: 0,
          Anteil: 0
        },
        {
          TTTsmed_text: 'Notfall',
          Anzahl: 0,
          Anteil: 0
        },
        {
          TTTsmed_text: 'schnellstmögliche ärztliche Behandlung',
          Anzahl: 0,
          Anteil: 0
        },
        {
          TTTsmed_text: 'Ärztliche Behandlung innerhalb von 24h',
          Anzahl: 0,
          Anteil: 0
        },
        {
          TTTsmed_text: 'Ärztliche Behandlung nicht innerhalb von 24h erforderlich',
          Anzahl: 0,
          Anteil: 0
        },
        {
          TTTsmed_text: 'k.A./Befragung unklar',
          Anzahl: 0,
          Anteil: 0
        }
      ]

      result = await this.db.listdata('timetotreat', "KV", this.levelsettings['levelvalues'], this.levelsettings['start'], this.levelsettings['stop'], true, this.levelsettings["resolution"]);
      result = this.api.groupbysum(result, 'TTTsmed_text', '', 'Anzahl');
      const total = this.api.sumArray(this.api.getValues(result, 'Anzahl'));

      for (let item of result) {
        item['Anteil'] = Math.round(1000 * item['Anzahl'] / total) / 10;
      }

      console.log(result)
      if (!this.isRKIUser || !this.isRKIKVUser) {
        if (result[0].TTTsmed_text !== undefined) {
          result.push({ TTTsmed_text: undefined, Anzahl: 0, Anteil: 0 })
        }
      }

      this.timetotreat = createStandardSort(result);

      function createStandardSort(data) {
        const result = []

        for (const item of standardSort) {
          for (const _item of data) {
            if (item.TTTsmed_text === _item.TTTsmed_text) {
              item.Anteil = _item.Anteil
              item.Anzahl = _item.Anzahl
            }
          }
          result.push(item)
        }
        return result.reverse()
      }
    }

    if (thefield == "decisions") {
      let decisions = [];
      decisions = await this.db.listdata('decisions', "KV", this.levelsettings['levelvalues'], this.levelsettings['start'], this.levelsettings['stop'], true, this.levelsettings["resolution"]);
      let total = this.api.sumArray(this.api.getValues(decisions, 'Anzahl'));
      this.decisions_ttt = this.api.replacemissing(this.api.groupbysum(decisions, 'TTTsmed_text', "TTTdispo_text", 'Anzahl'), 'TTTdispo_text', "Keine Daten");
      this.decisions_poc = this.api.replacemissing(this.api.groupbysum(decisions, 'POCsmed_text', "POCdispo_text", 'Anzahl'), 'POCdispo_text', "Keine Daten");;
      this.decisions_pocvsttt = this.api.groupbysum(decisions, 'TTTsmed_text', "POCsmed_text", 'Anzahl');
    }

    if (thefield === "qmCases") {
      let standardSort = [
        {
          text: "Vortriage",
          data: 0,
        },
        {
          text: 'nur Notfall ausgeschlossen',
          data: 0,
        },
        {
          text: 'Assessment vollständig',
          data: 0,
        },
        {
          text: 'Assessement abgekürzt',
          data: 0,
        },
        {
          text: 'SmED nicht anwendbar',
          data: 0,
        },
      ]

      const data = await this.db.listdata('stats', "KV", this.levelsettings['levelvalues'], this.levelsettings['start'], this.levelsettings['stop'], true, this.levelsettings["resolution"]);
      let total = 0

      if (data.length > 0) {
        for (const item of data) {
          if (item["QMFaelle"]) {
            total += item["QMFaelle"]
            for (const _item of standardSort) {
              if (_item.text === "Vortriage") {
                if (_item.data === 0) {
                  _item.data = (this.api.sumArray(this.api.getValues(data, "QM_Kat_Vortriage")))
                }
              }
              if (_item.text === "nur Notfall ausgeschlossen") {
                if (_item.data === 0) {
                  _item.data = (this.api.sumArray(this.api.getValues(data, "QM_Kat_nur_Notfall_ausgeschlossen")))
                }
              }
              if (_item.text === "Assessment vollständig") {
                if (_item.data === 0) {
                  _item.data = (this.api.sumArray(this.api.getValues(data, "QM_Kat_Assessment_vollst")))
                }
              }
              if (_item.text === "Assessement abgekürzt") {
                if (_item.data === 0) {
                  _item.data = (this.api.sumArray(this.api.getValues(data, "QM_Kat_Assessment_abgekuerzt")))
                }
              }
              if (_item.text === "SmED nicht anwendbar") {
                if (_item.data === 0) {
                  _item.data = (this.api.sumArray(this.api.getValues(data, "QM_Kat_SmED_nicht_anwendbar")))
                }
              }
            }
          }
        }
      }

      if (standardSort) {
        for (const item of standardSort) {
          item.data = inPercent(item.data, total)
        }
      }

      this.qmCases = standardSort.reverse()

      function inPercent(x, y) {
        const result = Math.round(1000 * x / y) / 10

        return result
      }
    }
  }

  // Pre Launch Counter
  check_portal_online() {
    let date1 = new Date("2022-03-14 08:00:00".replace(/-/g, "/")); // DUE TO BAD SAFARI IMPLEMENTATION!
    let date2 = new Date();
    let timediff = date2.getTime() - date1.getTime();
    return timediff;
  }

  counterstring(timediff) {
    if (timediff >= 0) {
      return "";
    }

    let Tage = Math.floor(-timediff / (1000 * 60 * 60 * 24));
    let Stunden = Math.floor(-timediff / (1000 * 60 * 60));
    Stunden = Math.floor((Stunden / 24 - Math.floor(Stunden / 24)) * 24);
    let Minuten = Math.floor(-timediff / (1000 * 60));
    Minuten = Math.floor((Minuten / 60 - Math.floor(Minuten / 60)) * 60);
    let Sekunden = Math.floor(-timediff / (1000));
    Sekunden = Math.floor((Sekunden / 60 - Math.floor(Sekunden / 60)) * 60);
    return Tage + ' Tage ' + Stunden + " Stunden " + Minuten + " Minuten " + Sekunden + " Sekunden";
  }
}
