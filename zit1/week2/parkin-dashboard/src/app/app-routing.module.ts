import { PagesError404Component } from './pages/pages-error404/pages-error404.component';
import { SettingsComponent } from './pages/settings/settings.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: "full"},
  { path: 'dashboard', component: DashboardComponent},
  { path: 'settings', component: SettingsComponent},
  { path: '**', component: PagesError404Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
