import {Injectable} from '@angular/core';
import {Store} from '@ngrx/store';
import {
  getMemberSelectedHierarchySelector,
  getLoadingSelector,
  getMembersSelector,
  getSelectedMemberSelector,
  MembersState, getMemberDetailsSelector, getLoadedSelector
} from '../../ngrx/state/members.state';
import {Member} from '../../common/models/member';
import {Observable} from 'rxjs';
import {IListItem} from '../../common/models/i-list-item';
import {ChangeMemberSelected, FetchHierarchy, FetchMemberDetails, FetchMembers} from '../../ngrx/action/members.actions';

@Injectable({
  providedIn: 'root'
})
export class MembersFacdeService {

  constructor(private membersStore: Store<MembersState>) {
  }

  getMembers(): Observable<Member[]> {
    return this.membersStore.select(getMembersSelector);
  }

  // getSelectedMemberHierarchyList(itemSelected: IListItem): Observable<Member[]> {
  //   return this.membersStore.select(getMembersSelector);
  // }


  itemSelected(itemSelected: IListItem) {
    this.membersStore.dispatch(ChangeMemberSelected({itemSelected}));
  }

  getSelectedMember(): Observable<IListItem> {
    return this.membersStore.select(getSelectedMemberSelector);
  }


  getIsLoading(): Observable<boolean> {
    return this.membersStore.select(getLoadingSelector);
  }


  getIsLoaded(): Observable<boolean> {
    return this.membersStore.select(getLoadedSelector);
  }


  loadMembers(): void {
    this.membersStore.dispatch(FetchMembers());
  }

  // Hierarchy
  loadHierarchy(id: string): void {
    this.membersStore.dispatch(FetchHierarchy({id}));
  }

  getSelectedMemberHierarchyList(): Observable<Member[]> {
    return this.membersStore.select(getMemberSelectedHierarchySelector);
  }

  // Member Details


  loadMemberDetails(id: string): void {
    this.membersStore.dispatch(FetchMemberDetails({id}));
  }

  getMemberDetails(): Observable<any> {
    return this.membersStore.select(getMemberDetailsSelector);
  }
}
