import { MyDataService } from './my-data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ser-btn',
  template: `
    <div class="row">
      <button (click)="incSt()" class="btn btn-primary">Hi, Say</button>
    </div>  
  `,
  styles: []
})
export class SerBtnComponent implements OnInit {

  constructor(
    private dtSr : MyDataService
  ) { }

  ngOnInit() {
  }

  incSt() {
    this.dtSr.emitProgress()
  }

}
