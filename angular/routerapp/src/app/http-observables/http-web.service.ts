import { PostCode, PostObject } from './web-sample/data-model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subscription } from 'rxjs/Subscription';

@Injectable()
export class HttpWebService {

  private rndSub: Subscription;

  constructor(
    private http: HttpClient
  ) { }

  randomPostCodes(onPostCode: (pstCd: PostCode) => void) {
    this.rndSub = this.http.get('https://api.postcodes.io/random/postcodes')
      .subscribe(
        res => onPostCode(res as PostCode),
        this.errorHandler
      )
  }

  postCodeInfo(pst : PostObject, onRes : (res) => void ) {
    this.http.post(
      'https://api.postcodes.io/postcodes', 
      pst
    ).subscribe(
      res => onRes(res),
      this.errorHandler
    )
  }

  errorHandler(err) {

  }
}
