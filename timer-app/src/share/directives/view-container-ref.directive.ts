import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appViewContainerRef]',
  standalone: true
})
export class ViewContainerRefDirective {

  constructor(public viewContainerRef: ViewContainerRef) { }

}
