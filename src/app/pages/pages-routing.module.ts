import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { Grafica1Component } from './grafica1/grafica1.component';
import { ProgressComponent } from './progress/progress.component';
import { PagesComponent } from './pages.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';
import { PromesasComponent } from './promesas/promesas.component';
import { RxjsComponent } from './rxjs/rxjs.component';
import { AuthGuard } from '../guards/auth.guard';

const routes: Routes = [
  {
    path: 'dashboard',
    component: PagesComponent,
    canActivate: [AuthGuard],
    children: [
      { path: '', component: DashboardComponent, data: { title: 'Dashboard'} },
      { path: 'grafica1', component: Grafica1Component,data: { title: 'Graficas'}  },
      { path: 'progress', component: ProgressComponent,data: { title: 'Progress'}  },
      { path: 'account', component: AccountSettingsComponent,data: { title: 'Account'}  },
      { path: 'promesas', component: PromesasComponent,data: { title: 'Promesas'}  },
      { path: 'rxjs', component: RxjsComponent,data: { title: 'Rxjs'}  },
      //{ path: '', redirectTo: 'dashboard', pathMatch: 'full' },
    ]
  }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
