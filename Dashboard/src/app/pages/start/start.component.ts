import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { AuthService } from 'src/app/services/auth.service';
import { SmedAggregationService } from 'src/app/services/smed-aggregation.service';
import { CsvexportService } from 'src/app/services/csvexport.service';
import { DBService } from 'src/app/services/dbservice.service';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.scss']
})
export class StartComponent implements OnInit {



  constructor(private db: DBService, private csv: CsvexportService, private api: ApiService, private auth: AuthService, private smed: SmedAggregationService) { }
  metadata = [];
  progress: boolean;
  metadataok: boolean;
  mapdata: any;
  mapdatafor: string;
  sortdata = [];
  level: any;
  levelvalues: any;
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

  // SMED
  stats_ts: any = [];
  symptoms_list: any;
  symptoms_list_export: any;
  summaryinfo = {};
  smedrange = {};
  zeitaumoptions = ["Aktuelles Jahr", "Letztes Jahr", "Gesamt", "Detailliert"];
  ts_results = {};
  utiltimes = {};
  timetotreat :any;

  ngOnInit(): void {    
    // uncomment for db debug
    // this.db.clean();
    this.levelsettings = { "level": "KV", "levelvalues": "Gesamt", "zeitraum": "Letztes Jahr" };
    this.summaryinfo["done"] = false;
    this.progress = true;
    this.colorsscheme = this.api.makescale(5);
    this.mapdatafor = "";
    this.mapdata = [];
    this.levelsettings = this.smed.updatestartstop(this.levelsettings);
    this.updatemetadata();
    this.auth.currentUser.subscribe(data => { this.currentuser = data; });
    window.scroll(0,0);   
    this.setlevel("__init","");
    window.scroll(0,0);
  }

  ngOnDestroy() {
    this.mapdata = [];

  }


  async setlevel(level, value) {
    if (level!=="__init"){
      this.levelsettings[level] = value;
      this.levelsettings = this.smed.updatestartstop(this.levelsettings);
    };
    this.progress = true;
    this.summaryinfo=[];
    this.stats_ts=[];
    this.utiltimes = {};
    this.timetotreat=NaN;
    // Initial Loading
    await this.makesmeditems('stats');
    this.progress = false;
    await this.makesmeditems('mainsymptoms_ts');
    await this.makesmeditems('timetotreat');
    await this.makesmeditems('timestats');
    
    // Update (implement if-needed tbd.)
    await this.querydatasmed('stats');
    await this.querydatasmed('mainsymptoms_ts');
    await this.querydatasmed('timetotreat');  
    await this.querydatasmed('timestats');      
  }


  updatemetadata() {
    if (this.api.getmetadata("metadata")) {
      this.metadata = this.api.getmetadata("metadata");
      this.sortdata = this.api.getmetadata("sortdata");
      this.geojson_available = this.api.getmetadata("geodata");
    }
    if (this.metadata !== undefined) {
      if (this.metadata.length > 0) {
        this.dometasettings();
      }
    }
    setTimeout(() => {
      if ((this.metadata !== undefined) && (this.sortdata !== undefined)) {
        if (this.metadata.length > 0) {
          this.dometasettings();
        }
      }
      else {
        this.metadataok = false;
        this.progress = false;
      }

    }, 1500);    
  }

  handleklick(plot, event) {
  }

  dometasettings() {
    this.level = this.api.filterArray(this.metadata, "type", "level")[0]["varname"];
    this.levelid = this.api.filterArray(this.metadata, "type", "levelid")[0]['varname'];
    this.levelvalues = [
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
      'Rheinland-Pfalz',
      'Saarland',
      'Sachsen',
      'Sachsen-Anhalt',
      'Schleswig-Holstein',
      'Thüringen'];
    this.subgroups = ["Keine"].concat(this.api.getValues(this.api.filterArray(this.metadata, "type", "group"), "varname"));
    //if (this.subgroups) { this.levelsettings["subgroups"] = this.subgroups[0]; }
    //this.outcomes = this.api.getValues(this.api.sortArray(this.api.filterArray(this.metadata, "topic", "outcomes"), "varname"), "varname");
    //this.determinants = this.api.getValues(this.api.sortArray(this.api.filterArray(this.metadata, "topic", "demography"), "varname"), "varname");
    //if (this.outcomes) { this.levelsettings["outcomes"] = this.outcomes[0]; }
    this.metadataok = true;    
  }

  querydatasmed(thefield) {
    let query = {
      "client_id": this.api.REST_API_SERVER_CLIENTID,
      "groupinfo": {}
    };
    query["groupinfo"]["level"] = "KV"
    query["groupinfo"]["levelid"] = this.levelsettings["levelvalues"];
    query["groupinfo"]["Jahr"] = {
      "$gte": parseInt(this.levelsettings["start"].slice(0, 4)),
      "$lte": parseInt(this.levelsettings["stop"].slice(0, 4))
    };
    query["showfields"] = [thefield, 'KM6Versicherte', 'BEVSTAND'];
        let dbdaterange;
    this.db.querydatadates(thefield, 'KV',
      this.levelsettings["levelvalues"], this.levelsettings["start"],
      this.levelsettings["stop"]).then(data => { dbdaterange = data });
    if (dbdaterange) {
      if ((dbdaterange['min'] > this.levelsettings["start"] ||
        dbdaterange['max'] < this.levelsettings["stop"]) ||
        isNaN(dbdaterange['max']) || isNaN(dbdaterange['min'])) {
        this.api.postTypeRequest('get_data/', query).subscribe(
          data => {
            let res = data["data"];
            this.db.deletewhere(thefield, 'KV', this.levelsettings["levelvalues"],
            this.levelsettings["start"].slice(0, 4), this.levelsettings["stop"].slice(0, 4)).then(() => {
              this.updatedb(res, thefield)
            });
          },
          error => {  });
      }
    }
    else {
      this.api.postTypeRequest('get_data/', query).subscribe(
        data => {
          let res = data["data"];          
          this.db.deletewhere(thefield, 'KV', this.levelsettings["levelvalues"],
            this.levelsettings["start"].slice(0, 4), this.levelsettings["stop"].slice(0, 4)).then(() => { 
              this.updatedb(res, thefield) });
        },
        error => { this.progress = false; });
    };

  }

