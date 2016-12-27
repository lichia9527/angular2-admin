import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { LayoutComponent } from './layout/layout.component';
import { TablesComponent } from './tables/tables.component';
import { PagesComponent } from './pages/pages.component';
import { OthersComponent } from './others/others.component';

const appRoutes: Routes = [
  {
    path: '', redirectTo: '/dashboard',
    pathMatch: 'full'
  },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'tables', component: TablesComponent },
  { path: 'pages', component: PagesComponent },
  { path: 'layout', component: LayoutComponent },
  { path: 'others', component: OthersComponent },
]

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes),
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }