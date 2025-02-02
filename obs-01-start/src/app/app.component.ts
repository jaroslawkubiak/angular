import { Component, OnDestroy, OnInit } from '@angular/core';
import { UserService } from './user.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit, OnDestroy {
  userActivated = false;
  private activatedSubscription: Subscription;

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.activatedSubscription = this.userService.nowySubject$.subscribe(
      (jakiesDane) => {
        this.userActivated = jakiesDane;
      }
    );
  }

  showSubject() {
    console.log(this.userService.nowySubject$);
  }

  ngOnDestroy() {
    this.activatedSubscription.unsubscribe();
  }
}
