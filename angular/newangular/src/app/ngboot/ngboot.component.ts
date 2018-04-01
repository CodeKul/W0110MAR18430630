import { Component, OnInit } from '@angular/core';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';

const now = new Date();

@Component({
  selector: 'app-ngboot',
  templateUrl: './ngboot.component.html',
  styleUrls: ['./ngboot.component.css']
})
export class NgbootComponent implements OnInit {

  model: NgbDateStruct;
  date: {year: number, month: number};

  selectToday() {
    this.model = {year: now.getFullYear(), month: now.getMonth() + 1, day: now.getDate()};
  }
  
  constructor() { }

  ngOnInit() {
  }

}
