import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { retry, timeout } from 'rxjs/operators';
import * as chroma from "chroma-js";
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  public itsatest = false;
  public REST_API_SERVER = "https://api.zidatasciencelab.de/"; // "https://barebonedashboardapi.azurewebsites.net/"; "https://dashboardapi.ziapp.de/"; "http://localhost:8000/"; 
  public REST_API_SERVER_CLIENTID = "smed_reporting";
  public primarycolor = "#2196f3"; // "#e91e63";
  public accentcolor = "#e3714e1";
  public warncolor = "#e1149b";

  constructor(private httpClient: HttpClient) { }

  public getTypeRequest(url) {
    return this.httpClient.get(this.REST_API_SERVER + url).pipe(map(res => {
      return res;
    })).pipe(/*timeout(3500),*/retry(3));
  }

  public postTypeRequest(url, payload) {
    return this.httpClient.post(this.REST_API_SERVER + url, payload).pipe(map(res => {
      return res;
    })).pipe(/*timeout(15000),*/retry(3));;
  }

  public getTypeRequestnotimeout(url) {
    return this.httpClient.get(this.REST_API_SERVER + url).pipe(map(res => {
      return res;
    })).pipe(retry(3));
  }

  public postTypeRequestnotimeout(url, payload) {
    return this.httpClient.post(this.REST_API_SERVER + url, payload).pipe(map(res => {
      return res;
    })).pipe(retry(3));;
  }


  // Specific Requests

  public updateuser(user, setting, value, usergroups = "") {
    let payload = { 'email': user, 'key': setting, 'value': value };
    if (usergroups != "") {
      payload['usergroups'] = usergroups;
    }
    return this.postTypeRequest('userstatus/', payload);
  }

  public deleteuser(user, password = "") {
    let payload = { "email": user };
    if (password != "") { payload["password"] = password };
    return this.postTypeRequest('deleteuser', payload);
  }

  public changeuserpwd(user, newpwd, oldpwd = "") {
    let payload = { "newpassword": newpwd, email: user };
    if (oldpwd != "") {
      payload["oldpassword"] = oldpwd;
    }
    return this.postTypeRequest('changepwd', payload);
  }

  countView(url) {
    // Privacy preserving Webcounter, see Documentation here https://github.com/zidatalab/ziwebcounter
    this.httpClient.get('https://analytics.api.ziapp.de/view/ambulante_notfaelle/data?pageid=' + url + '&cookiedissent=' + true, { withCredentials: false }).subscribe();
  }

  // Data APIs
  public getValues(array, key) {
    let values = [];
    for (let item of array) {
      values.push(item[key]);
    }
    return values;
  }
  public getKeys(array) {
    return Object.keys(array[0]);
  }

  objectkeystocolumns(array, objectname) {
    console.log(array, objectname)
    for (let item of array) {
      let theobject = item[objectname];

      for (let key of Object.keys(theobject)) {
        item[key] = theobject[key];
      }

      theobject[objectname] = NaN;
      delete theobject[objectname];
    }

    return array;
  }

  public getOptions(array, key) {
    return array.map(item => item[key])
      .filter((value, index, self) => self.indexOf(value) === index)
  }

  public filterArray(array, key, value) {
    let i = 0
    let result = []
    if (!Array.isArray(array)) {
      return result;
    }
    for (let item of array) {
      if (item[key] == value) { result.push(item) };
      i = i + 1
    }
    return result
  }

  public filterNAArray(array, key) {
    let i = 0
    let result = []
    for (let item of array) {
      if (item[key] && (item[key] !== null) && (!isNaN(item[key]))) {
        result.push(item)
      };
      i = i + 1
    }
    return result
  }

  public filterNA(array) {
    let result = []
    for (let item of array) {
      if (!isNaN(item)) {
        result.push(item)
      };
    }
    return result
  }

  public filterArraybyList(array, key, list) {
    let i = 0
    let result = []
    for (let item of array) {
      if (list.indexOf(item[key]) >= 0) { result.push(item) };
      i = i + 1
    }
    return result
  }

  public async getmetadata(name) {
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
      if (parseFloat(obj)) { total += +obj; }
    };

    return total;
  }

  public getuniqueValues(array, key) {
    let items = this.getValues(array, key);
    return [...new Set(items)];
  }


  public groupbysum(array, key1, key2 = "", outcome) {
    let result = [];
    let valueskey1 = this.getuniqueValues(array, key1);
    let valueskey2 = [];
    if (key2 != "") {
      valueskey2 = this.getuniqueValues(array, key2);
    }

    for (let value of valueskey1) {
      let keyvalues = this.filterArray(array, key1, value);

      if (key2 == "") {
        let topush = {};
        topush[key1] = value;
        topush[outcome] = this.sumArray(this.getValues(keyvalues, outcome));
        result.push(topush);
      }
      if (key2 !== "") {
        for (let k2value of valueskey2) {
          let topush = {};
          topush[key1] = value;
          topush[key2] = k2value;
          topush[outcome] = this.sumArray(this.getValues(this.filterArray(keyvalues, key2, k2value), outcome));
          result.push(topush);
        }

      };
    }
    return result;
  }

  public getweekdayname(dayofweek, mongo = false) {
    let days = ["Montag", "Dienstag", "Mittwoch", "Donnerstag", "Freitag", "Samstag", "Sonntag"];
    if (mongo) {
      days = ["Sonntag", "Montag", "Dienstag", "Mittwoch", "Donnerstag", "Freitag", "Samstag"];
    }
    return days[dayofweek - 1];
  }

  public splitarraybykey(array, splitkey) {
    let res = []
    let splitvalues = this.getuniqueValues(array, splitkey);
    for (let value of splitvalues) {
      res.push(this.filterArray(array, splitkey, value));
    }
    return res = [];
  }

  public makescale(bins = 5) {
    return chroma.scale([chroma(this.primarycolor).set('hsl.h', +70), this.primarycolor]).colors(bins);
  };

  public stringwrap(string, maxlength = 30) {
    let newstring = "";
    let wordsarray = string.split(" ");
    let fulllength = string.length
    let linelength = 0
    for (let word of wordsarray) {
      let wordlen = word.length;
      if ((linelength + wordlen) < maxlength) {
        newstring = newstring + " " + word;
        linelength = linelength + wordlen;
      }
      else {
        newstring = newstring + "<br>" + word;
        linelength = wordlen;
      };
    }
    return newstring;
  };

  public makeheatmapdata(array, xname, yname, valuename, xlabel = "", ylabel = "") {
    let res = {};
    res['x'] = this.getuniqueValues(array, xname).sort(function (a, b) { return a - b });
    res['y'] = this.getuniqueValues(array, yname).sort(function (a, b) { return a - b });
    res['z'] = [];
    for (let yitem of res['y']) {
      let topush = [];
      for (let xitem of res['x']) {
        try {
          topush.push(this.filterArray(this.filterArray(array, xname, xitem), yname, yitem)[0][valuename]);
        }
        catch {
          topush.push(NaN);
        };
      }
      res['z'].push(topush);
    }
    if (xlabel != "") {
      let xlab = [];
      for (let item of res['x']) {
        try { xlab.push(this.filterArray(array, xname, item)[0][xlabel]) }
        catch { xlab.push("") };
      }
      res['x'] = xlab;
    };
    if (ylabel != "") {
      let ylab = [];
      for (let item of res['y']) {
        try { ylab.push(this.filterArray(array, yname, item)[0][ylabel]) }
        catch { ylab.push("") };
      }
      res['y'] = ylab;
    };

    return res;
  };

  public replacemissing(array, key, replacement = "Fehlend") {
    for (let item of array) {
      if (!item[key]) {
        item[key] = replacement;
      }
    }
    return array;
  }

  public arrayintersect(a, b) {
    var setA = new Set(a);
    var setB = new Set(b);
    var intersection = new Set([...setA].filter(x => setB.has(x)));
    return Array.from(intersection);
  }

}


