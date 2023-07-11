import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  constructor(
    private api: ApiService,
    private auth: AuthService,
    private fb: FormBuilder) { }

  users: any;
  myRegform: any;
  myDataUploadform: any;
  adduser: boolean;
  newuser: any;
  adddata: boolean;
  uploaderror: any;
  currentuser: any;
  usergroupoptions = ['kvuser'];

  ngOnInit(): void {
    this.currentuser = this.auth.getUserDetails();
    this.updateuserlist();
    this.buildForm();
  }

  updateuser(user, key, value) {
    let add = false;

    if (key != "usergroups.kvuser" && key != "usergroups.public") {
      this.api.updateuser(user, key, value).subscribe(
        data => { this.updateuserlist() });
    };

    if (key == "usergroups.kvuser") {
      add = value;
    };

    if (key == "usergroups.public") {
      add = !value;
    };

    if (key == "usergroups.kvuser" || key == "usergroups.public") {
      this.api.updateuser(user, 'usergroups', add, 'kvuser').subscribe(
        data => { this.updateuserlist() });
    }
  }

  deletuser(user) {
    this.api.deleteuser(user).subscribe(
      data => { this.updateuserlist() });
  }

  updateuserlist() {
    this.api.getTypeRequest('users/').subscribe(data => { this.users = data; })
  }

  buildForm() {
    this.myRegform = this.fb.group(
      {
        anrede: ["", [
          Validators.required,
          Validators.minLength(1)]],
        password: ["", [Validators.minLength(12)]],
        firstname: ["", [
          Validators.required,
          Validators.minLength(2)]],
        lastname: ["", [
          Validators.required,
          Validators.minLength(2)]],
        email: ["", [Validators.required, Validators.email]]
      }
    );
    this.myRegform.patchValue({ "password": this.rndpwd() });
  };

  addusernow() {
    let toadd = this.myRegform.value;
    this.api.postTypeRequest("newuser", toadd).subscribe(
      data => {
        this.adduser = false;
        this.updateuserlist();
      }
    );
  }

  chpwd(user, pwd) {
    this.api.changeuserpwd(user, pwd).subscribe(data => { this.updateuserlist() })
  }

  rndpwd() {
    return Math.random().toString(36).slice(4, 8) + "-" + Math.random().toString(36).slice(4, 8) + "-" + Math.random().toString(36).slice(4, 8);
  }

  copy(item) {
    document.addEventListener('copy', (e: ClipboardEvent) => {
      e.clipboardData.setData('text/plain', (item));
      e.preventDefault();
      document.removeEventListener('copy', null);
    });

    document.execCommand('copy');
  }
}
