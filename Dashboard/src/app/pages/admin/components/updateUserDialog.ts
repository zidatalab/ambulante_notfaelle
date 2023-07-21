import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'updateUserDialog',
  templateUrl: 'updateUserDialog.html'
})

export class UpdateUserDialog implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<UpdateUserDialog>,
    private api: ApiService,
    private fb: FormBuilder,
    @Inject(MAT_DIALOG_DATA)
    public data: any
  ) { }

  users: any;
  myRegform: any;
  usergroupoptions = [{ name: 'Public Access', value: 'public' }, { name: 'KV Benutzer', value: 'kvuser' }];
  userRights = [{ name: 'User', value: 'user' }, { name: 'Admin', value: 'admin' }, { name: 'Superadmin', value: 'superadmin' }]
  salutations = ['Herr', 'Frau', 'Frau Dr.', 'Herr Dr.', 'Dr.', ' ']

  ngOnInit(): void {
    // this.currentuser = this.auth.getUserDetails();
    this.buildForm();
    this.getUserGroups()
  }

  updateUser() {

  }

  async getUserGroups(): Promise<void> {
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

      for (const level of levelKeys) {
        this.usergroupoptions.push({ name: level, value: level })
      }
    }
  }

  updateuser(user, key, value) {
    let add = false;

    if (key !== "usergroups.kvuser" && key !== "usergroups.public") {
      this.api.updateuser(user, key, value).subscribe(
        data => { });
    };

    if (key === "usergroups.kvuser") {
      add = value;
    };

    if (key === "usergroups.public") {
      add = !value;
    };

    if (key == "usergroups.kvuser" || key == "usergroups.public") {
      this.api.updateuser(user, 'usergroups', add, 'kvuser').subscribe(
        data => { });
    }
  }

  buildForm() {
    this.myRegform = new FormGroup({
      anrede: new FormControl({ value: this.data.anrede, disabled: true }),
      firstname: new FormControl({ value: this.data.firstname, disabled: true }),
      lastname: new FormControl({ value: this.data.lastname, disabled: true }),
      email: new FormControl({ value: this.data.email, disabled: true }),
      roles: new FormControl({ value: this.data.roles[0], disabled: false }),
      dataLevel: new FormControl({ value: this.data.usergroups.smed_reporting, disabled: false }),
    })
  };

  randomPassword() {
    return Math.random().toString(36).slice(4, 8) + "-" + Math.random().toString(36).slice(4, 8) + "-" + Math.random().toString(36).slice(4, 8);
  }

  changePassword(user, pwd) {
    this.api.changeuserpwd(user, pwd).subscribe(data => { })
  }

  onNoClick(): void {
    this.dialogRef.close()
  }
}