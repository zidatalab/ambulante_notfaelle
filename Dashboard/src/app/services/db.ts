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

export class AppDB extends Dexie {
  public datadb: Table<DataItem, number>;

  constructor() { 
    super('smeddb');
    var db = this;
    db.version(1).stores({
      datadb: 'id++,[level+levelid+Indicator+Datum],[level+levelid+Indicator]',
    }); 
    db.datadb.mapToClass(DataItem); 
  }

  


}

export var db = new AppDB();