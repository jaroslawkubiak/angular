import { Component } from '@angular/core';

import { LoginReactiveComponent } from './auth/login-reactive/login.component';
import { LoginTemplateComponent } from './auth/login-template/login.component';
import { SignupComponent } from './auth/signup/signup.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  imports: [LoginReactiveComponent, SignupComponent, LoginTemplateComponent],
})
export class AppComponent {}
