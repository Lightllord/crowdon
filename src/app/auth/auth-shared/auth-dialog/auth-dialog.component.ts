import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-auth-dialog',
  templateUrl: './auth-dialog.component.html',
  styleUrls: ['./auth-dialog.component.scss'],
  host: {
    'class': 'auth-dialog'
  }
})
export class AuthDialogComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
