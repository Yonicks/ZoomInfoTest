import {createAction, props} from '@ngrx/store';
import {Member} from '../../common/models/member';
import {IListItem} from '../../common/models/i-list-item';


export const ChangeMemberSelected = createAction(
  '[Members] MEMBER_SELECTED',
  props<{ itemSelected: IListItem }>()
);


// Fetch MemberDetails
export const FetchMemberDetails = createAction(
  '[Members] FETCH_MEMBER_DETAILS',
  props<{ id: string }>()
);

export const FetchMemberDetailsSuccess = createAction(
  '[Members] FETCH_MEMBER_DETAILS_SUCCESS',
  props<{ memberDetails: Member }>()
);

export const FetchMemberDetailsFailure = createAction('[Members] FETCH_MEMBER_DETAILS_FAILURE');


// Fetch Hierarchy
export const FetchHierarchy = createAction(
  '[Members] FETCH_HIERARCHY',
  props<{ id: string }>()
);

export const FetchHierarchySuccess = createAction(
  '[Members] FETCH_HIERARCHY_SUCCESS',
  props<{ memberSelectedHierarchy: Array<Member> }>()
);

export const FetchHierarchyFailure = createAction('[Members] FETCH_HIERARCHY_FAILURE');


// Fetch Members
export const FetchMembers = createAction(
  '[Members] FETCH_MEMBERS'
);
export const FetchMembersSuccess = createAction(
  '[Members] FETCH_MEMBERS_SUCCESS',
  props<{ total: number, members: Array<Member> }>()
);
export const FetchMembersFailure = createAction('[Members] FETCH_MEMBERS_FAILURE');
