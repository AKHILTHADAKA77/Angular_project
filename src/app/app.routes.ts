import { Component } from '@angular/core';
import { Routes } from '@angular/router';
// import { DashboardComponent } from './component/dashboard';
import { Dashboard } from './component/dashboard/dashboard';
import { About } from './component/about/about';
import { Contact } from './component/contact/contact';

export const routes: Routes = [
    {path:'contact',component:Contact},
   {path:'about',component:About},
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: Dashboard },
  { path: '**', redirectTo: 'dashboard' },

];
