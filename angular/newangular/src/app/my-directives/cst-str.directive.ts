import { Directive, TemplateRef, ViewContainerRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appCstStr]'
})
export class CstStrDirective implements OnInit{

  @Input()
  private appCstStr : boolean;
  
  constructor(
    private tmRf : TemplateRef<any>,
    private vcRf : ViewContainerRef
  ) { 
    console.log(tmRf)
  }

  ngOnInit()  {
    if(!this.appCstStr) {
      this.vcRf.createEmbeddedView(this.tmRf)
    }else {
      this.vcRf.clear()
    }
  }
  
}
