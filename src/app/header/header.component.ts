import { LoginComponent } from './../login/login.component';
import { MdDialog, MdDialogRef } from '@angular/material';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private dialog: MdDialog) { }

  ngOnInit() {
  }

  openLoginForm() {
   this.dialog.open(LoginComponent, {width: '450px', height: '400px'});
  }
}
