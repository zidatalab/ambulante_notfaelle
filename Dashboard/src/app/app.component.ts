import { HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router, RouterEvent } from '@angular/router';
import { ApiService } from './services/api.service';
import { AuthService } from './services/auth.service';
import { DBService } from './services/dbservice.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Test Dashboard';
  public currentuser: any;
  public currentroute: string;
  loginoption = true;
  public loginstatus: boolean;
  public adminstatus: boolean;
  currentdate: any;
  public apiconnection: number = 0;
  isExtern: boolean = false

  constructor(
    private _auth: AuthService,
    private _api: ApiService,
    private router: Router,
    private db: DBService
  ) {

    router.events.subscribe((event: RouterEvent) => {
      if (event.url !== this.currentroute && event.url) {
        this.currentroute = event.url;
        this._api.countView(event.url);
      };
    });
  }

  ngOnInit() {
    this.db.clean();
    this.checkapiconnection();
    this.currentdate = new Date();
    
    this._auth.currentUser.subscribe(data => {
      if (data) {
        this.currentuser = data;
        this.loginstatus = true;
        this.adminstatus = this.currentuser["is_admin"] || this.currentuser["is_superadmin"];
        this.isExtern = this._auth.isExtern()
        setTimeout(() => { this.autorefreshdata(); }, 1000);
        setInterval(() => { this._auth.refreshToken(); this.checkapiconnection(); }, 1000 * 60 * 10);
      }
      else {
        this.loginstatus = false;
        this.adminstatus = false;
        setTimeout(() => { this.autorefreshdata(); }, 0);
      };
    });
  }

  public checkapiconnection() {
    this._api.getTypeRequest('openapi.json').subscribe(data => { this.apiconnection = 1; }, error => { this.apiconnection = 2; })
  }

  public checkforopentabs() {
    // Broadcast that you're opening a page.
    localStorage.openpages = Date.now();
    window.addEventListener('storage', function (e) {
      if (e.key == "openpages") {
        // Listen if anybody else is opening the same page!
        localStorage.page_available = Date.now();
      }
      if (e.key == "page_available") {
        alert("Eine andere Seite ist bereits offen. Bitte nutzen Sie diese Anwendung nur auf einem Tab, um Probleme zu vermeiden.");

      }
    }, false);
  }

  public autorefreshdata() {
    this.updatemetadata().subscribe(
      data => {
        this.setmetadata("metadata", data["data"]);
      });
    // this.getsortdata().subscribe(data => {
    //     this.setmetadata("sortdata",data["datalevels"]);  
    //     if (data["geodata"]){
    //       this.setmetadata("geodata",this._api.getValues(data["geodata"],'_id'));        
    //     }
    //     else {
    //       this.setmetadata("geodata",[]); 
    //     }

    //   });
  }

  logout() {
    this._auth.logout();
    this.db.clean();
    localStorage.clear();
    this.autorefreshdata();
    this.loginstatus = false;
    this.adminstatus = false;
    setTimeout(() => { this.router.navigate(['/']) }, 1500)
  };

  getsortdata() {
    return this._api.getTypeRequest("get_sortlevels/" + this._api.REST_API_SERVER_CLIENTID);
  }

  updatemetadata() {
    let client = this._api.REST_API_SERVER_CLIENTID
    return this._api.getTypeRequest("get_metadata/" + client);
  }

  setmetadata(name, data) {
    localStorage.setItem(name, JSON.stringify(data));
  }
}
