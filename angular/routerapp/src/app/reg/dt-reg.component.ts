import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl, ValidationErrors } from '@angular/forms';
import { Observable } from 'rxjs/Observable';

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
      usNm: this.fb.control([], Validators.required, this.customAsyncValidator),
      eml: ['', Validators.compose([
        Validators.required,
        Validators.email
      ])],
      pass: ['', Validators.compose([
        Validators.required,
        this.customValidator
      ])]
    })
  }

  customValidator(c: AbstractControl): ValidationErrors | null {
    if (c.value.charAt(0) == 'a') {
      return null
    }
    else return { sfa: false }
  }

  customAsyncValidator(c: AbstractControl): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> {
    return new Promise(
      (res, rej) => setTimeout(
        () => {
          if (c.value.charAt(0) == 'a') res(null)
          else res({ sfa: false })
        },
        1500
      )
    )
  }

  onFrmSbmt() {
    console.log(this.frmGrp)
  }
}
