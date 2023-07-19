import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FormBuilder, Validators } from '@angular/forms';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'deleteUserDialog',
  templateUrl: 'deleteUserDialog.html'
})

export class DeleteUserDialog {
  constructor(
    public dialogRef: MatDialogRef<DeleteUserDialog>,
    private api: ApiService,
    @Inject(MAT_DIALOG_DATA)
    public data: any
  ) { }

  deletUser() {
    alert('delete')
    // open dialog to reinsure it wasn't a mistake
    // this.api.deleteuser(user).subscribe(
    //   data => { this.updateUserList() });
  }

  onNoClick(): void {
    this.dialogRef.close()
  }
}