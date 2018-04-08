import { MyDataService } from './services/my-data.service';
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
import { MyDirectivesComponent } from './my-directives/my-directives.component';
import { SizerDirective } from './my-directives/sizer.directive';
import { CstStrDirective } from './my-directives/cst-str.directive';
import { ServicesComponent } from './services/services.component';
import { SerAlertComponent } from './services/ser-alert.component';
import { SerBtnComponent } from './services/ser-btn.component';


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
    NgbootComponent,
    MyDirectivesComponent,
    SizerDirective,
    CstStrDirective,
    ServicesComponent,
    SerAlertComponent,
    SerBtnComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,

    NgbModule.forRoot()
  ],
  providers: [MyDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
