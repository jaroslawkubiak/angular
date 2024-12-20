import { Component } from '@angular/core';

@Component({
  selector: 'app-server-status',
  standalone: true,
  imports: [],
  templateUrl: './server-status.component.html',
  styleUrl: './server-status.component.css',
})
export class ServerStatusComponent {
  currentStatus: serverStatus = serverStatus.unknown;

  constructor() {
    setInterval(() => {
      const random = Math.random();
      this.currentStatus =
        random < 0.4
          ? serverStatus.online
          : random < 0.8
            ? serverStatus.offline
            : serverStatus.unknown;
    }, 500);
  }
}
enum serverStatus {
  online = 'online',
  offline = 'offline',
  unknown = 'unknown',
}
