import {
  Component,
  Input,
  OnChanges,
  SimpleChanges,
  OnInit,
  ViewEncapsulation,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewChecked,
  AfterViewInit,
  OnDestroy,
  ViewChild,
  ElementRef,
  ContentChild,
} from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrl: './server-element.component.css',
  encapsulation: ViewEncapsulation.Emulated, // None, Nativ
})
export class ServerElementComponent
  implements OnInit, OnChanges, DoCheck, AfterContentInit, OnDestroy, AfterContentChecked, AfterViewChecked, AfterViewInit
{
  @Input('srvElement')
  element: {
    type: string;
    name: string;
    content: string;
  };
  @Input() name: string;
  @ViewChild('header', { static: true }) header: ElementRef;
  @ContentChild('contentParagraph', { static: true }) paragraph: ElementRef;

  constructor() {
    console.log('1 constructor called!');
  }
  ngOnInit() {
    console.log('3 ngOnInit called!');
    console.log('3 Text Content: ' + this.header.nativeElement.textContent);
    console.log('3 Paragraph Content: ' + this.paragraph.nativeElement.textContent);
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log('2 ngOnChanges called!', changes);
  }
  ngDoCheck() {
    console.log('4 ngDoCheck called!');
  }

  ngAfterContentInit() {
    console.log('5 ngAfterContentInit called!');
    console.log('5 Paragraph Content: ' + this.paragraph.nativeElement.textContent);
  }

  ngAfterContentChecked() {
    console.log('6 ngAfterContentChecked called!');
  }
  ngAfterViewInit() {
    console.log('7 ngAfterViewInit called!');
    console.log('8 Text Content: ' + this.header.nativeElement.textContent);

  }

  ngAfterViewChecked() {
    console.log('8 ngAfterViewChecked called!');
  }
  ngOnDestroy() {
    console.log('9 ngOnDestroy called!');
  }
}
