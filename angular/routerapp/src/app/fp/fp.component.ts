import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fp',
  templateUrl: './fp.component.html',
  styleUrls: ['./fp.component.css']
})
export class FpComponent implements OnInit {

  constructor(
    private actRt: ActivatedRoute
  ) { }

  ngOnInit() {
    this.actRt.queryParams.subscribe(prm => console.log(prm.dt))
  }
}
