import {Component, OnDestroy, OnInit} from '@angular/core';


@Component({
  selector: 'zi-pages',
  template: `
    <div *ngIf="isLoading">
      <zi-loader></zi-loader>
    </div>

    <zi-nav-bar></zi-nav-bar>

    <zi-members></zi-members>
  `,
  styles: [`
    :host {
      display: flex;
      flex-direction: column;
      overflow: hidden;
      height: 100%;
    }
  `]
})
export class PagesComponent implements OnInit, OnDestroy {

  isLoading: boolean;

  constructor() {
  }

  ngOnInit() {

  }

  ngOnDestroy(): void {
  }

}
