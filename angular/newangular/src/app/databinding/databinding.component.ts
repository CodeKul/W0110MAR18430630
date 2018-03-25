import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-databinding',
  templateUrl: './databinding.component.html',
  styleUrls: ['./databinding.component.css']
})
export class DatabindingComponent implements OnInit {

  ttl = `codekul angular`
  typ = 'button'
  isSuccess = false
  isShow = false
  utypd: string;

  constructor() { }

  ngOnInit() {
  }

  btnClk() {
    console.log(`You clicked button`)
    this.isSuccess = !this.isSuccess
    this.isShow = !this.isShow
  }
  altCls(str: string) {
    console.log(str)
  }
}
