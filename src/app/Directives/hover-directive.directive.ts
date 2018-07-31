import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHoverDirective]'
})
export class HoverDirectiveDirective {
  private rollOutColor: string = 'white';
  @Input() appHoverDirective: string;

  constructor(private el: ElementRef) { }


  @HostListener('mouseenter') onMouseEnter() {
    this.hiliteColor(this.appHoverDirective);
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.hiliteColor(this.rollOutColor);
  }

  public hiliteColor(color) {
    this.el.nativeElement.style.backgroundColor = color;
  }
}
