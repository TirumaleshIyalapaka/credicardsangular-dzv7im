import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { SavingsComponent } from '../savings/savings.component';
import { LoginComponent } from '../login/login.component';
import { CreditcardsComponent } from '../creditcards/creditcards.component';
import { ProfileComponent } from '../profile/profile.component';
import { RegistrationComponent } from '../registration/registration.component';
import { HeaderComponent } from '../header/header.component';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { RegisteruserComponent } from '../registeruser/registeruser.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'creditcards', component: CreditcardsComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'registration', component: RegisteruserComponent },
  { path: 'header', component: HeaderComponent },
  { path: 'savings', component: SavingsComponent },
  { path: 'dashboard', component: DashboardComponent },
];

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(routes)],
  declarations: [],
  exports: [RouterModule],
})
export class AppRoutingModule {}
