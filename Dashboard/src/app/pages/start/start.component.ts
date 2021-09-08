import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { AuthService } from 'src/app/services/auth.service';
import { SmedAggregationService } from 'src/app/services/smed-aggregation.service';
import { CsvexportService } from 'src/app/services/csvexport.service';


@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.scss']
})
export class StartComponent implements OnInit {



  constructor(private csv: CsvexportService, private api: ApiService, private auth: AuthService, private smed:SmedAggregationService) { }
  metadata=[];
  progress:boolean;
  metadataok: boolean;
  mapdata: any;
  mapdatafor: string;
  sortdata=[];
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
  levelid:string;
  datakeystable:any;  
  
  // SMED
  stats_ts:any;
  symptoms_list:any;
  symptoms_list_export:any;
  summaryinfo={};
  smedrange={};
  zeitaumoptions=["Letztes Jahr","Aktuelles Jahr","Gesamt","Detailliert"];
  ts_results={};
  utiltimes = [];
  ngOnInit(): void {
    this.levelsettings = {"level":"KV","levelvalues":"Gesamt","zeitraum":"Gesamt"};
    this.summaryinfo["done"]=false;
    this.progress=true;
    this.colorsscheme = ["#e91e63"];
    this.mapdatafor = "";
    this.data=[];
    this.mapdata=[];
    this.updatemetadata();
    this.auth.currentUser.subscribe(data => { this.currentuser = data; });
    if (this.metadataok && this.metadata.length>0) {this.progress=true;this.querydatasmed();}
    // Wait if no metadata and try again. Fixes logout behaviour
    else {
      setTimeout(() => {
        this.updatemetadata();
        if (this.metadataok && this.metadata.length>0) {
          this.progress=true;
          this.querydatasmed();
        }
        else {
          this.progress=false;
          
        };
      }, 1500);
    }   
    
  }

  ngOnDestroy(){
    this.data=[];
    this.mapdata=[];
    
    }


  setlevel(level, value) {
    this.progress = true;
    this.levelsettings[level] = value;
    this.querydatasmed(level);
  }

  updatemetadata() {
    if (this.api.getmetadata("metadata")){
    this.metadata = this.api.getmetadata("metadata");
    this.sortdata = this.api.getmetadata("sortdata");
    this.geojson_available = this.api.getmetadata("geodata");
    }
    if(this.metadata!==undefined){
      if (this.metadata.length>0){
        this.dometasettings();
      }      
    }
    setTimeout(() => {
      if ((this.metadata !==undefined ) && (this.sortdata !== undefined)) {
        if (this.metadata.length > 0) {
          this.dometasettings();
        }
      }
      else {
        this.metadataok = false;
        this.progress=false;
      }  
      
    }, 1500);    
  }

  thereisdata() {
    let res = []
    res = res.concat(this.data);
    return res.length>0
  }

  handleklick(plot,event){
    console.log("CLICK ON PLOT",plot,"\n",event);
  }

  dometasettings(){
    this.level = this.api.filterArray(this.metadata, "type", "level")[0]["varname"];
          this.levelid=this.api.filterArray(this.metadata,"type","levelid")[0]['varname'];
          this.levelvalues = this.api.filterArray(this.sortdata, "varname", this.levelid)[0]["values"].sort();
          this.subgroups = ["Keine"].concat(this.api.getValues(this.api.filterArray(this.metadata, "type", "group"), "varname"));
          if (this.subgroups) { this.levelsettings["subgroups"] = this.subgroups[0]; }
          this.outcomes = this.api.getValues(this.api.sortArray(this.api.filterArray(this.metadata, "topic", "outcomes"), "varname"), "varname");
          this.determinants = this.api.getValues(this.api.sortArray(this.api.filterArray(this.metadata, "topic", "demography"), "varname"), "varname");
          if (this.outcomes) { this.levelsettings["outcomes"] = this.outcomes[0]; }
          this.metadataok = true;
          this.progress=false;          
  }
  thereismapdata() {
    let res = this.thereisdata() && this.mapdata
    return res
  }

  querydata() {
    let query = {
      "client_id": this.api.REST_API_SERVER_CLIENTID      
    };
    let outcomeinfo = this.api.filterArray(this.metadata, "varname", this.levelsettings["outcomes"])[0]['type'];
    query["groupinfo"][this.level] = this.levelsettings["levelvalues"];
    this.api.postTypeRequest('get_data/', query).subscribe(data => {
      this.datakeys = Object.keys(data["data"][0]);
      this.datakeystable = Object.keys(data["data"][0]);
      this.data = data["data"] ;
      const index = this.datakeys.indexOf(this.level);
      if (index > -1) {
        this.datakeys.splice(index, 1);
      }
      if (this.levelsettings['levelvalues']!=this.levelvalues[0]){
        this.datakeys = [this.levelid,this.levelsettings["outcomes"]];
      }
      else {
        this.datakeys = this.datakeys.filter(item => item!=this.levelid);
      }

      
      // Remove unneeded fields
      setTimeout(() => { 
      if (outcomeinfo == 'rate') {
        this.data_number = [];
        this.data_rate = [(this.levelsettings["outcomes"])];
      }
      else {
        this.data_number = [(this.levelsettings["outcomes"])];
        this.data_rate = [];
      };
    }, 0);
      
      
      if ((this.mapdatafor !== this.levelsettings['levelvalues']) && (this.levelsettings['levelvalues'] !== this.levelvalues[0]) && (this.geojson_available.indexOf(this.levelsettings['levelvalues']) >= 0)) {
        this.api.getTypeRequest('get_geodata/?client_id=' + this.api.REST_API_SERVER_CLIENTID + '&levelname=' + this.levelsettings['levelvalues']).subscribe(
          data => {
            this.mapdata = data;
            this.mapdatafor = this.levelsettings['levelvalues'];
          },
          error => {
            this.mapdata=null;
          });
      }
    });

 
  }

