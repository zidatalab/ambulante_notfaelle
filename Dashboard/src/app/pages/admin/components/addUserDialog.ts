import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FormBuilder, Validators } from '@angular/forms';
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
  usergroupoptions = ['public', 'kvuser'];

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
        this.usergroupoptions.push(level)
      }
    }
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

    this.myRegform.patchValue({ "password": this.randomPassword() });
  };

  randomPassword() {
    return Math.random().toString(36).slice(4, 8) + "-" + Math.random().toString(36).slice(4, 8) + "-" + Math.random().toString(36).slice(4, 8);
  }

  onNoClick(): void {
    this.dialogRef.close()
  }
}