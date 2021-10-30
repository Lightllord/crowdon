import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-container',
  templateUrl: './main-container.component.html',
  styleUrls: ['./main-container.component.scss'],
  host: {
    'class': 'main-container'
  }
})
export class MainContainerComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }

}
