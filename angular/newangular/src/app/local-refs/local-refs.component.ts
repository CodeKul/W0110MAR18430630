import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-local-refs',
  templateUrl: './local-refs.component.html',
  styleUrls: ['./local-refs.component.css']
})
export class LocalRefsComponent implements OnInit {

  @ViewChild('nm')
  nAny: ElementRef

  constructor() { }

  ngOnInit() {
    this.nAny.nativeElement.style.border = '1px solid red'
    this.nAny.nativeElement.onclick = () => this.nAny.nativeElement.style.border = '5px solid red'
  }

  onBtn(nm: string) {
    console.log(this.nAny.nativeElement)
  }
}
