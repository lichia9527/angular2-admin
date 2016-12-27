import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { LayoutComponent } from './layout/layout.component';
import { TablesComponent } from './tables/tables.component';
import { PagesComponent } from './pages/pages.component';
import { OthersComponent } from './others/others.component';
import { FormComponent } from './form/form.component';
import { FormElementsComponent } from './form/form-elements/form-elements.component';
import { FormValidationComponent } from './form/form-validation/form-validation.component';
import { FormWizardComponent } from './form/form-wizard/form-wizard.component';
import { FormLayoutsComponent } from './form/form-layouts/form-layouts.component';

const appRoutes: Routes = [
  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full'
  },
  { path: 'dashboard', component: DashboardComponent },
  {
    path: 'form',
    component: FormComponent,
    children: [
      { path: '', component: FormElementsComponent },
      { path: 'elements', component: FormElementsComponent },
      { path: 'validation', component: FormValidationComponent },
      { path: 'wizard', component: FormWizardComponent },
      { path: 'layouts', component: FormLayoutsComponent },

    ]

  },
  { path: 'tables', component: TablesComponent },
  { path: 'pages', component: PagesComponent },
  { path: 'layout', component: LayoutComponent },
  { path: 'others', component: OthersComponent },
]

@NgModule({
  declarations: [
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
  ],
  exports: [
    RouterModule
  ],
})
export class AppRoutingModule { }