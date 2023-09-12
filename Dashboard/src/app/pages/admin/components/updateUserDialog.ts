import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'updateUserDialog',
  templateUrl: 'updateUserDialog.html',
  styleUrls: ['./updateUserDialog.scss']
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
  userGroupOptions = [{ name: 'Public Access', value: 'public', selected: false }, { name: 'KV Benutzer', value: 'kvuser', selected: false }];
  userRights = [{ name: 'User', value: 'user', selected: false }, { name: 'Admin', value: 'admin', selected: false }, { name: 'Superadmin', value: 'superadmin', selected: false }]
  salutations = ['Herr', 'Frau', 'Frau Dr.', 'Herr Dr.', 'Dr.', ' ']

  ngOnInit(): void {
    // this.currentuser = this.auth.getUserDetails();
    this.buildForm();
    this.getUserGroups()
    this.updateUsersList()
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
        this.userGroupOptions.push({ name: level, value: level, selected: false })
      }
    }
    this.rights()
  }

  rights() {
    for (let role of this.data.roles) {
      for (let rights of this.userRights) {
        if (role === rights.value) {
          rights.selected = true
        }
        if (this.data.is_admin && rights.value === 'admin') {
          rights.selected = true
        }
      }
    }

    return this.userRights
  }

  updateUsersList() {
    this.api.getTypeRequest('users/').subscribe(data => {
      this.users = data;
    })
  }

  updateUser() {
    this.updateUsersList()

    const res = this.users.filter(u => u.email === this.data.email)[0]
    this.dialogRef.componentInstance.data = res
  }

  updateUserRole(type, user, key, value) {
    if (type === 'role') {
      if (value === 'user') {
        this.userRights.filter(i => { if (i.value === value) i.selected = !i.selected })
        this.api.updateuser(user.email, value, !user['is_user']).subscribe()
      }
      if (value === 'admin') {
        this.userRights.filter(i => { if (i.value === value) i.selected = !i.selected })
        this.api.updateuser(user.email, value, !user['is_admin']).subscribe()
      }
      if (value === 'superadmin') {
        this.userRights.filter(i => { if (i.value === value) i.selected = !i.selected })
        this.api.updateuser(user.email, value, !user['is_superadmin']).subscribe()
      }
    }

    // this.updateUser()
  }

  updateUserDataLevel(type, user, key, value) {
    let add = false

    if (value !== 'public') {
      add = true
    }

    this.userGroupOptions.filter(i => { if (i.value === value) i.selected = !i.selected })

    this.api.updateuser(user, key, add, value).subscribe()
  }

  buildForm() {
    this.myRegform = new FormGroup({
      anrede: new FormControl({ value: this.data.anrede, disabled: true }),
      firstname: new FormControl({ value: this.data.firstname, disabled: true }),
      lastname: new FormControl({ value: this.data.lastname, disabled: true }),
      email: new FormControl({ value: this.data.email, disabled: true }),
      roles: new FormControl({ value: this.data.roles[this.data.roles.length - 1], disabled: false }),
      dataLevel: new FormControl({ value: this.data.usergroups ? this.data.usergroups.smed_reporting : [], disabled: false }),
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