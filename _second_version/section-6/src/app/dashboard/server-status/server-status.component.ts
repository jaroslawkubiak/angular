import { Component, DestroyRef, OnInit, inject } from '@angular/core';

@Component({
  selector: 'app-server-status',
  standalone: true,
  imports: [],
  templateUrl: './server-status.component.html',
  styleUrl: './server-status.component.css',
})
export class ServerStatusComponent implements OnInit {
  currentStatus: serverStatus = serverStatus.unknown;
  private destroyRef = inject(DestroyRef);

  ngOnInit() {
    const interval = setInterval(() => {
      const random = Math.random();
      this.currentStatus =
        random < 0.4
          ? serverStatus.online
          : random < 0.8
            ? serverStatus.offline
            : serverStatus.unknown;
    }, 5000);

    this.destroyRef.onDestroy(() => {
      clearInterval(interval);
    });
  }
}

enum serverStatus {
  online = 'online',
  offline = 'offline',
  unknown = 'unknown',
}
