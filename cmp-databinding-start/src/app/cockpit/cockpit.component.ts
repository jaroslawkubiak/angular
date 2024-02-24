import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrl: './cockpit.component.css',
})
export class CockpitComponent {
  // newServerName = '';
  // newServerContent = '';
  @ViewChild('serverContentInput', { static: true }) serverContentInput: ElementRef;

  @Output()
  serverCreatedCustomEvent = new EventEmitter<{
    serverName: string;
    serverContent: string;
  }>();

  @Output()
  blueprintCreatedCustomEvent = new EventEmitter<{
    serverName: string;
    serverContent: string;
  }>();

  onAddServer(nameInput: HTMLInputElement) {
    this.serverCreatedCustomEvent.emit({
      serverName: nameInput.value,
      serverContent: this.serverContentInput.nativeElement.value
    });
  }

  onAddBlueprint(nameInput: HTMLInputElement) {
    this.blueprintCreatedCustomEvent.emit({
      serverName: nameInput.value,
      serverContent: this.serverContentInput.nativeElement.value
    });
  }
}
