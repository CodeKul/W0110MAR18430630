import {
  Component,
  Input,
  OnChanges,
  OnInit,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy,
  SimpleChange,
  SimpleChanges
} from '@angular/core';

@Component({
  selector: 'app-alert-comp',
  template: `
  <ng-content ></ng-content> 
  <div [class]="alertType" role="alert">
    This is an alert—check it out!
  </div>
  `,
  styles: []
})
export class AlertCompComponent implements OnChanges, OnInit {

  @Input()
  alertType: string

  constructor() { }


  ngOnChanges(chng: SimpleChanges) {
    console.log(`ngOnChanges`, chng)
  }

  ngOnInit() {
    console.log(`ngOnInit`)
  }


  ngDoCheck() {
    console.log(`ngDoCheck`)
  }
  ngAfterContentInit() {
    console.log(`ngAfterContentInit`)
  }
  ngAfterContentChecked() {
    console.log(`ngAfterContentChecked`)
  }
  ngAfterViewInit() {
    console.log(`ngAfterViewInit`)
  }
  ngAfterViewChecked() {
    console.log(`ngAfterViewChecked`)
  }
  ngOnDestroy() {
    console.log(`ngOnDestroy`)
  }
}
