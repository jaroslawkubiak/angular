import {
  Component,
  ElementRef,
  HostBinding,
  HostListener,
  inject,
  input,
  ViewEncapsulation,
} from '@angular/core';

@Component({
  selector: 'app-control',
  standalone: true,
  imports: [],
  templateUrl: './control.component.html',
  styleUrl: './control.component.css',
  encapsulation: ViewEncapsulation.None,
  host: {
    class: 'control',
    '(click)': 'onClick()',
  },
})
export class ControlComponent {
  // @HostBinding('class') className='control';
  // @HostListener('click') onClick() {  console.log(`clicked`); }

  label = input.required<string>();

  private element = inject(ElementRef);

  onClick() {
    console.log(`clicked`);
    console.log(this.element);
  }
}
