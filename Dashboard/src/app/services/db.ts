import Dexie, { Table } from 'dexie';

export class DataItem {
  level: string;
  levelid: string;
  Jahr: number;
  Monat: number;
  KW: number;
  Datum:string;
  Indicator:string;
  data:any;
}

export class StandItem {
  level: string;
  levelid: string;
  Stand:string;
  Indicator:string;
  startdate:string;
  stopdate:string;
}

export class AppDB extends Dexie {
  public datadb: Table<DataItem, number>;
  public standdb: Table<StandItem, number>;

  constructor() { 
    super('smeddb');
    var db = this;
    db.on("versionchange", function (event) {
      db.delete();
      db.open();
    });
    db.version(4).stores({
      datadb: 'id++,[level+levelid+Indicator+Datum],[level+levelid+Indicator]',
      standdb: 'id++,[level+levelid+Indicator]',
    }); 
    db.datadb.mapToClass(DataItem); 
    db.standdb.mapToClass(StandItem); 
  }

  


}

export var db = new AppDB();