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

getDateOfISOWeek(w, y) {
  var simple = new Date(y, 0, 1 + (w -1) * 7);
  var dow = simple.getDay();
  var ISOweekStart = simple;
  if (dow <= 4)
      ISOweekStart.setDate(simple.getDate() - simple.getDay() + 1);
  else
      ISOweekStart.setDate(simple.getDate() + 8 - simple.getDay());
  return ISOweekStart.toISOString();
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
