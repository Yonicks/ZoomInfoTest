import {Component, OnDestroy, OnInit} from '@angular/core';
import {ListItem} from '../../common/models/list-item';
import {Observable, Subscription} from 'rxjs';
import {Member} from '../../common/models/member';
import {MembersState} from "../../ngrx/state/members.state";
import {FetchMembers} from "../../ngrx/action/members.actions";
import {Store} from "@ngrx/store";


@Component({
  selector: 'zi-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.scss']
})
export class MembersComponent implements OnInit, OnDestroy {

  listItems$: Observable<ListItem[]>;
  subscriptions: Subscription = new Subscription();
  selectedMember: ListItem;
  isLoading: boolean;

  constructor(private membersStore: Store<MembersState>) {}

  ngOnInit() {
    this.membersStore.dispatch(FetchMembers());

  }

  memberSelected(member) {

  }

  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }
}
