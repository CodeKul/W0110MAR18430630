import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first-b',
  template: `
  <div class="alert alert-primary" role="alert">
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi ratione id accusantium quam enim fuga ipsa cupiditate eligendi, natus ipsam vitae, dicta deleniti facere, voluptas numquam ab magnam cumque alias.
  </div>  
  `,
  styles: [
    `.alert {
      border : 1px solid red
    }
    `
  ]
})
export class FirstBComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
