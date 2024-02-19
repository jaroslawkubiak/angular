import { Component } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrl: './servers.component.css',
})
export class ServersComponent {
  serverCreationStatus = 'No server was created!';
  serverName = '';
  serverWasCreated = false;
  servers = ['TestServer 1', 'TestServer 2', 'TestServer 3', 'TestServer 4'];
  displayDetails = false;
  displayClick = [];

  onCreateServer() {
    this.serverCreationStatus = `Server ${this.serverName} was created!`;
    this.serverWasCreated = true;
    this.servers.push(this.serverName);
  }

  allowNewServer = false;
  serverBtnCaption = 'Turn On';

  onTurnOn() {
    this.allowNewServer = !this.allowNewServer;
    this.allowNewServer
      ? (this.serverBtnCaption = 'Turn Off')
      : (this.serverBtnCaption = 'Turn On');
  }

  onUpdateSererName(event: Event) {
    this.serverName = (<HTMLInputElement>event.target).value;
  }

  onDisplayDetails() {
    this.displayClick.push(new Date());
    console.log(this.displayClick);
    return (this.displayDetails = !this.displayDetails);
  }
}
