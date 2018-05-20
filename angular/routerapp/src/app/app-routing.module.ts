import { LoginGuard } from './login/login.guard';
import { FpComponent } from './fp/fp.component';
import { AdminComponent } from './admin/admin.component';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegComponent } from './reg/reg.component';
import { DtRegComponent } from './reg/dt-reg.component';
import { WebSampleComponent } from './http-observables/web-sample/web-sample.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  {
    path: 'admin/:adNm',
    component: AdminComponent,
    canActivate: [LoginGuard]
  },
  { path: 'admin', redirectTo: 'admin/default' },
  { path: 'fp/:ts', component: FpComponent },
  { path: 'reg', component: RegComponent },
  { path: 'dtReg', component: DtRegComponent },
  { path: 'http', component: WebSampleComponent },
  { path: '**', component: FpComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
