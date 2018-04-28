import { FpComponent } from './fp/fp.component';
import { AdminComponent } from './admin/admin.component';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'admin/:adNm', component: AdminComponent },
  { path: 'admin', redirectTo: 'admin/default' },
  { path: 'fp', component: FpComponent },
  { path: '**', component: FpComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
