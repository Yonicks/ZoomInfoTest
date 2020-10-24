import {Component, Input, OnInit} from '@angular/core';
import {Member} from '../../../common/models/member';

@Component({
  selector: 'member-hierarchy',
  template: `
    <div class="hierarchyArea">
      <span class="hierarchyItem" *ngFor="let i of hierarchyList">
        <a [routerLink]="['/members', i.id]">{{i.name}}</a>
      </span>
    </div>
  `,
  styleUrls: ['./member-hierarchy.component.scss']
})
export class MemberHierarchyComponent implements OnInit {
  @Input() hierarchyList: Member[] = [];


  constructor() {
  }

  ngOnInit(): void {
  }

}
