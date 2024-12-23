import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-server-status',
  standalone: true,
  imports: [],
  templateUrl: './server-status.component.html',
  styleUrl: './server-status.component.css',
})
export class ServerStatusComponent implements OnInit, OnDestroy {
  currentStatus: serverStatus = serverStatus.unknown;
  private interval?: ReturnType<typeof setInterval>;

  ngOnInit() {
    this.interval = setInterval(() => {
      const random = Math.random();
      this.currentStatus =
        random < 0.4
          ? serverStatus.online
          : random < 0.8
            ? serverStatus.offline
            : serverStatus.unknown;
    }, 1000);
  }
  ngOnDestroy() {
    console.log(`############# e #############`);
    clearTimeout(this.interval);
  }
}

enum serverStatus {
  online = 'online',
  offline = 'offline',
  unknown = 'unknown',
}
