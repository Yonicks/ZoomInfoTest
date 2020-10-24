import {Component, EventEmitter, Input, OnDestroy, OnInit, Output} from '@angular/core';
import {IListItem} from '../../../common/models/i-list-item';
import {Subscription} from 'rxjs';

@Component({
  selector: 'zi-list',
  template: `
    <div class="list">

      <div *ngIf="showLoader">
        <zi-loader></zi-loader>
      </div>

      <div class="list-header">
        <p>{{headerText}}</p>
      </div>
      <div *ngIf="!showLoader && items && !items.length">
        Empty State
      </div>
      <div class="list-items">
        <div class="item"
             *ngFor="let item of items"
             (click)="selectItem(item)"
             [ngClass]="{'selected': selectedItem?.id === item.id}">
          {{item.label}}
        </div>
      </div>
      <ng-content select="[below_list]"></ng-content>
    </div>
  `,
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit, OnDestroy {

  @Input() items: Array<IListItem> = [];
  @Input() selectedItem: IListItem;
  @Input() showLoader: boolean;
  @Input() headerText: string;
  @Output() itemSelected = new EventEmitter<IListItem>();
  subscriptions: Subscription = new Subscription();

  constructor() {
  }

  ngOnInit(): void {

  }

  selectItem(item: IListItem) {
    this.itemSelected.emit(item);
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }
}
