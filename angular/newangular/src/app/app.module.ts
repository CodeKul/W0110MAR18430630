import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'


import { AppComponent } from './app.component';
import { FirstComponent } from './first/first.component';
import { FirstAComponent } from './first/first-a.component';
import { FirstBComponent } from './first/first-b.component';
import { FancyComponent } from './fancy/fancy.component';
import { CodeCardComponent } from './fancy/code-card/code-card.component';
import { DatabindingComponent } from './databinding/databinding.component';
import { CodeAlertComponent } from './databinding/code-alert.component';
import { InterCompComComponent } from './databinding/inter-comp-com/inter-comp-com.component';
import { BtnCompComponent } from './databinding/inter-comp-com/btn-comp.component';
import { AlertCompComponent } from './databinding/inter-comp-com/alert-comp.component';
import { LifecycleComponent } from './lifecycle/lifecycle.component';
import { LocalRefsComponent } from './local-refs/local-refs.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbootComponent } from './ngboot/ngboot.component';


@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    FirstAComponent,
    FirstBComponent,
    FancyComponent,
    CodeCardComponent,
    DatabindingComponent,
    CodeAlertComponent,
    InterCompComComponent,
    BtnCompComponent,
    AlertCompComponent,
    LifecycleComponent,
    LocalRefsComponent,
    NgbootComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,

    NgbModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
