import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import { GridItemComponent } from './grid-item/grid-item.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [AdminComponent, GridItemComponent]
})
export class AdminModule { }
