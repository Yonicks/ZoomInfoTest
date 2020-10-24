import {createReducer, on} from '@ngrx/store';
import {initialMembersState} from '../state/members.state';
import {
  FetchMembers,
  FetchMembersFailure,
  FetchMembersSuccess,
  ChangeMemberSelected, FetchHierarchy, FetchHierarchySuccess, FetchMemberDetails, FetchMemberDetailsSuccess, FetchMemberDetailsFailure,
} from '../action/members.actions';

export const MembersReducer = createReducer(
  initialMembersState,

  on(FetchMembers, state => ({...state, loading: true, loaded: false})),

  on(FetchMembersSuccess, (state, {total, members}) => ({...state, total, members, loaded: true, loading: false})),

  on(FetchMembersFailure, state => ({...state, loading: false, loaded: true})),

  on(ChangeMemberSelected, (state, {itemSelected}) => ({...state, itemSelected})),


  on(FetchHierarchy, (state, {id}) => ({...state})),

  on(FetchHierarchySuccess, (state, {memberSelectedHierarchy}) => ({...state, memberSelectedHierarchy})),

  on(FetchMembersFailure, state => ({...state})),


  on(FetchMemberDetails, (state, {id}) => ({...state, loading: true, loaded: false})),

  on(FetchMemberDetailsSuccess, (state, {memberDetails}) => ({...state, memberDetails, loading: false, loaded: true})),

  on(FetchMemberDetailsFailure, state => ({...state, loading: false, loaded: true, memberDetails: null})),
);
