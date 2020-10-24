import {Member} from '../../common/models/member';
import {createFeatureSelector, createSelector} from '@ngrx/store';
import {Filters} from '../../common/models/filters';
import {AppConfig} from '../../app.config';
import {IListItem, ListItem} from '../../common/models/i-list-item';


export interface MembersState {
  loading: boolean;
  loaded: boolean;
  total: number;
  members: Member[];
  itemSelected: IListItem;
  memberSelectedHierarchy: Member[];
  memberDetails: Member;
}

export const initialMembersState: MembersState = {
  loading: false,
  loaded: false,
  total: 0,
  members: [],
  itemSelected: new ListItem(),
  memberSelectedHierarchy: [],
  memberDetails: null
};


export const membersFeatureSelector = createFeatureSelector<MembersState>('members');

export const getMembersSelector = createSelector(membersFeatureSelector, state => state.members);

export const getItemSelectedSelector = createSelector(membersFeatureSelector, state => state.itemSelected);

export const getLoadingSelector = createSelector(membersFeatureSelector, state => state.loading);

export const getLoadedSelector = createSelector(membersFeatureSelector, state => state.loaded);

export const getMemberSelectedHierarchySelector = createSelector(membersFeatureSelector, state => state.memberSelectedHierarchy);

export const getMemberDetailsSelector = createSelector(membersFeatureSelector, state => state.memberDetails);

// export const selectedMemberFeatureSelector = createFeatureSelector<MembersState>('itemSelected');

export const getSelectedMemberSelector = createSelector(getMembersSelector, getItemSelectedSelector, (members, selected) => {
  const itemSelected = members.find((m: Member) => m.id === selected.id);
  return itemSelected ? new ListItem(itemSelected.id, itemSelected.name) : new ListItem();
});







