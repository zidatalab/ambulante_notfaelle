import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { AuthService } from 'src/app/services/auth.service';
import { CsvexportService } from 'src/app/services/csvexport.service';

@Component({
  selector: 'app-private',
  templateUrl: './private.component.html',
  styleUrls: ['./private.component.scss']
})
export class PrivateComponent implements OnInit {
  constructor(private api: ApiService, private auth: AuthService, private csv: CsvexportService) { }
  tsquery = {};
  tsqueryresult = {};
  bevrefdata = {};
  colorsscheme;
  restablecols = [];
  progress = false;
  settings: any;
  duration: number;
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
    'Rheinland-Pfalz',
    'Saarland',
    'Sachsen',
    'Sachsen-Anhalt',
    'Schleswig-Holstein',
    'Thüringen'];
  outcomes = [
    //'Anteil Assessments', 
    'Anzahl Assessments',
    //'Anzahl Assessments je 100 Tsd. Einw.', ## Not possible due to missing reference data
    'Anzahl Beschwerden pro Assessment',
    'Anzahl Fragen je Assessment',
    'Mittlere Dauer je Assessment',
    'Mittlere Dauer Disposition',
    //'Anteil Assessment an Disposition',
    //'Häufigste Beschwerden',
    //'Häufigste Hauptbeschwerden'
  ]

  diffmerkmale = [
    'KV',
    'Alter',
    'Geschlecht',
    'Wochentag',
    'Empfehlung Dringlichkeit',
    'Empfehlung Ort',
    'Entscheidung Dringlichkeit',
    'Entscheidung Ort',
    'Hauptbeschwerde',
    'Beschwerde'
  ];

  diffvars = {
    'KV': 'levelid',
    'Alter': ['ALTER_id', 'ALTER_text'],
    'Geschlecht': ['Geschlecht'],
    'Wochentag': [],
    'Empfehlung Dringlichkeit': ['TTTsmed_id', 'TTTsmed_text'],
    'Empfehlung Ort': ['POCsmed_id', 'POCsmed_text'],
    'Entscheidung Dringlichkeit': ['TTTdispo_id', 'TTTdispo_text'],
    'Entscheidung Ort': ['POCdispo_id', 'POCdispo_text'],
    'Hauptbeschwerde': ['Hauptbeschwerde'],
    'Beschwerde': ['Beschwerden_gesamt']
  }

  SmED_Modul: string = "Alle";
  SmED_Level: string = "Alle";

  isSingleDayAnalyses = false

  ngOnInit(): void {
    this.colorsscheme = this.api.makescale(5);
    //console.log('colors',this.colorsscheme);
    this.settings = { 'analyzeall': true, 'level': 'KV', 'levelid': 'Gesamt', 'diffmerkmale': [] };
    //testesttings
    this.settings = {
      "analyzeall": true, "level": "KV", "levelid": "Gesamt", "diffmerkmale": [],
      "start": new Date("2022-01-02"),
      "end": new Date("2022-01-08"), "outcome": "Anzahl Assessments"
    };

    this.timeseriesquery();
  }

  updatequery(key, value) {
    //console.log("Settings changed");
    if (key != "__change" && key != "diffmerkmale") { this.settings[key] = value };

    if (key == "levelid" && value == "Gesamt") { this.settings['analyzeall'] = true; };

    if (key == 'outcome' && value == 'Anzahl Assessments je 100 Tsd. Einw.') {
      this.settings['diffmerkmale'] = [];
    }

    if (key == 'diffmerkmale') {
      if (this.settings['diffmerkmale'].includes(value)) {
        this.settings['diffmerkmale'] = this.settings['diffmerkmale'].filter(function (item) { return item !== value });
      }
      else {
        if (!this.settings['diffmerkmale'].includes(value) && this.settings['diffmerkmale'].length < 2) {
          if (!((this.settings['outcome'] == 'Anzahl Assessments je 100 Tsd. Einw.') && ['Alter', 'Geschlecht'].includes(value)))
            this.settings['diffmerkmale'].push(value);
        };
      };
    }

    if (key == 'SmED_Modul') {
      this.SmED_Modul = value;
    }

    if (key == 'SmED_Level') {
      this.SmED_Level = value;
    }

    if (this.checkparams()) {
      this.timeseriesquery();
    }
  }

  checkparams() {
    let res = true;
    this.duration = 0;

    if (this.settings['start'] && this.settings['end']) {
      this.duration = (this.settings['end'] - this.settings['start']) / 1000 / 60 / 60 / 24;
    };

    if (this.duration == 0 || this.duration > 90) {
      res = false;
    };

    if (!this.settings['outcome']) {
      res = false;
    }

    return res;
  }

  timeseriesquery() {
    this.progress = true;
    this.tsqueryresult = [];

    let _start = new Date(this.settings['start'])
    let _end = new Date(this.settings['end'])

    console.log(this.isSingleDayAnalyses)
    
    function setDate(date) {
      const minutesOffset = new Date(date.setMinutes(date.getMinutes() - date.getTimezoneOffset()))
      
      return minutesOffset.toISOString().substring(0, 10);
    }
    
    console.log(setDate(_start), setDate(_end))
    let start = "";
    
    if (this.settings['start']) { start = setDate(_start) };
    
    let end = "";

    if (this.settings['end']) { end = setDate(_end) };

    this.tsqueryresult = {};
    this.bevrefdata = {};
    this.tsquery = {
      "startdate": start.slice(0, 10),
      "stopdate": end.slice(0, 10),
      "timeframe": "none",
      "outcome": NaN,
      "filterlist":
        { 'level': 'KV' }
      ,
      "subgroups": [],
      "client_id": this.api.REST_API_SERVER_CLIENTID
    };

    if (this.settings['levelid'] != "Gesamt") { this.tsquery['filterlist']['levelid'] = this.settings['levelid'] };

    for (let item of this.settings['diffmerkmale']) {
      this.tsquery['subgroups'] = this.tsquery['subgroups'].concat(this.diffvars[item]);
    };

    if (this.settings['diffmerkmale'].includes('Wochentag')) {
      this.tsquery['timeframe'] = 'weekday';
    };

    if ('Anzahl Beschwerden pro Assessment' == this.settings['outcome']) {
      this.tsquery['outcome'] = "Anzahl_Beschwerden";
    };

    if ('Anzahl Fragen je Assessment' == this.settings['outcome']) {
      this.tsquery['outcome'] = "Anzahl_Fragen";
    };

    if ('Mittlere Dauer je Assessment' == this.settings['outcome']) {
      this.tsquery['outcome'] = "DAUERsmed";
    };

    if ('Mittlere Dauer Disposition' == this.settings['outcome']) {
      this.tsquery['outcome'] = "DAUERdispo";
      this.tsquery["filterlist"]['DAUERdispo'] = { $gte: 0 }
    };

    if ('Anteil Assessment an Disposition' == this.settings['outcome']) {
      // later 2 Queries need to be done, one for DAUERsmed and one DAUERdispo
      // console.log("Not implemented yet!");
    };

    if ('Häufigste Beschwerden' == this.settings['outcome']) {
      this.tsquery['outcome'] = "Beschwerden_gesamt";
    };
    
    if ('Häufigste Hauptbeschwerden' == this.settings['outcome']) {
      this.tsquery['outcome'] = "Hauptbeschwerde";
    };

    this.restablecols = this.settings['diffmerkmale'].concat([this.tsquery['outcome'], 'Anzahl', 'Anteil']);

    if (!this.tsquery['outcome']) {
      this.restablecols = this.settings['diffmerkmale'].concat(['Anzahl', 'Anteil']);
    }

    // Level/Modul
    if (this.SmED_Level != "Alle") {
      if (this.SmED_Level != "Patient") {
        this.tsquery["filterlist"]['SMED_Level'] = this.SmED_Level;
      }
      else {
        this.tsquery["filterlist"]['SMED_Level'] = 'pubusersmed';
      }
    }

    if (this.SmED_Modul != "Alle") {
      this.tsquery["filterlist"]['SMED_Modul'] = this.SmED_Modul;
    }

    this.api.postTypeRequest('get_data/', {
      "client_id": this.api.REST_API_SERVER_CLIENTID,
      "groupinfo": {
        "level": "KV", "levelid": this.settings['levelid'],
        "Jahr": parseInt(this.tsquery['stopdate'].slice(0, 4)),
        "Monat": parseInt(this.tsquery['stopdate'].slice(5, 7))
      },
      "showfields": ['level', 'levelid', 'Jahr', 'Monat', 'KM6Versicherte', 'BEVSTAND']
    }).subscribe(data => {
      this.bevrefdata = data['data'][0];
      this.api.postTypeRequest('analytics/timeseries/', this.tsquery).subscribe(data => { this.tsqueryresult = this.preparedata(data); });
    });
  }

  preparedata(input) {
    let output = [];

    if (input.length > 0) {
      let allitems = this.api.sumArray(this.api.getValues(input, 'count'));

      for (let item of input) {
        //item['Bev']=this.bevrefdata['BEVSTAND'];        
        if (parseFloat(item['count']) > 0) {
          item['Anzahl'] = item['count'];
          item['Anteil'] = Math.round(1000 * item['count'] / allitems) / 1000;
        }

        //item['Je100Tsd']=Math.round(1e6*item['count']/item['Bev'])/10;
        item['Alter'] = item['ALTER_text'];
        item['Wochentag'] = this.api.getweekdayname(item['timeframe'], true);
        item['KV'] = item['levelid'];

        if (item['POCsmed_text']) {
          item['Empfehlung Ort'] = item['POCsmed_text'];
        };

        if (item['TTTsmed_text']) {
          item['Empfehlung Dringlichkeit'] = item['TTTsmed_text'];
        };

        if (item['POCdispo_text']) {
          item['Entscheidung Ort'] = item['POCdispo_text'];
        };

        if (item['TTTdispo_text']) {
          item['Entscheidung Dringlichkeit'] = item['TTTdispo_text'];
        };

        if (item['Beschwerden_gesamt']) {
          item['Beschwerde'] = item['Beschwerden_gesamt'];
          delete item['Beschwerden_gesamt'];
        };

        if (item['Anzahl']) {
          output.push(item);
        };
      }

      if (this.settings['diffmerkmale'].includes('Alter')) {
        output = this.api.sortArray(output, 'ALTER_id');
      }
    }

    this.progress = false;

    return output;
  }

  exportascsv(name, data) {
    this.csv.exportToCsv(name, data);
    this.csv.exportToCsv(name + "_settings.csv", [this.settings]);
  }
}
