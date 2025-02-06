import { Component } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styles: [`
  .online {
    color: white;
  }
  `]
})
export class ServerComponent {
  serverId: number = 10;
  serverStatus: string = '';
  test = false;

  constructor() {
    this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline';
  }

  getBgColor() {
    return this.serverStatus === 'online' ? 'chartreuse' : 'crimson';
  }

  getServerStatus() {
    return this.serverStatus;
  }
}
