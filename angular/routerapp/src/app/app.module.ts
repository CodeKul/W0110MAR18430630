import { AdminModule } from './admin/admin.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { LoginModule } from './login/login.module';
import { FpModule } from './fp/fp.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AdminModule,
    LoginModule,
    FpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
