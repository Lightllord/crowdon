import { Component, HostBinding, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-header',
  templateUrl: './main-header.component.html',
  styleUrls: ['./main-header.component.scss'],
  host: {
    'class': 'main-header',
    '[class.main-header--default]': 'isDefault'
  }
})
export class MainHeaderComponent implements OnInit {
  isDefault: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }
}
