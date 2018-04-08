import { MyDataService } from './my-data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css'],
  // providers: [MyDataService]
})
export class ServicesComponent implements OnInit {

  dt : number

  constructor(
    private dtSr: MyDataService
  ) { }

  ngOnInit() {

  }
  callDt() {
    this.dtSr.dtObj += 5
    this.dt = this.dtSr.dtObj
  }

  callRefresh() {
    this.dt = this.dtSr.dtObj
  }
}
