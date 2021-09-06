import { Injectable } from '@angular/core';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class SmedAggregationService {

  constructor(private api:ApiService) { }

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



}
