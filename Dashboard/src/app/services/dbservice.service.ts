import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { db, StandItem } from './db';

@Injectable({
  providedIn: 'root'
})
export class DBService {

  constructor(private api: ApiService) { }

  async storestand(Indicator, level, levelid, Stand, mindate, maxdate, resolution) {
    await db.standdb
      .where('[level+levelid+Indicator+timeframe]')
      .equals([level, levelid, Indicator, resolution])
      .delete();
    db.standdb.put({
      'level': level,
      'levelid': levelid,
      'Stand': Stand,
      'Indicator': Indicator,
      'startdate': mindate,
      'stopdate': maxdate,
      'timeframe': resolution
    });
  };

  getstand(Indicator, level, levelid, resolution) {
    return db.standdb
      .where('[level+levelid+Indicator+timeframe]')
      .equals([level, levelid, Indicator, resolution]).first();
  }

  listdata(Indicator, level, levelid, start = "", stop = "", expand = true, resolution, timeframe = '') {
    let tosearch = {
      Indicator: Indicator,
      level: level,
      levelid: levelid
    }

    // Can be implemented later to restrict results
    if (start !== "" && stop !== "" && expand == true) {
      if (timeframe === 'Letztes Jahr') {
        const lastYear = Number(start.slice(0, 4))
        return db.datadb.where('[level+levelid+Indicator+timeframe+Jahr]').equals([level, levelid, Indicator, resolution, lastYear]).toArray()
          .then(data => {
            return this.api.objectkeystocolumns(data, 'data')
          });
      }

      return db.datadb
        .where('[level+levelid+Indicator+timeframe+Datum]')
        .between([level, levelid, Indicator, resolution, start], [level, levelid, Indicator, resolution, stop])
        .toArray()
        .then(data => this.api.objectkeystocolumns(data, 'data'));
    }

    if (expand == true) {
      return db.datadb
        .where('[level+levelid+Indicator+timeframe]').equals([level, levelid, Indicator, resolution]).toArray().then(data => this.api.objectkeystocolumns(data, 'data'));
    }

    if (expand == false) {
      return db.datadb
        .where('[level+levelid+Indicator+timeframe]').equals([level, levelid, Indicator, resolution]).toArray();
    };
  }

  async querydatadates(level, levelid, Indicator, resolution = "monthly") {
    let res = await db.standdb.where('[level+levelid+Indicator+timeframe]').equals([level, levelid, Indicator, resolution]).toArray();

    return res
  }

  deletewhere(Indicator, level, levelid, resolution = "monthly", start = "", stop = "", timeframe = "") {
    let tosearch = {
      Indicator: Indicator,
      level: level,
      levelid: levelid,
      timeframe: resolution
    }

    // Can be implemented later to restrict results
    if (start !== "" && stop !== "") {
      const lastYear = Number(start.slice(0, 4))

      if (timeframe === 'Letztes Jahr') {
        return db.datadb
          .where('[level+levelid+Indicator+timeframe+Jahr]').equals(
            [level, levelid, Indicator, resolution, lastYear]).delete();
      }

      return db.datadb
        .where('[level+levelid+Indicator+timeframe+Datum]').between(
          [level, levelid, Indicator, resolution, start],
          [level, levelid, Indicator, resolution, stop]).delete();
    }
    else {
      return db.datadb
        .where('[level+levelid+Indicator+timeframe]').equals(
          [level, levelid, Indicator, resolution]).delete();
    }
  }

  adddatabulk(array) {
    return db.datadb.bulkPut(array);
  };

  async adddata({ level, levelid, Jahr, Monat, KW, Datum, Indicator, data, KM6Versicherte, BEVSTAND, resolution }) {
    return await db.datadb
      .put({
        Indicator: Indicator,
        level: level,
        levelid: levelid,
        Jahr: Jahr,
        Monat: Monat,
        KW: KW,
        Datum: Datum,
        data: data,
        timeframe: resolution
      });
  };

  clean() {
    db.delete();
    db.open();
  }
}
