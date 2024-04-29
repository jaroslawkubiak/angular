import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent implements OnInit {
  id: number;
  public activations = [];

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.id = +params.id;
    });
  }

  onActivate() {
    // console.log('onActivate user', this.id);
    this.activations.map((el) => {
      if (el.user === this.id) {
        el.count += 1;
        return;
      } else {
        this.activations.push({ user: this.id, count: 1 });
      }
    });

    // if (!userCounts) {
    //   this.activations.push({ user: this.id, count: 1 });
    // } else {
    //   const index = this.activations.findIndex((el) => el.user === this.id);
    //   this.activations[index].count += 1;
    // }
  }
}
