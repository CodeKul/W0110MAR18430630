import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-directives',
  templateUrl: './my-directives.component.html',
  styleUrls: ['./my-directives.component.css']
})
export class MyDirectivesComponent implements OnInit {

  mobiles = [
    'Android',
    'iOS',
    'Apple',
    'Symbian',
    'Bada',
    'Windows'
  ]
  mobile = 30
  constructor() { }

  ngOnInit() {
  }

}
