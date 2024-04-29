import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appPlaceholder]',
})
export class PlaceholderDirectire {
  constructor(public viewContainerRef: ViewContainerRef) {}
}
