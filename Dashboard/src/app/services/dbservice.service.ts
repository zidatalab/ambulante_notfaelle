import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import {db,DataItem} from './db';

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
        console.log("RES:",dbpointer[0]['Datum'],dbpointer[dbpointer.length-1]['Datum']);
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
          console.log("RES:",dbpointer[0]['Datum'],dbpointer[dbpointer.length-1]['Datum']);
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

  async adddatabulk(array) {
    return await db.datadb.
    bulkPut(array);
  };


  async adddata({level, levelid,Jahr,Monat,KW,Datum,Indicator,data}) {
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
