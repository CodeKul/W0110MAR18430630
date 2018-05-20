import { HttpWebService } from './../http-web.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import { IntervalObservable } from 'rxjs/observable/IntervalObservable';
import { PostObject } from './data-model';

@Component({
  selector: 'app-web-sample',
  templateUrl: './web-sample.component.html',
  styleUrls: ['./web-sample.component.css']
})
export class WebSampleComponent implements OnInit, OnDestroy {

  cnt: string
  mySub: Subscription
  intSub: Subscription

  constructor(
    private http : HttpWebService
  ) { }

  ngOnInit() {
    this.http.randomPostCodes( pstCd => this.cnt = pstCd.result.postcode)

    let pstObj = new PostObject()
    pstObj.postcodes = ['OX49 5NU']
    this.http.postCodeInfo(pstObj, res => console.log(res) )
    // this.mySub = this.myObervable().subscribe(
    //   num => console.log(num),
    //   this.errorHandler,
    //   () => console.log('Its completed')
    // )

    // this.intSub = IntervalObservable
    //   .create(1000)
    //   .subscribe(
    //     int => this.cnt = int,
    //     this.errorHandler
    //   )
  }

  ngOnDestroy() {
    this.mySub.unsubscribe()
    this.intSub.unsubscribe()
  }

  myObervable(): Observable<number> {
    return Observable.create(
      sub => {
        for (let i = 0; i < 100; i++) {
          sub.next(i)
          if (i > 100) sub.error('Error Occured')
        }
        sub.complete()
      }
    )

   
  }

  errorHandler(err) {

  }
}
