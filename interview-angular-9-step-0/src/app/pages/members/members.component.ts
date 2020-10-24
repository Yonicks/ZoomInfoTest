import {Component, OnDestroy, OnInit} from '@angular/core';
import {IListItem, ListItem} from '../../common/models/i-list-item';
import {Observable, Subscription} from 'rxjs';
import {Member} from '../../common/models/member';
import {map} from 'rxjs/operators';
import {MembersFacdeService} from '../services/members-facde.service';


@Component({
  selector: 'zi-members',
  template: `
    <div class="container">

      <div class="container-top">
        <h1 class="header">{{selectedMember?.label ? selectedMember?.label : 'Please select a member'}}</h1>
      </div>

      <div class="container-bottom">
        <zi-list [headerText]="'Members'" [items]="listItems$ | async"
                 (itemSelected)="itemSelected($event)"
                 [selectedItem]="selectedItem$ | async"
                 [showLoader]="isLoading$ | async">
        </zi-list>

        <member-hierarchy [hierarchyList]="selectedMemberHierarchyList$ | async"></member-hierarchy>


      </div>

    </div>

  `,
  styleUrls: ['./members.component.scss']
})
export class MembersComponent implements OnInit, OnDestroy {

  listItems$: Observable<IListItem[]>;
  selectedMemberHierarchyList$: Observable<Member[]>;
  members$: Observable<Member[]>;
  selectedItem$: Observable<IListItem>;
  subscriptions: Subscription = new Subscription();
  selectedMember: IListItem;
  isLoading$: Observable<boolean>;

  constructor(private membersFacdeService: MembersFacdeService) {
    this.members$ = this.membersFacdeService.getMembers();

    this.listItems$ = this.members$.pipe(map((mList: Member[]) => mList.map((m: Member) => new ListItem(m.id, m.name))));

    this.selectedItem$ = this.membersFacdeService.getSelectedMember();

    this.isLoading$ = this.membersFacdeService.getIsLoading();


    this.selectedMemberHierarchyList$ = this.membersFacdeService.getSelectedMemberHierarchyList();

    this.subscriptions = this.selectedItem$.subscribe((m: IListItem) => {
      if (m.id && m.label) {
        this.membersFacdeService.loadHierarchy(m.id);
      }
    });

  }

  ngOnInit() {
    this.membersFacdeService.loadMembers();
  }

  itemSelected(itemSelected: IListItem) {
    this.membersFacdeService.itemSelected(itemSelected);

  }

  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }
}
