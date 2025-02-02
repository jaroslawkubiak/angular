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
    // this.firstObsSubscription = interval(1000).subscribe((count) => {
    //   console.log(count);
    // });
    const customIntervalObs = Observable.create((observer) => {
      let count = 0;
      setInterval(() => {
        observer.next(count);
        if (count === 3) {
          observer.error(new Error('licznik większy niż 3'));
        }
        if (count === 3) {
          observer.complete();
        }
        count++;
      }, 1000);
    });

    this.firstObsSubscription = customIntervalObs
      .pipe(
        filter((data: number) => {
          return data > 0;
        }),
        map((data: number) => {
          return 'Round: ' + (data + 1);
        })
      )
      .subscribe(
        (jakisEvent) => {
          console.log(jakisEvent);
        },
        (error) => {
          console.log(error);
        },
        () => {
          console.log('Complete');
        }
      );
  }

  ngOnDestroy() {
    this.firstObsSubscription.unsubscribe();
  }
}
