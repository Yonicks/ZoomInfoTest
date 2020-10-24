import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'zi-root',
  template: `
    <router-outlet></router-outlet>
    <zi-noty></zi-noty>
  `,
  styles: [`
  `]
})
export class AppComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }
}
