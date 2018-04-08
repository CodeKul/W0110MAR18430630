import { MyDataService } from './my-data.service';
import { Injectable } from '@angular/core';

@Injectable()
export class RemoteDataService {

  constructor(
    private dtSr : MyDataService
  ) {
    this.dtSr.emitProgress()
   }

}
