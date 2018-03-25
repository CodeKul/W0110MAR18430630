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


@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    FirstAComponent,
    FirstBComponent,
    FancyComponent,
    CodeCardComponent,
    DatabindingComponent,
    CodeAlertComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
