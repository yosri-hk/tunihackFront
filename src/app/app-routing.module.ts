import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from './signup/signup.component';
import { MailVerifComponent } from './mail-verif/mail-verif.component';
import { SigninComponent } from './signin/signin.component';
import { DashboardComponent } from './dashboard/dashboard.component';

export const routes: Routes = [
  {path:'signup',component:SignupComponent},
  {path:'signin',component:SigninComponent},
  
  {path:'mail-verif', component:MailVerifComponent},
  {path:'dashboard', component:DashboardComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
