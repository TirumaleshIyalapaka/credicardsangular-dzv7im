import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing/app-routing.module';

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { DisplayComponent } from './display/display.component';
import { ProfileComponent } from './profile/profile.component';
import { SavingsComponent } from './savings/savings.component';
import { CreditcardComponent } from './creditcard/creditcard.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CreditcardsComponent } from './creditcards/creditcards.component';
import { RegisteruserComponent } from './registeruser/registeruser.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavbarComponent,
    LoginComponent,
    RegistrationComponent,
    DisplayComponent,
    ProfileComponent,
    SavingsComponent,
    CreditcardComponent,
    DashboardComponent,
    CreditcardsComponent,
    RegisteruserComponent,
  ],
  imports: [BrowserModule, ReactiveFormsModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
