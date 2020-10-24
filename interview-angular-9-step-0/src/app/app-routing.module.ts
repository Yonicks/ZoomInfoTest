import { NgModule } from '@angular/core';
import {Routes, RouterModule, PreloadAllModules} from '@angular/router';
import {AuthenticationGuardService} from './core/guards/authentication-guard.service';
import {PagesComponent} from "./pages/pages.component";
import {MemberDetailsComponent} from './pages/components/member-details/member-details.component';


const routes: Routes = [
  {
    path: 'app',
    component: PagesComponent,
    canActivate: [AuthenticationGuardService]
  },
  {
    path: 'members/:id',
    component: MemberDetailsComponent,
    canActivate: [AuthenticationGuardService]
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then(m => m.LoginModule)
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'app'
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
