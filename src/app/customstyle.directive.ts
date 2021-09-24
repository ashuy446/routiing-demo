import { Directive,ElementRef, Optional } from '@angular/core';

@Directive({
  selector: '[appCustomstyle]'
})
export class CustomstyleDirective {

  constructor(private el:ElementRef) { 
    this.el.nativeElement.style.color = 'red';
  }

}
