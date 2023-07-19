import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { AuthService } from 'src/app/services/auth.service';
import { MatDialog } from '@angular/material/dialog';
import { AddUserDialog } from './components/addUserDialog';
import { UpdateUserDialog } from './components/updateUserDialog';
import { DeleteUserDialog } from './components/deleteUserDialog';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  constructor(
    private api: ApiService,
    private auth: AuthService,
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
  }

  updateUserList() {
    this.api.getTypeRequest('users/').subscribe(data => { this.users = data; })
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

  openDeleteUserDialog(user) : void {
    const dialogRef = this.dialog.open(DeleteUserDialog, {
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
    if(value.full_name) {
      return value.full_name
    }
    return `${value.anrede} ${value.firstname} ${value.lastname}`
  }
}
