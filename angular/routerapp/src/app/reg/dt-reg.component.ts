import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-dt-reg',
  templateUrl: './dt-reg.component.html',
  styleUrls: ['./dt-reg.component.css']
})
export class DtRegComponent implements OnInit {

  frmGrp: FormGroup

  myObj = {
    nm: 'android',
    em: 'android@gmail.com',
    pass: '112e'
  }
  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    // this.frmGrp = this.fb.group({
    //   usNm: this.fb.control([this.myObj.nm]),
    //   eml: [this.myObj.em],
    //   pass: [this.myObj.pass]
    // })

    this.frmGrp = this.fb.group({
      usNm: this.fb.control([], Validators.required),
      eml: ['', Validators.compose([
        Validators.required,
        Validators.email
      ])  ],
      pass: ['', Validators.required]
    })
  }

  onFrmSbmt() {
    console.log(this.frmGrp)
  }
}
