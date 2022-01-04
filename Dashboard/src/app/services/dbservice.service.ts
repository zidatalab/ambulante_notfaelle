import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import {db} from './db';

@Injectable({
  providedIn: 'root'
})
export class DBService {

  constructor(private api:ApiService) { }

  listdata(Indicator,level, levelid, start="",stop="") {
    let tosearch = {
      Indicator: Indicator,
      level: level,
      levelid:levelid
    }
    // Can be implemented later to restrict results
    if (start!=="" && stop!==""){
      db.datadb
      .where('[level+levelid+Indicator+Datum]').between([level,levelid,Indicator,start],[level,levelid,Indicator,stop]).toArray();
    };
    return db.datadb
      .where('[level+levelid+Indicator]').equals([level,levelid,Indicator]).toArray().then(data => this.api.objectkeystocolumns(data,'data'));
  }

  async querydatadates(Indicator,level, levelid, start="",stop="") {
    let count = await db.datadb.where('[level+levelid+Indicator+Datum]')
    .between([level,levelid,Indicator,start],[level,levelid,Indicator,stop]).count();
    if (count>0){
    let tosearch = {
      Indicator: Indicator,
      level: level,
      levelid:levelid
    }
    let dbpointer=[];
    let res = {};
    if (start!=="" && stop!==""){
      db.datadb.where('[level+levelid+Indicator+Datum]')
      .between([level,levelid,Indicator,start],[level,levelid,Indicator,stop])
      .sortBy('Datum').then(data => {
        dbpointer=data;
        if (dbpointer && (dbpointer.length>1)){
        return {'min':dbpointer[0],'max':dbpointer[dbpointer.length-1]['Datum']}}
        else {
          return {'min':NaN,'max':NaN}
        };
      });
      } 
    else 
    { 
      db.datadb.where('[level+levelid+Indicator]')
      .equals([level,levelid,Indicator])
      .sortBy('Datum').then(data => {
        dbpointer=data;
        if (dbpointer.length>1){          
          return {'min':dbpointer[0],'max':dbpointer[dbpointer.length-1]['Datum']}}
          else {
            return {'min':NaN,'max':NaN}
          };
      });
    };}
    else {
      return {'min':NaN,'max':NaN};
    }
    
  }

  deletewhere(Indicator,level, levelid, startjahr="",stopjahr="") {
    let tosearch = {
      Indicator: Indicator,
      level: level,
      levelid:levelid
    }
    // Can be implemented later to restrict results
    if (startjahr=="" && stopjahr!==""){
      db.datadb
      .where('[level+levelid+Indicator+Jahr]').between([level,levelid,Indicator,startjahr],[level,levelid,Indicator,stopjahr]).delete();
    };
    return db.datadb
      .where('[level+levelid+Indicator]').equals([level,levelid,Indicator]).delete();
  }

  adddatabulk(array) {
    return db.datadb.bulkPut(array);
  };

  async adddata({level, levelid,Jahr,Monat,KW,Datum,Indicator,data,KM6Versicherte,BEVSTAND}) {
    return await db.datadb
      .put({
        Indicator: Indicator,
        level: level,
        levelid:levelid,
        Jahr:Jahr,
        Monat:Monat,
        KW:KW  ,
        Datum:Datum,
        data:data});
  };

  clean(){
    db.delete();
    db.open();
  }

}

