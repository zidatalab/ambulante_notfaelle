import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { AddUserDialog } from './components/addUserDialog';
import { UpdateUserDialog } from './components/updateUserDialog';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  constructor(
    private api: ApiService,
    private auth: AuthService,
    private fb: FormBuilder,
    private dialog: MatDialog
    ) { }

  users: any;
  myRegform: any;
  myDataUploadform: any;
  adduser: boolean;
  newuser: any;
  adddata: boolean;
  uploaderror: any;
  currentuser: any;
  usergroupoptions = ['kvuser'];
  selectedDataLevel = []
  displayedColumns = ['user','rights','group','actions']

  ngOnInit(): void {
    this.currentuser = this.auth.getUserDetails();
    this.updateUserList();
    this.buildForm();
    this.getUserGroups()
  }

  async getUserGroups() : Promise<void> {
    const metaData: Array<any> = await this.api.getmetadata("metadata")
    const getLevelId = metaData.filter(item => item.varname === 'levelid')[0]
    const levelRights = getLevelId.levelrights

    if (levelRights) {
      const getCustomerLevels = Object.keys(levelRights)
        .filter((key) => !key.includes('kvuser') && !key.includes('public'))
        .reduce((cur, key) => {
          return Object.assign(cur, { [key]: levelRights[key] })
        }, {})

      const levelKeys = Object.keys(getCustomerLevels) 

      for(const level of levelKeys) {
        this.usergroupoptions.push(level)
      }
    }
  }

  updateuser(user, key, value) {
    let add = false;

    if (key != "usergroups.kvuser" && key != "usergroups.public") {
      this.api.updateuser(user, key, value).subscribe(
        data => { this.updateUserList() });
    };

    if (key == "usergroups.kvuser") {
      add = value;
    };

    if (key == "usergroups.public") {
      add = !value;
    };

    if (key == "usergroups.kvuser" || key == "usergroups.public") {
      this.api.updateuser(user, 'usergroups', add, 'kvuser').subscribe(
        data => { this.updateUserList() });
    }
  }

  deletuser(user) {
    this.api.deleteuser(user).subscribe(
      data => { this.updateUserList() });
  }

  showData() {
    console.log(this.myRegform)
  }

  updateUserList() {
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
        email: ["", [Validators.required, Validators.email]],
        dataLevel: ['', [Validators.required]]
      }
    );
    this.myRegform.patchValue({ "password": this.rndpwd() });
  };

  addusernow() {
    let toadd = this.myRegform.value;
    this.api.postTypeRequest("newuser", toadd).subscribe(
      data => {
        this.adduser = false;
        this.updateUserList();
      }
    );
  }

  chpwd(user, pwd) {
    this.api.changeuserpwd(user, pwd).subscribe(data => { this.updateUserList() })
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

  openAddUserDialog() : void {
    const dialogRef = this.dialog.open(AddUserDialog, {})

    dialogRef.afterClosed().subscribe(result => {
      this.updateUserList()
      // console.log('closed')
      // do something with result
    })
  }

  openUpdateUserDialog(user) : void {
    const dialogRef = this.dialog.open(UpdateUserDialog, {
      data: user
    })

    dialogRef.afterClosed().subscribe(result => {
      this.updateUserList()
      // console.log('closed')
      // do something with result
    })
  }

  toUpperCase(value: string) {
    return value.toLocaleUpperCase()
  }

  fullName(value) {
    return `${value.anrede} ${value.firstname} ${value.lastname}`
  }
}
