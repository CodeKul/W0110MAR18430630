import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-code-alert',
  templateUrl: './code-alert.component.html',
  styleUrls: ['./code-alert.component.css']
})
export class CodeAlertComponent implements OnInit {

  @Input()
  typ?: string;

  @Input()
  strMsg?: string;

  @Input()
  msg?: string;

  @Output()
  clsEv?: EventEmitter<string>;

  constructor() { 
    this.clsEv = new EventEmitter()
  }

  ngOnInit() {
    if (this.typ == 'success') this.typ = 'alert alert-success alert-dismissible fade show'
    else if (this.typ == 'danger') this.typ = 'alert alert-danger alert-dismissible fade show'
    else if (this.typ == 'warning') this.typ = 'alert alert-warning alert-dismissible fade show'
    else this.typ = 'alert alert-info alert-dismissible fade show'
  }
  clsClkd() {
    this.clsEv.emit(this.msg)
  }
}
