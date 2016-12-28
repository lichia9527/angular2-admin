import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import 'hammerjs';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { SideBarComponent } from './home/side-bar/side-bar.component';
import { NavBarComponent } from './home/nav-bar/nav-bar.component';
import { DashboardComponent } from './home/dashboard/dashboard.component';
import { FormComponent } from './home/form/form.component';
import { LayoutComponent } from './home/layout/layout.component';
import { TablesComponent } from './home/tables/tables.component';
import { PagesComponent } from './home/pages/pages.component';
import { OthersComponent } from './home/others/others.component';
import { FormElementsComponent } from './home/form/form-elements/form-elements.component';
import { FormValidationComponent } from './home/form/form-validation/form-validation.component';
import { FormWizardComponent } from './home/form/form-wizard/form-wizard.component';
import { FormLayoutsComponent } from './home/form/form-layouts/form-layouts.component';
import { AdminComponent } from './admin/admin.component';
import { HomeComponent } from './home/home.component';
import { SignInComponent } from './admin/sign-in/sign-in.component';
import { SignUpComponent } from './admin/sign-up/sign-up.component';


@NgModule({
  declarations: [
    AppComponent,
    SideBarComponent,
    NavBarComponent,
    DashboardComponent,
    FormComponent,
    LayoutComponent,
    TablesComponent,
    PagesComponent,
    OthersComponent,
    FormElementsComponent,
    FormValidationComponent,
    FormWizardComponent,
    FormLayoutsComponent,
    AdminComponent,
    HomeComponent,
    SignInComponent,
    SignUpComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    MaterialModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
