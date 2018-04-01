import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-btn-comp',
  template: `
  <button type="button" class="btn btn-primary" (click)="plsClk('primary')">Primary</button>
  <button type="button" class="btn btn-secondary" (click)="plsClk('secondary')">Secondary</button>
  <button type="button" class="btn btn-success" (click)="plsClk('success')">Success</button>
  <button type="button" class="btn btn-danger" (click)="plsClk('danger')">Danger</button>
  <button type="button" class="btn btn-warning" (click)="plsClk('warning')">Warning</button>
  <button type="button" class="btn btn-info" (click)="plsClk('info')">Info</button>
  `,
  styles: []
})
export class BtnCompComponent implements OnInit {

  @Output()
  private btnClick: EventEmitter<string>

  constructor() {
    this.btnClick = new EventEmitter()
  }

  ngOnInit() {
  }

  plsClk(str: string) {
    console.log(str)
    this.btnClick.emit(`alert alert-${str}`)
  }
}