  querydatasmed(changetype=""){
    let query = {
      "client_id": this.api.REST_API_SERVER_CLIENTID      ,
      "groupinfo":{}
    };

    query["groupinfo"]["level"] = "KV"
    query["groupinfo"]["levelid"] = this.levelsettings["levelvalues"];
    query["showfields"]=this.api.getValues(this.api.filterArray(this.metadata,"topic","outcomes"),"varname");
    if (changetype!="zeitraum"){
    this.api.postTypeRequest('get_data/', query).subscribe(
      data => {
        let res = data["data"];
        // This step is crucial to combine multiple documents into one.
        this.data = this.combinesmeddata(res);        
      this.makesmeditems();},
      error => {this.data = NaN;this.progress=false;});
    }
    else {
      this.makesmeditems();
    }
  }

  querysmedts(groupvars=[],outcome="",resultname,sort=false,topx:any=false,filtervar="",filtervalues=[],topxvar=""){
    if (!this.currentuser){
      return;
    }
    if (this.levelsettings["zeitraum"]!=="Gesamt") {    
    let query = {
      "startdate": this.levelsettings['start'].toISOString().slice(0,10),
      "stopdate": this.levelsettings['end'].toISOString().slice(0,10),
      "subgroups": groupvars    ,
      "filterlist": []
    }
    query["filterlist"].push({"level":"KV"});
    if (this.levelsettings["levelvalues"]!=="Gesamt"){
      query["filterlist"].push({"levelid":this.levelsettings["levelvalues"]});
    }
    if (outcome!=""){
      query["outcome"]=outcome;
    }
    let tofilter = false;
    if (filtervar!=="" && filtervalues.length>0){tofilter=true};    
    return this.api.postTypeRequest('analytics/timeseries/', query).subscribe(
      data => {
        let res = data["result"];
        if (sort){
          res = this.api.sortArray(res,"count","descending");
        }
        if (topx && topxvar==''){
          res = res.slice(0,topx);
        }
        if (tofilter){
          res = this.api.filterArraybyList(res,filtervar,filtervalues);
        }
        if (topx && topxvar!==''){
          let keycounts = {};
          for (let item of res){
            if (keycounts[item[topxvar]] && Math.round(item['count'])){
              keycounts[item[topxvar]]=keycounts[item[topxvar]]+item['count'];
            }
            if (!keycounts[item[topxvar]] && Math.round(item['count'])) {
              keycounts[item[topxvar]]=item['count'];
            }
          }
          let keycountsarray= [];
          for (let key of Object.keys(keycounts)){
            keycountsarray.push({"name":key,"count":keycounts[key]})
          }
          let filterlist = this.api.getValues(this.api.sortArray(keycountsarray,'count',"descending").slice(0,topx),"name");
          res= this.api.filterArraybyList(res,topxvar,filterlist);
        }
        this.ts_results[resultname]= res;
        
      },        
      error => {this.ts_results[resultname]=[];});
    }
    else {
      this.ts_results[resultname]=[];
    };     
  }


  combinesmeddata(array){
    let startobject = {};
    let fields = this.api.getValues(this.api.filterArray(this.metadata,"topic","outcomes"),"varname");
    if (array.length==1) {
      startobject = array[0];  
    }
    if (array.length>1) {
      startobject = array[0];
      const remainingarray = array;
      remainingarray.splice(0,1);
      for (let item of remainingarray){
        for (let field of fields){
            let combined = startobject[field].concat(item[field]);
          startobject[field] = combined;
        }
      }
    }
    return startobject;
  }

  exportascsv(name, data) {
    this.csv.exportToCsv(name, data);
    this.csv.exportToCsv(name+"_settings.csv", [this.levelsettings] );
  }

