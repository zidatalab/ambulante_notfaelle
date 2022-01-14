import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-private',
  templateUrl: './private.component.html',
  styleUrls: ['./private.component.scss']
})
export class PrivateComponent implements OnInit {


  constructor(private api: ApiService, private auth: AuthService) { }
  tsquery={};
  tsqueryresult={};
  settings: any;
  duration:number;
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
    'Anteil Assessments', 
    'Anzahl Assessments',
    'Anzahl Assessments je 100 Tsd. Einw.',
    'Anzahl Beschwerden pro Assessment',
    'Anzahl Fragen je Assessment',
    'Mittlere Dauer je Assessment',
    'Mittlere Dauer Disposition',
    'Anteil Assessment an Disposition',
    'Häufigste Beschwerden',
    'Häufigste Hauptbeschwerden']

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
  'KV':'levelid', 
  'Alter':['ALTER_id','ALTER_text'], 
  'Geschlecht':['Geschlecht'], 
  'Wochentag':[], 
  'Empfehlung Dringlichkeit':['TTTsmed_id','TTTsmed_text'], 
  'Empfehlung Ort':['POCsmed_id','POCsmed_text'], 
  'Entscheidung Dringlichkeit':['TTTdispo_id','TTTdispo_text'], 
  'Entscheidung Ort':['POCdispo_id','POCdispo_text'], 
  'Hauptbeschwerde':['Hauptbeschwerde'],
  'Beschwerde':['Beschwerden_gesamt']
}

  ngOnInit(): void {
    this.settings = { 'analyzeall': true, 'level': 'KV', 'levelid': 'Gesamt', 'diffmerkmale': [] };
  }



  updatequery(key, value) {
    //console.log("Settings changed");
    if (key != "__change" && key != "diffmerkmale") { this.settings[key] = value };
    if (key == "levelid" && value == "Gesamt") { this.settings['analyzeall'] = true; };
    if (key == 'diffmerkmale') {
      if (this.settings['diffmerkmale'].includes(value)) {
        this.settings['diffmerkmale'] = this.settings['diffmerkmale'].filter(function (item) { return item !== value });
      }
      else {
      if (!this.settings['diffmerkmale'].includes(value) && this.settings['diffmerkmale'].length < 2) {
        this.settings['diffmerkmale'].push(value);
      };  
    };    
    }
  if (this.checkparams()){
    this.timeseriesquery();
  }  
  }

  checkparams(){
    let res = true;    
    this.duration = 0;
    if (this.settings['start'] && this.settings['end']){
      this.duration=(this.settings['end']-this.settings['start'])/1000/60/60/24;
    };
    if (this.duration==0 || this.duration>90){
      res = false;
    };  
    if (!this.settings['outcome']){
      res = false;
    }
    return res;
  }

  timeseriesquery(){
    let tzoffset = (new Date()).getTimezoneOffset() * 60000;
    let start ="";
    if (this.settings['start']){start= (new Date(this.settings['start'] - tzoffset)).toISOString();};
    let end = "";
    if (this.settings['end']){end= (new Date(this.settings['end'] - tzoffset)).toISOString();};
    this.tsqueryresult={};
    this.tsquery= {
        "startdate": start.slice(0,10),
        "stopdate": end.slice(0,10),
        "timeframe": "none",
        "outcome": NaN,
        "filterlist": [
          {'level':'KV'}                      
        ],
        "subgroups": []     
    };   
    if (this.settings['levelid']!="Gesamt"){this.tsquery['filterlist'].push({'levelid':this.settings['levelid']})};
    for (let item of this.settings['diffmerkmale']){
      this.tsquery['subgroups']=this.tsquery['subgroups'].concat(this.diffvars[item]);
    };
    if (this.settings['diffmerkmale'].includes('Wochentag')){
      this.tsquery['timeframe']='weekday';
    };
    if ('Anzahl Beschwerden pro Assessment'==this.settings['outcome']){
      this.tsquery['outcome']="Anzahl_Beschwerden";
    };
    if ('Anzahl Fragen je Assessment'==this.settings['outcome']){
      this.tsquery['outcome']="Anzahl_Fragen";
    };
    if ('Mittlere Dauer je Assessment'==this.settings['outcome']){
      this.tsquery['outcome']="DAUERsmed";
    };
    if ('Mittlere Dauer Disposition'==this.settings['outcome']){
      this.tsquery['outcome']="DAUERdispo";
    };
    if ('Anteil Assessment an Disposition'==this.settings['outcome']){
      // later 2 Queries need to be done, one for DAUERsmed and one DAUERdispo
      // console.log("Not implemented yet!");
    };
    if ('Häufigste Beschwerden'==this.settings['outcome']){
      this.tsquery['outcome']="Beschwerden_gesamt";
    };
    if ('Häufigste Hauptbeschwerden'==this.settings['outcome']){
      this.tsquery['outcome']="Hauptbeschwerde";
    };
    this.api.postTypeRequest('analytics/timeseries/',this.tsquery).subscribe(data => {this.tsqueryresult=data['result'];});
  }


}

