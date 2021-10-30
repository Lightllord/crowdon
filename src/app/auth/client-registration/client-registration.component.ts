import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-client-registration',
  templateUrl: './client-registration.component.html',
  styleUrls: ['./client-registration.component.scss'],
  host: {
    'class': 'client-registration'
  }
})
export class ClientRegistrationComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
