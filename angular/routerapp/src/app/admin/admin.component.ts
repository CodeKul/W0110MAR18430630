import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  adNm : string = 'admin'
  constructor(
    private actRt : ActivatedRoute
  ) { }

  ngOnInit() {
    //this.adNm = this.actRt.snapshot.params['adNm']
    this.actRt.params.subscribe(
      prms => this.adNm = prms['adNm']
    )
    console.log(this.actRt)
  }
}
