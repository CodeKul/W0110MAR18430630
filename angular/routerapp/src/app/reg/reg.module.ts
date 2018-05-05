import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RegComponent } from './reg.component';
import { DtRegComponent } from './dt-reg.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [RegComponent, DtRegComponent]
})
export class RegModule { }
