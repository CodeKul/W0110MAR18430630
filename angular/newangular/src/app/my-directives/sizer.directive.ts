import { 
  Directive, 
  ElementRef, 
  Renderer2, 
  OnInit, 
  HostBinding, 
  HostListener, 
  Input 
} from '@angular/core';

@Directive({
  selector: '[codeSizer]'
})
export class SizerDirective implements OnInit {

  @HostBinding('style.border')
  private border: string;

  @HostBinding('class.text-muted')
  private isMuted : boolean; 

  @HostBinding(`style.width`)
  private size : string

  @Input(`codeSizer`)
  private defSz :string;

  constructor(
    private elRf: ElementRef,
    private rend: Renderer2
  ) {
    console.log(elRf.nativeElement)
    //elRf.nativeElement.style.border = '1px solid red'
  }

  ngOnInit() {
    this.border = '1px solid red'
    this.isMuted = true
    this.size = this.defSz
    //this.rend.setStyle(this.elRf.nativeElement, 'border', '1px solid red')  
  }

  @HostListener('mouseenter')
  onMouseIn() {
    this.size = '300px'
  }

  @HostListener('mouseleave')
  onMouseOut() {
    this.size = '200px'
  }
}
