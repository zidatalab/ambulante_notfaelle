import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import {db, StandItem} from './db';

@Injectable({
  providedIn: 'root'
})
export class DBService {

  constructor(private api:ApiService) { }

  async storestand(Indicator,level,levelid,Stand,mindate,maxdate,resolution){
    //console.log("Stand speichern!");
    await db.standdb
          .where('[level+levelid+Indicator+timeframe]')
          .equals([level,levelid,Indicator+resolution])
          .delete();
    db.standdb.put({
              'level':level,
              'levelid':levelid,
              'Stand':Stand,
              'Indicator':Indicator,
              'startdate':mindate,
              'stopdate':maxdate,
              'timeframe':resolution
            });    
        };   

getstand(Indicator,level,levelid,resolution){
    return db.standdb
    .where('[level+levelid+Indicator+timeframe]')
    .equals([level,levelid,Indicator,resolution]).first();

  }

  


  listdata(Indicator,level, levelid, start="",stop="",expand=true,resolution) {
    let tosearch = {
      Indicator: Indicator,
      level: level,
      levelid:levelid
    }
    // Can be implemented later to restrict results
    if (start!=="" && stop!=="" && expand==true){
      return db.datadb
      .where('[level+levelid+Indicator+timeframe+Datum]')
      .between([level,levelid,Indicator,resolution,start],[level,levelid,Indicator,resolution,stop])
      .toArray()
      .then(data => this.api.objectkeystocolumns(data,'data'));
    }
    if (expand==true) {
    return db.datadb
      .where('[level+levelid+Indicator+timeframe]').equals([level,levelid,Indicator,resolution]).toArray().then(data => this.api.objectkeystocolumns(data,'data'));
    }
    if (expand==false) {
      return db.datadb
        .where('[level+levelid+Indicator+timeframe]').equals([level,levelid,Indicator,resolution]).toArray();
      };
  }

  async querydatadates(Indicator,level, levelid, start="",stop="",resolution="monthly") {
    let count = await db.datadb.where('[level+levelid+Indicator+timeframe+Datum]')
    .between([level,levelid,Indicator,resolution,start],[level,levelid,Indicator,resolution,stop]).count();
    if (count>0){
    let tosearch = {
      Indicator: Indicator,
      level: level,
      levelid:levelid,
      resolution:resolution
    }
    let dbpointer=[];
    let res = {};
    if (start!=="" && stop!==""){
      db.datadb.where('[level+levelid+Indicator+timeframe+Datum]')
      .between([level,levelid,Indicator,resolution,start],[level,levelid,Indicator,resolution,stop])
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
      db.datadb.where('[level+levelid+Indicator+timeframe]')
      .equals([level,levelid,Indicator,resolution])
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

  deletewhere(Indicator,level, levelid, startjahr="",stopjahr="",resolution="monthly") {
    let tosearch = {
      Indicator: Indicator,
      level: level,
      levelid:levelid,
      timeframe:resolution
    }
    // Can be implemented later to restrict results
    if (startjahr=="" && stopjahr!==""){
      db.datadb
      .where('[level+levelid+Indicator+Jahr+timeframe]').between([level,levelid,Indicator,startjahr,resolution],[level,levelid,Indicator,stopjahr,resolution]).delete();
    };
    return db.datadb
      .where('[level+levelid+Indicator+timeframe]').equals([level,levelid,Indicator,resolution]).delete();
  }

  adddatabulk(array) {
    //console.log('add bulk',array)
    return db.datadb.bulkPut(array);
  };

  async adddata({level, levelid,Jahr,Monat,KW,Datum,Indicator,data,KM6Versicherte,BEVSTAND,resolution}) {
    return await db.datadb
      .put({
        Indicator: Indicator,
        level: level,
        levelid:levelid,
        Jahr:Jahr,
        Monat:Monat,
        KW:KW  ,
        Datum:Datum,
        data:data,
        timeframe:resolution
      });
  };

  clean(){
    db.delete();
    db.open();
  }

}

