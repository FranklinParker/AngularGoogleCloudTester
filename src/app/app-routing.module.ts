import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {LoginComponent} from "./auth/components/login/login.component";
import {SignupComponent} from "./auth/components/signup/signup.component";
import {HomeComponent} from "./core/components/home/home.component";
import {AuthGuard} from "./auth/service/auth.guard";
import {GoogleMainComponent} from './google/components/google-main/google-main.component';
import {ContactMainComponent} from './contact/components/contact-main/contact-main.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: SignupComponent
  },
  {
    path:'google',
    component: GoogleMainComponent
  },

  {
    path: '',
    component: GoogleMainComponent
  },
  {
    path:'contact',
    component: ContactMainComponent,
    canActivate: [AuthGuard]
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
