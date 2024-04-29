import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription, interval, Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit, OnDestroy {
  private firstSub: Subscription;
  constructor() {}

  ngOnInit() {
    // this.firstSub = interval(1000).subscribe((count) => {
    //   console.log(count);
    // });
    // const customIntervalObservable = Observable.create((observer) => {
    //   let count = 0;
    //   setInterval(() => {
    //     count++;
    //     observer.next(count);
    //     // if (count === 2) {
    //     //   console.log(`error`);
    //     //   observer.error(new Error('Count is greater than 2'));
    //     // }
    //     // if (count >= 3) {
    //     //   observer.complete();
    //     // }
    //   }, 1000);
    // });
    // this.firstSub = customIntervalObservable.subscribe((countData) => {
    //   console.log(countData);
    // });
  }

  ngOnDestroy() {
    // this.firstSub.unsubscribe();
  }
}
