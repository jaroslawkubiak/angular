import { Component } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrl: './servers.component.css',
})
export class ServersComponent {
  serverCreationStatus = 'No server was created!';
  serverName = '';

  onCreateServer() {
    this.serverCreationStatus = `Server ${this.serverName} was created!`;
  }

  allowNewServer = false;
  serverBtnCaption = 'Turn On';

  onTurnOn() {
    console.log('on turn on');
    this.allowNewServer = !this.allowNewServer;
    this.allowNewServer
      ? (this.serverBtnCaption = 'Turn Off')
      : (this.serverBtnCaption = 'Turn On');
  }

  onUpdateSererName(event: Event) {
    this.serverName = (<HTMLInputElement>event.target).value;
  }
}