  async updatedb(data, thefield) {
    await this.smed.newcombine(data, thefield); 
    this.makesmeditems(thefield);
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
      let statswdate = await this.db.listdata('stats', "KV", this.levelsettings['levelvalues'],this.levelsettings['start'],this.levelsettings['stop']);
      if (statswdate.length>0){

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
      };
      //console.log("Sample Stat Entry:",statswdate[0]);
      this.stats_ts = statswdate;
      let theid = this.stats_ts[0]['levelid'];
      if (theid != "Gesamt") { this.summaryinfo["levelid"] = " in ".concat(theid); }
      else { this.summaryinfo["levelid"] = " in Deutschland"; };
      this.summaryinfo["Assessments Gesamt"] = this.api.sumArray(this.api.getValues(this.stats_ts, "Assessments"));
      this.summaryinfo["Assessments pro Woche"] = this.summaryinfo["Assessments Gesamt"] / this.api.getValues(this.stats_ts, "Assessments").length;
      this.summaryinfo["Mittlere Dauer"] = this.api.sumArray(this.api.getValues(this.stats_ts, "DAUERsmed")) / this.api.sumArray(this.api.getValues(this.stats_ts, "DAUERsmedFaelle"));
      this.summaryinfo["Anzahl Beschwerden"] = this.api.sumArray(this.api.getValues(this.stats_ts, "Anzahl_Beschwerden")) / this.summaryinfo["Assessments Gesamt"];
      let sorteddates = this.api.getValues(this.stats_ts, "Datum").sort();
      this.summaryinfo["Beginn"] =new Date(sorteddates[0]);
      this.summaryinfo["Ende"] = new Date(sorteddates.pop());
      this.summaryinfo["done"] = true;
    }

    };
    

    if (thefield == "mainsymptoms_ts") {
      let symptoms_list = [];
      symptoms_list = await this.db.listdata('mainsymptoms_ts', "KV", this.levelsettings['levelvalues'],this.levelsettings['start'],this.levelsettings['stop']);
      symptoms_list = this.api.getValues(symptoms_list,'data');
      this.symptoms_list_export = this.api.sortArray(this.api.groupbysum(symptoms_list,'Sympt','','n'),'n',"descending");
      for (let item of this.symptoms_list_export) {
        let anzahl_symptome = this.api.sumArray(this.api.getValues(this.symptoms_list_export, "n"));
        item["Anteil"] = Math.round(1000 * item['n'] / anzahl_symptome) / 10;
      }
      this.symptoms_list = this.symptoms_list_export.slice(0, 15);
      
    };

    if (thefield == "timestats") {
      let utiltimes = [];
      let dbutiltimes = await this.db.listdata('timestats', "KV", this.levelsettings['levelvalues'],this.levelsettings['start'],this.levelsettings['stop'],false);
      dbutiltimes = this.api.getValues(dbutiltimes,'data');
      utiltimes = this.api.groupbysum(dbutiltimes, "wt", "h", "n");
      dbutiltimes = [];
      for (let item of utiltimes) {
        item["Wochentag"] = this.api.getweekdayname(item["wt"]);
        item['Anzahl']=item['n'];
        delete item['n'];
      }
      this.utiltimes = this.api.makeheatmapdata(utiltimes,"wt","h",'Anzahl','Wochentag');
      //console.log("Utiltimes:",this.utiltimes)      
    };

    if (thefield == "timetotreat") {
      let ttt = [];     
      ttt = await this.db.listdata('timetotreat', "KV", this.levelsettings['levelvalues'],this.levelsettings['start'],this.levelsettings['stop']);
      ttt = this.api.groupbysum(ttt,'TTTsmed_text','','Anzahl');
      let total = this.api.sumArray(this.api.getValues(ttt,'Anzahl'));
      for (let item of ttt){
        item['Anteil']=Math.round(1000*item['Anzahl']/total)/10;
        item['rank']=0;
        if (item['TTTsmed_text'] =='Ärztliche Behandlung nicht innerhalb von 24h erforderlich'){item['rank']=1;};
        if (item['TTTsmed_text'] =='Ärztliche Behandlung innerhalb von 24h'){item['rank']=2;};
        if (item['TTTsmed_text'] =='schnellstmögliche ärztliche Behandlung'){item['rank']=3;};
        if (item['TTTsmed_text'] =='Notfall'){item['rank']=4;};
      }
      ttt= this.api.sortArray(ttt,'rank');
      this.timetotreat = ttt;  
      //console.log("TTT",ttt);
                
    }

  }
}