  makesmeditems(){
    this.summaryinfo["done"]=false;
    let statswdate = this.smed.adddate(this.data["stats"],"Jahr","KW");    
    let symptoms_list = this.smed.adddatemonth(this.data["mainsymptoms_ts"] ,"Jahr","Monat");  
    let utiltimes = this.smed.adddatemonth(this.data["timestats"],"Jahr","Monat");
    // Appply date filters
    if (this.levelsettings["zeitraum"]!=="Gesamt"){
      this.levelsettings["anperioddays"]=65;
      let today = new Date();
      today.setHours(0);
      today.setMinutes(0);
      today.setSeconds(0);
      today.setMilliseconds(0);
      let startdate = this.levelsettings["start"];
      let enddate = this.levelsettings["end"];
      if (this.levelsettings["zeitraum"]=="Aktuelles Jahr"){
        startdate = new Date(today.getFullYear()+"-01-01")
        enddate = new Date(today.getFullYear()+"-12-31")
      }
      if (this.levelsettings["zeitraum"]=="Letztes Jahr"){
        startdate = new Date(today.getFullYear()-1+"-01-01")
        enddate = new Date(today.getFullYear()-1+"-12-31")
      }
      let millisperday = 1000*60*60*24;
      if (this.levelsettings["zeitraum"]=="Letzte 4 Wochen"){
        enddate = new Date(today.getTime() - today.getDay()*millisperday);
        startdate = new Date(enddate.getTime()-((4*7)-1)*millisperday);        
      }
      if (this.levelsettings["zeitraum"]=="Letzte Woche"){
        enddate = new Date(today.getTime() - today.getDay()*millisperday);
        startdate = new Date(enddate.getTime()-((6))*millisperday);        
      }
      for (let item of statswdate){
        item["touse"]=(item["Datum"]>=startdate) && (item["Datum"]<=enddate);          
      }
      for (let item of symptoms_list){
        item["touse"]=(item["Datum"]>=startdate) && (item["Datum"]<=enddate);                
      }
      for (let item of utiltimes){
        item["touse"]=(item["Datum"]>=startdate) && (item["Datum"]<=enddate);                
      }

      statswdate = this.api.filterArray(statswdate,"touse",true); 
      symptoms_list = this.api.filterArray(symptoms_list,"touse",true); 
      utiltimes = this.api.filterArray(utiltimes,"touse",true);
      
      this.levelsettings["anperioddays"]= Math.floor((enddate-startdate)/millisperday);
      this.levelsettings["start"]=startdate;
      this.levelsettings["end"]=enddate;
      this.progress=false;
    }

    utiltimes = this.api.groupbysum(utiltimes,"wd","h","Anzahl");
    this.utiltimes = utiltimes;
    for (let item of this.utiltimes){
      item["Wochentag"]=this.api.getweekdayname(item["wd"]);
    }
    
    
    
    
    this.stats_ts=statswdate;
    for (let item of this.stats_ts) {
      item["Mittlere Dauer (Min.)"]=(item["Dauer_sek"]/item["Anzahl"])/60;                
      if (item["Dauer_sek"]==0){
        item["Mittlere Dauer (Min.)"]=null;
      }
      item["Mittlere Anzahl Fragen"]=item["Anzahl_Fragen"]/item["Anzahl"];                
      if (item["Anzahl_Fragen"]==0){
        item["Mittlere Anzahl Fragen"]=null;
      }
    };
    if (statswdate.length>0){
    this.symptoms_list_export = this.smed.aggsymptoms(symptoms_list);
    this.symptoms_list = this.symptoms_list_export.slice(0,15);
    this.summaryinfo["Assessments Gesamt"]=this.api.sumArray(this.api.getValues(this.stats_ts,"Anzahl"));
    this.summaryinfo["Assessments pro Woche"]=this.summaryinfo["Assessments Gesamt"]/this.api.getValues(this.stats_ts,"Anzahl").length;
    this.summaryinfo["Mittlere Dauer"]=this.api.sumArray(this.api.getValues(this.stats_ts,"Dauer_sek"))/this.summaryinfo["Assessments Gesamt"];
    this.summaryinfo["Beginn"] = new Date(Math.min(...this.api.getValues(this.stats_ts,"Datum")));
    this.summaryinfo["Ende"] = new Date(Math.max(...this.api.getValues(this.stats_ts,"Datum")));
    this.summaryinfo["done"]=true;    
    }

    this.progress=false;

    if (this.levelsettings["anperioddays"]<=64 && (this.levelsettings["zeitraum"]!=="Gesamt")){
    // Query TS Data;
          // Keys:
          // 'timestamp', 'Dauer_sek', 'Geschlecht', 'ALTER_text', 'ALTER_id', 'TTTsmed_text', 'TTTsmed_id', 'POCsmed_text', 'POCsmed_id', 'SMED_Level', 'levelid', 'Hauptbeschwerde', 'Nebenbeschwerden', 'level', 'client_id'
          this.ts_results={};
          //this.querysmedts(['TTTsmed_text', 'TTTsmed_id', 'POCsmed_text', 'POCsmed_id'],"","1_dingl_ort");
          // HIER SPÄTER Abweichung zwischen Empfehlung und Entscheidung: 2_abweichung
          // 3_dauer_sympt top 20         
          //this.querysmedts(['Hauptbeschwerde'],"Dauer_sek",'3_dauer_sympt',true,20);
          // 4_dringl_symp
          //this.querysmedts(['Hauptbeschwerde','TTTsmed_text'],"",'4_dringl_symp',false,20,"",[],'Hauptbeschwerde');
  
        }
      }

  smeddetailquery(){
    if (this.levelsettings["start"] && this.levelsettings["end"]){
      this.querydatasmed();
    }    
  }
}
