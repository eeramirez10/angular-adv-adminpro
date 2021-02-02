import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { Grafica1Component } from './grafica1/grafica1.component';
import { PagesComponent } from './pages.component';
import { ProgressComponent } from './progress/progress.component';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';


import { ComponentsModule } from '../components/components.module';
import { AccountSettingsComponent } from './account-settings/account-settings.component';

const components = [
  DashboardComponent,
  Grafica1Component,
  ProgressComponent,
  PagesComponent,
  AccountSettingsComponent
]



@NgModule({
  declarations: [
    components,
    
  ], 
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
    ComponentsModule,
   
  ],
  exports:[ 
    components

  ]
})
export class PagesModule { }
