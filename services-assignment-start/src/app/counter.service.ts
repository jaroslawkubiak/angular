import { Injectable } from '@angular/core';

@Injectable()
export class CounterService {
  public active = 0;
  public inactive = 0;

  incrementActive() {
    this.active++;
  }
  incrementInactive() {
    this.inactive++;
  }
}
