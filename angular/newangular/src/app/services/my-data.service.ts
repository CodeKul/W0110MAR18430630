import { EventEmitter } from '@angular/core';

export class MyDataService {

  dtObj = 10;

  private dtEm: EventEmitter<number>
  constructor() {
    this.dtEm = new EventEmitter()
  }

  emitProgress() {
    this.dtObj += 5
    this.dtEm.emit(this.dtObj)
  }

  receiveProgress(cb: (nm : number) => void) {
    this.dtEm.subscribe(
      num => cb(num)
    )
  }
}
