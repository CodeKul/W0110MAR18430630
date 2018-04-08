import { Component, OnInit } from '@angular/core';
import { MyDataService } from './my-data.service';

@Component({
  selector: 'app-ser-alert',
  template: `
    <div class="row">
      <div class="alert alert-info">
        This is related to alert {{prg}}
      </div>
    </div>
  `,
  styles: []
})
export class SerAlertComponent implements OnInit {

  prg: number
  constructor(
    private dtSr: MyDataService
  ) { }

  ngOnInit() {
    this.dtSr.receiveProgress(
      num => this.prg = num
    )
  }
}
