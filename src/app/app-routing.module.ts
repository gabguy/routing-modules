import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ShellComponent } from './shared/components/shell/shell.component';
import { PageNotFoundComponent } from './shared/components/page-not-found/page-not-found.component';
import { LoginComponent } from './auth/components/login/login.component';

const routes: Routes = [
  {path: '', component: ShellComponent,
    children: [
      {path: 'order', loadChildren: './order/order.module#OrderModule'},
      {path: 'patient', loadChildren: './patient/patient.module#PatientModule'}
    ]
  },
  {path: 'login', component: LoginComponent},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
