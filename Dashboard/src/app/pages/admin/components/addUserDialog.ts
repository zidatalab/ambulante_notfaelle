import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { FormBuilder, Validators, FormGroup, FormControl } from '@angular/forms';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'addUserDialog',
  templateUrl: 'addUserDialog.html'
})

export class AddUserDialog implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<AddUserDialog>,
    private api: ApiService,
    private fb: FormBuilder,
  ) { }

  myRegform: any;
  usergroupoptions = [{ name: 'Public Access', value: 'public' }, { name: 'KV Benutzer', value: 'kvuser' }];
  userRights = [{ name: 'User', value: 'user' }, { name: 'Admin', value: 'admin' }, { name: 'Superadmin', value: 'superadmin' }]
  salutations = ['Herr', 'Frau', 'Frau Dr.', 'Herr Dr.', 'Dr.', ' ']

  ngOnInit(): void {
    // this.currentuser = this.auth.getUserDetails();
    this.buildForm();
    this.getUserGroups()
  }

  addUser() {
    const userDataAdd = this.myRegform.value;
    this.api.postTypeRequest("newuser", userDataAdd).subscribe(
      data => { }
    );
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

  buildForm() {
    this.myRegform = new FormGroup({
      anrede: new FormControl({ value: '', disabled: false }, Validators.required),
      firstname: new FormControl({ value: '', disabled: false }, Validators.required),
      lastname: new FormControl({ value: '', disabled: false }, Validators.required),
      email: new FormControl({ value: '', disabled: false }, Validators.required),
      roles: new FormControl({ value: '', disabled: false }, Validators.required),
      dataLevel: new FormControl({ value: '', disabled: false }, Validators.required),
      password: new FormControl({ value: '', disabled: false }, [Validators.required, Validators.minLength(12)])
    })

    this.myRegform.patchValue({ "password": this.randomPassword() });
  };

  randomPassword() {
    return Math.random().toString(36).slice(4, 8) + "-" + Math.random().toString(36).slice(4, 8) + "-" + Math.random().toString(36).slice(4, 8);
  }

  onNoClick(): void {
    this.dialogRef.close()
  }
}