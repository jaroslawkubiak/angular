import { EventEmitter, Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class UserService {
  // nowyEmmiter = new EventEmitter<boolean>();

  nowySubject$ = new BehaviorSubject<boolean>(false);
}
