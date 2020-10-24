import {Component, OnDestroy, OnInit} from '@angular/core';
import {MembersFacdeService} from '../../services/members-facde.service';
import {IListItem} from '../../../common/models/i-list-item';
import {Observable, Subscription} from 'rxjs';
import {Member} from '../../../common/models/member';
import {ActivatedRoute, Route, Router} from '@angular/router';

@Component({
  selector: 'member-details',
  template: `
    <div class="container">
      <div *ngIf="isLoading$ | async; else mainArea">
        <zi-loader></zi-loader>
      </div>


      <ng-template #mainArea>
        <div class="memberDetailsArea">
          <zi-button class="goBack-btn" (click)="goBack()">
            Back
          </zi-button>
          <ng-container *ngIf="memberDetails$ | async as memberDetails; else error">

            <div class="memberDetails">
              <div class="header">
                <img src="../../../../assets/images/person-placeholder-portrait.png" class="imgArea"/>
                <div class="nameArea"><span>{{memberDetails.id}} - {{memberDetails.name}}</span></div>
              </div>
              <div class="desc" [innerHTML]=memberDetails.description></div>
            </div>
          </ng-container>
        </div>

        <ng-template #error>
          <div class="errorMsg">{{errorMsg}}</div>
        </ng-template>
      </ng-template>

    </div>



  `,
  styleUrls: ['./member-details.component.scss']
})
export class MemberDetailsComponent implements OnInit, OnDestroy {
  memberDetails$: Observable<Member>;
  subscriptions: Subscription = new Subscription();
  isLoading$: Observable<boolean>;

  errorMsg: string = `Oops, you are nou authorized to see this members details, please go back to the main page try somebody else.`;


  constructor(private membersFacdeService: MembersFacdeService,
              private router: Router,
              private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.isLoading$ = this.membersFacdeService.getIsLoading();
    this.memberDetails$ = this.membersFacdeService.getMemberDetails();

    this.subscriptions = this.activatedRoute.params.subscribe(params => {
      const id = params['id']; // (+) converts string 'id' to a number
      this.membersFacdeService.loadMemberDetails(id);


      // In a real app: dispatch action to load the details here.
    });
  }


  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

  goBack(): void {
    this.router.navigate(['/app']);
  }
}
