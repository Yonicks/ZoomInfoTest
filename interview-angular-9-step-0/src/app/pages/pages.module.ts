import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ListComponent} from './components/list/list.component';
import {MembersComponent} from './members/members.component';
import {NavBarComponent} from './components/nav-bar/nav-bar.component';
import {PagesComponent} from './pages.component';
import {ZiCommonModule} from '../common/common.module';
import {EffectsModule} from '@ngrx/effects';
import {MembersEffects} from '../ngrx/effect/members.effects';
import {MembersService} from './services/members.service';
import {MemberHierarchyComponent} from './components/member-hierarchy/member-hierarchy.component';
import { MemberDetailsComponent } from './components/member-details/member-details.component';
import {RouterModule} from '@angular/router';



@NgModule({
  imports: [
    CommonModule,
    ZiCommonModule,
    EffectsModule.forRoot([MembersEffects]),
    RouterModule,
  ],
  declarations: [
    ListComponent,
    MembersComponent,
    NavBarComponent,
    PagesComponent,
    MemberHierarchyComponent,
    MemberDetailsComponent
  ],
  providers: [
    MembersService
  ]
})
export class PagesModule { }
