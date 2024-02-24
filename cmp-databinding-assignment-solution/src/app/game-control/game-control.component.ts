import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css'],
})
export class GameControlComponent implements OnInit {
  @Output() intervalFired = new EventEmitter<number>();
  interval;
  intervalCount: number = 0;
  constructor() {}

  ngOnInit() {}

  onGameStart() {
    console.log('Game started');
    this.interval = setInterval(() => {
      this.intervalCount++;
      this.intervalFired.emit(this.intervalCount);
    }, 1000);
  }
  onGamePause() {
    console.log('Game paused');
    clearInterval(this.interval);
  }
}
