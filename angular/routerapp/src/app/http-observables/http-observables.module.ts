import { HttpWebService } from './http-web.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WebSampleComponent } from './web-sample/web-sample.component';
import { HttpClientModule } from '@angular/common/http'

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  declarations: [WebSampleComponent],
  providers :[
    HttpWebService
  ]
})
export class HttpObservablesModule { }
