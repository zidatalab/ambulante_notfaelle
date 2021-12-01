import { Injectable } from '@angular/core'; 
import { HttpClient, HttpHeaders , HttpParams } from '@angular/common/http'; 
import { map } from 'rxjs/operators'; 
import { retry,timeout } from 'rxjs/operators';
import * as chroma from "chroma-js";

@Injectable({ 
  providedIn: 'root' 
}) 
export class ApiService { 
 
 
  public REST_API_SERVER = "https://zidashboardapi.azurewebsites.net/" ; 
  public REST_API_SERVER_CLIENTID = "smed_reporting_lktest"; 
  public primarycolor = "#2196f3"; // "#e91e63";
  public accentcolor = "#e3714e1";
  public warncolor = "#e1149b";
  
  constructor(private httpClient: HttpClient) { } 
 
  public  getTypeRequest(url) { 
    return this.httpClient.get(this.REST_API_SERVER+url).pipe(map(res => { 
      return res; 
    })).pipe(timeout(3500),retry(5)); 
  } 
 
  public  postTypeRequest(url, payload) { 
    return this.httpClient.post(this.REST_API_SERVER+url, payload).pipe(map(res => { 
      return res; 
    })).pipe(timeout(1500),retry(3)); ; 
  } 

  public  getTypeRequestnotimeout(url) { 
    return this.httpClient.get(this.REST_API_SERVER+url).pipe(map(res => { 
      return res; 
    })).pipe(retry(1)); 
  } 
 
  public  postTypeRequestnotimeout(url, payload) { 
    return this.httpClient.post(this.REST_API_SERVER+url, payload).pipe(map(res => { 
      return res; 
    })).pipe(retry(1)); ; 
  } 
  
  
// Specific Requests

public updateuser(user,setting,value){
  let payload = {'email' : user,'key':setting,'value':value};
  return this.postTypeRequest('userstatus', payload);
}

public deleteuser(user,password=""){
  let payload = {"email":user};
  if (password!=""){payload["password"]=password};
  return this.postTypeRequest('deleteuser', payload);
}

public changeuserpwd(user,newpwd,oldpwd=""){
  let payload = {"newpassword":newpwd,email:user};
  if (oldpwd!=""){
    payload["oldpassword"]=oldpwd;
  }
  return this.postTypeRequest('changepwd', payload);
}


// Data APIs
public getValues(array, key) {
  let values = [];
  for (let item of array){
    values.push(item[key]);
  }
  return values;
}
public  getKeys(array){
 return Object.keys(array[0]);
}

objectkeystocolumns(array,objectname){
  for (let item of array){
    let theobject = item[objectname];
    for (let key of Object.keys(theobject)){
      item[key]=theobject[key];      
    }
    theobject[objectname]=NaN;
    delete theobject[objectname];
  }
  return array;
}

public  getOptions(array, key){
 return array.map(item => item[key])
 .filter((value, index, self) => self.indexOf(value) === index)
}

public  filterArray(array,key,value){
 let i =0
 let result = []
 for (let item of array){
   if (item[key]==value){result.push(item)};
   i = i+1
 }
 return result
}

public  filterNAArray(array,key){
  let i =0
  let result = []
  for (let item of array){
    if (item[key] && (item[key]!==null) && (!isNaN(item[key]))){
      result.push(item)};
    i = i+1
  }
  return result
 }
 
 public  filterNA(array){
  let result = []
  for (let item of array){
    if (!isNaN(item)){
      result.push(item)};  
  }
  return result
 }

public  filterArraybyList(array,key,list){
  let i =0
  let result = []
  for (let item of array){
    if (list.indexOf(item[key])>=0){result.push(item)};
    i = i+1
  }
  return result
 }

public  getmetadata(name){
  return JSON.parse(localStorage.getItem(name));
}
  
public sortArray(array, key, order = "ascending") {
  let result = array;
  if (order == "ascending") {
    return result.sort((a, b) => (a[key] < b[key] ? -1 : 1));
  }
  else {
    return result.sort((a, b) => (a[key] > b[key] ? -1 : 1));
  }



}

public sumArray(array) {
  var total = 0;
  for (var obj of array) {
    if (obj){total += +obj;}
    };

  return total;
}

public getuniqueValues(array, key) {
  let items = this.getValues(array, key);
  return [...new Set(items)];
}


public groupbysum(array,key1,key2="",outcome){
  let result = [];
  let valueskey1= this.getuniqueValues(array,key1);
  let valueskey2= [];
  if (key2!=""){
    valueskey2= this.getuniqueValues(array,key2);
  }

  for (let value of valueskey1){
    let keyvalues = this.filterArray(array,key1,value);

    if (key2==""){
      let topush = {};
      topush[key1]=value;      
      topush[outcome]=this.sumArray(this.getValues(keyvalues,outcome));
      result.push(topush);
    }
    if (key2!==""){
      for (let k2value of valueskey2){
        let topush = {};
        topush[key1]=value;      
        topush[key2]=k2value;      
        topush[outcome]=this.sumArray(this.getValues(this.filterArray(keyvalues,key2,k2value),outcome));
        result.push(topush);
      }
      
    };
  }
  return result;
}

public getweekdayname(dayofweek){
  let days = ["Montag","Dienstag","Mittwoch","Donnerstag","Freitag","Samstag","Sonntag"];
  return days[dayofweek-1];
}

public splitarraybykey(array,splitkey){
  let res = []
  let splitvalues = this.getuniqueValues(array,splitkey);
  for (let value of splitvalues){
    res.push(this.filterArray(array,splitkey,value));
  }
  return res = [];
}

public makescale(bins=5){
  return chroma.scale([chroma(this.primarycolor).set('hsl.h', +70),this.primarycolor]).colors(bins); }

  public stringwrap(string,maxlength=30){
    let newstring = "";
    let wordsarray = string.split(" ");
    let fulllength = string.length
    let linelength = 0
    for (let word of wordsarray){
      let wordlen = word.length;
      if ((linelength+wordlen)<maxlength){
        newstring = newstring + " " + word;
        linelength = linelength+wordlen;
      }
      else {
        newstring = newstring + "<br>" + word;
        linelength = wordlen;
      };    
    }
    return newstring;
  }


}


