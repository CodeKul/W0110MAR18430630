import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inter-comp-com',
  templateUrl: './inter-comp-com.component.html',
  styleUrls: ['./inter-comp-com.component.css']
})
export class InterCompComComponent implements OnInit {

  alTyp: string = 'alert alert-info';
  constructor() { }

  ngOnInit() {
  }

  brgFn(typ: string) {
    this.alTyp = typ
  }
}
