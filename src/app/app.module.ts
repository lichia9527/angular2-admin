import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import 'hammerjs';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FormComponent } from './form/form.component';
import { LayoutComponent } from './layout/layout.component';
import { TablesComponent } from './tables/tables.component';
import { PagesComponent } from './pages/pages.component';
import { OthersComponent } from './others/others.component';
import { FormElementsComponent } from './form/form-elements/form-elements.component';
import { FormValidationComponent } from './form/form-validation/form-validation.component';
import { FormWizardComponent } from './form/form-wizard/form-wizard.component';
import { FormLayoutsComponent } from './form/form-layouts/form-layouts.component';


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
    FormLayoutsComponent
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
