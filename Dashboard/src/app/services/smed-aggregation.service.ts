import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { DBService } from 'src/app/services/dbservice.service';
import { DataItem } from 'src/app/services/db';

@Injectable({
  providedIn: 'root'
})
export class SmedAggregationService {

  constructor(private db: DBService, private api:ApiService) { }

// Query Methods



async newcombine(array,fieldname){
  let newarray = [];
  let dbarray=[];
  if (array.length==0){return []};
  for (let item of array){
    for (let fielditem of item[fieldname]){
      let topush = new DataItem;
      topush['level']=item['level'];
      topush['levelid']=item['levelid'];
      topush['Jahr']=item['Jahr'];
      topush['Monat']=item['Monat'];
      topush['KM6Versicherte']=item['KM6Versicherte'];
      topush['BEVSTAND']=item['KM6Versicherte'];
      topush['KW']=fielditem['KW'];
      topush['Datum']=this.getDateOfISOWeek(topush['KW'],topush['Jahr']).toISOString().slice(0,10);
      delete fielditem['KW'];
      topush['data']=fielditem;
      newarray.push(topush); 
      topush['Indicator']=fieldname;
      dbarray.push(topush);    
    }
  }  
  await this.db.adddatabulk(dbarray);    
}

querysmedts(groupvars=[],outcome="",levelsettings,sort=false,topx:any=false,filtervar="",filtervalues=[],topxvar=""){
  if (levelsettings["zeitraum"]!=="Gesamt") {    
  let query = {
    "startdate": levelsettings['start'].toISOString().slice(0,10),
    "stopdate": levelsettings['end'].toISOString().slice(0,10),
    "subgroups": groupvars    ,
    "filterlist": []
  }
  query["filterlist"].push({"level":"KV"});
  if (levelsettings["levelvalues"]!=="Gesamt"){
    query["filterlist"].push({"levelid":levelsettings["levelvalues"]});
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
      return res;
      
    },        
    error => {return [];});
  }
  else {
    return [];
  };     
}

// Aggregation Functions


adddate(Array,yearvar,isoweekvar){
  for (const item of Array){
    item["Datum"]=this.getDateOfISOWeek(item[isoweekvar],item[yearvar]);
  }
  return Array;
}

adddatemonth(Array,yearvar,monthvar){
  for (const item of Array){
    item["Datum"]=new Date(item[yearvar]+"-"+item[monthvar]+"-01");
  }
  return Array;
}

getDateOfISOWeek(w, y) {
  let millisperday = 1000*60*60*24;
  let yearstart = new Date(y+"-01-01");
  yearstart=new Date(yearstart.getTime()-(yearstart.getDay()-1)*millisperday)
  let ISOweekStart = new Date(yearstart.getTime()+millisperday*7*(w+1));
  return ISOweekStart;
}

aggsymptoms(symptomsobject){
  let inputarray = [];
  let output = {};
  let res = [];
  for (let item of symptomsobject){
    inputarray=inputarray.concat(item["Symptome"])
  }

  for (let item of inputarray){
    if (output[item.name]!==undefined){
      output[item.name]=output[item.name]+item["n"];
    }
    else {
      output[item.name]=item["n"];
    }
  }
  output["Keine Angabe"]=output[""];
  delete output[""];
  for (let thekey in Object.keys(output)){
    res.push({"name":Object.keys(output)[thekey],"n":Object.values(output)[thekey]});
  }

  return this.api.sortArray(res,"n","descending");


}

updatestartstop(levelsettings){
  // Appply date filters
  let today = new Date();
  let startdate = "2019-04-01";
  let enddate = today.getFullYear()+"-12-31";
  if (levelsettings["zeitraum"]=="Aktuelles Jahr"){
      startdate = new Date(today.getFullYear()+"-01-01").toISOString().slice(0,10);
      enddate = new Date(today.getFullYear()+"-12-31").toISOString().slice(0,10)
    };
    if (levelsettings["zeitraum"]=="Letztes Jahr"){
      startdate = new Date(today.getFullYear()-1+"-01-01").toISOString().slice(0,10);
      enddate = new Date(today.getFullYear()-1+"-12-31").toISOString().slice(0,10);
    };
    let millisperday = 1000*60*60*24;
    if (levelsettings["zeitraum"]=="Letzte 4 Wochen"){
      enddate = new Date(today.getTime() - today.getDay()*millisperday).toISOString().slice(0,10);
      startdate = new Date(today.getTime()-((4*7)-1)*millisperday).toISOString().slice(0,10);        
    };
    if (levelsettings["zeitraum"]=="Letzte Woche"){
      enddate = new Date(today.getTime() - today.getDay()*millisperday).toISOString().slice(0,10);
      startdate = new Date(today.getTime()-((6))*millisperday).toISOString().slice(0,10);        
    };
    if (levelsettings["zeitraum"]!="Detailliert"){
      levelsettings["start"]=startdate;
      levelsettings["stop"]=enddate;
    }
    else {
      // Do nothing, start / stop have been set.
      
    };
    return levelsettings;
}



}
