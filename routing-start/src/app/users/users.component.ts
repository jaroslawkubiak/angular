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
    },
    {
      id: 2,
      name: 'Sabine Wren',
    },
    {
      id: 3,
      name: 'Chopper',
    },
  ];
}
