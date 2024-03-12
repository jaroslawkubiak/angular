import { Component, OnDestroy, OnInit } from '@angular/core';

import { Subscription, interval } from 'rxjs';
import { map, filter } from 'rxjs/operators';
import { Observable } from 'rxjs-compat';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit, OnDestroy {
  private firstObsSubscription: Subscription;
  constructor() {}

  ngOnInit() {
    // this.firstObsSubscription = interval(1000).subscribe(count => {
    //   console.log(count);
    // });

    const customIntervalObservable = Observable.create(observer => {
      let counter = 0;
      setInterval(() => {
        observer.next(counter);
        if (counter === 5) {
          observer.complete();
        }
        if (counter > 3) {
          observer.error(new Error('Count is greater than 3!'));
        }
        counter++;
      }, 1000);
    });

    this.firstObsSubscription = customIntervalObservable
      .pipe(
        filter((data: number) => data % 2 === 0),
        map((data: number) => {
          return 'Round: ' + (data + 1);
        }),
      )
      .subscribe(
        data => {
          console.log(data);
        },
        error => {
          console.error(error);
          console.log(error.message);
        },
        () => {
          console.log(`complete!`);
        },
      );
  }

  ngOnDestroy() {
    // console.log(this.firstObsSubscription);
    this.firstObsSubscription.unsubscribe();
  }
}
