import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { AuthService } from 'src/app/services/auth.service';
import { SmedAggregationService } from 'src/app/services/smed-aggregation.service';



@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.scss']
})
export class StartComponent implements OnInit {



  constructor(private api: ApiService, private auth: AuthService, private smed:SmedAggregationService) { }
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
  summaryinfo={};
  smedrange={};
  zeitaumoptions=["Letzte Woche","Letzte 4 Wochen","Aktuelles Jahr","Letztes Jahr","Gesamt","Detailliert"];

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
    if (this.metadataok) {this.querydatasmed();}
    // Wait if no metadata and try again. Fixes logout behaviour
    else {
      setTimeout(() => {
        this.updatemetadata();
        if (this.metadataok) {
          this.querydatasmed();
        }
        else {
          this.progress=false;
          
        };
      }, 1500);
    }    
    console.log(this.levelsettings);
  }

  ngOnDestroy(){
    this.data=[];
    this.mapdata=[];
    
    }


  setlevel(level, value) {
    this.progress = true;
    this.levelsettings[level] = value;
    this.querydatasmed();
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
    let res = false
    res = this.data
    // if (res) {
    //   res = (this.data.length > 0) && (this.metadata.length > 0);
    // }
    return res
  }

  dometasettings(){
    this.level = this.api.filterArray(this.metadata, "type", "level")[0]["varname"];
          this.levelid=this.api.filterArray(this.metadata,"type","levelid")[0]['varname'];
          this.levelvalues = this.api.filterArray(this.sortdata, "varname", this.levelid)[0]["values"];
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

  querydatasmed(){
    let query = {
      "client_id": this.api.REST_API_SERVER_CLIENTID      ,
      "groupinfo":{}
    };

    query["groupinfo"]["level"] = "KV"
    query["groupinfo"]["levelid"] = this.levelsettings["levelvalues"];

    this.api.postTypeRequest('get_data/', query).subscribe(
      data => {this.data = data["data"][0];
      this.makesmeditems();this.progress=false;},
      error => {this.data = NaN;this.progress=false;});
  }

  makesmeditems(){
    this.summaryinfo["done"]=false;
    let statswdate = this.data["stats"];
    statswdate = this.smed.adddate(statswdate,"Jahr","KW");    
    let symptoms_list = this.smed.adddate(this.data["mainsymptoms_ts"] ,"Jahr","KW");   
    // Appply date filters
    if (this.levelsettings["zeitraum"]!=="Gesamt"){
      let today = new Date()
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
      console.log("APPLY FILTER","\ntoday",today,"\nstart",startdate,"\nend",enddate);
      for (let item of statswdate){
        item["touse"]=(item["Datum"]>=startdate) && (item["Datum"]<=enddate);                
      }
      for (let item of symptoms_list){
        item["touse"]=(item["Datum"]>=startdate) && (item["Datum"]<=enddate);                
      }
      statswdate = this.api.filterArray(statswdate,"touse",true); 
      symptoms_list = this.api.filterArray(symptoms_list,"touse",true); 
      this.progress=false;
    }
    
    
    this.stats_ts=statswdate;
    if (statswdate.length>0){
    symptoms_list = this.smed.aggsymptoms(symptoms_list);
    this.symptoms_list=symptoms_list.slice(0,20);
    this.summaryinfo["Assessments Gesamt"]=this.api.sumArray(this.api.getValues(this.stats_ts,"Anzahl"));
    this.summaryinfo["Assessments pro Woche"]=this.summaryinfo["Assessments Gesamt"]/this.api.getValues(this.stats_ts,"Anzahl").length;
    this.summaryinfo["Mittlere Dauer"]=this.api.sumArray(this.api.getValues(this.stats_ts,"Dauer_sek"))/this.api.getValues(this.stats_ts,"Dauer_sek").length;
    this.summaryinfo["Beginn"] = new Date(Math.min(...this.api.getValues(this.stats_ts,"Datum")));
    this.summaryinfo["Ende"] = new Date(Math.max(...this.api.getValues(this.stats_ts,"Datum")));
    this.summaryinfo["done"]=true;
    }
  }

  smeddetailquery(){
    if (this.levelsettings["start"] && this.levelsettings["end"]){
      this.querydatasmed();
    }    
  }
}
