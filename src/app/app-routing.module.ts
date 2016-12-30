import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthService } from './auth/auth.service';
import { AuthGuard } from './auth/auth-guard.sevice';

import { AdminComponent } from './admin/admin.component';
import { HomeComponent } from './home/home.component';
import { SignInComponent } from './admin/sign-in/sign-in.component';
import { SignUpComponent } from './admin/sign-up/sign-up.component';
import { DashboardComponent } from './home/dashboard/dashboard.component';
import { LayoutComponent } from './home/layout/layout.component';
import { TablesComponent } from './home/tables/tables.component';
import { PagesComponent } from './home/pages/pages.component';
import { OthersComponent } from './home/others/others.component';
import { FormComponent } from './home/form/form.component';
import { FormElementsComponent } from './home/form/form-elements/form-elements.component';
import { FormValidationComponent } from './home/form/form-validation/form-validation.component';
import { FormWizardComponent } from './home/form/form-wizard/form-wizard.component';
import { FormLayoutsComponent } from './home/form/form-layouts/form-layouts.component';

const appRoutes: Routes = [
  {
    path: '',
    redirectTo: '/admin',
    pathMatch: 'full'
  },
  {
    path: 'admin',
    component: AdminComponent,
    children: [
      { path: '', component: SignInComponent },
      { path: 'sign-in', component: SignInComponent },
      { path: 'sign-up', component: SignUpComponent}
    ]
  },
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [AuthGuard],
    children: [
      { path: '', component: DashboardComponent },
      { path: 'dashboard', component: DashboardComponent },
      { path: 'tables', component: TablesComponent },
      { path: 'pages', component: PagesComponent },
      { path: 'layout', component: LayoutComponent },
      { path: 'others', component: OthersComponent },
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
      }
    ]
  }
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
  providers: [
    AuthService,
    AuthGuard,
  ]
})
export class AppRoutingModule { }