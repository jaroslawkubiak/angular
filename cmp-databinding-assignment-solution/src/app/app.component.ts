import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  oddNumbers: number[] = [];
  evenNumbers: number[] = [];

  onIntervalFired(countNumber: number) {
    console.log(countNumber);
    if (countNumber % 2 === 0) this.evenNumbers.push(countNumber);
    else this.oddNumbers.push(countNumber);
  }
}
