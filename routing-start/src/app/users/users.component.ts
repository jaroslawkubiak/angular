import { Component } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent {
  users = [
    {
      id: 1,
      name: 'Ahsoka Tano',
      img: 'sw1300.png',
    },
    {
      id: 2,
      name: 'Sabine Wren',
      img: 'sw1302.png',
    },
    {
      id: 3,
      name: 'Marrok',
      img: 'sw1301.png',
    },
  ];
}
