import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  @ViewChild('form') signupForm: NgForm;
  public valid: boolean = false;
  subscriptions = ['Basic', 'Advanced', 'Pro'];
  defaultSubscription = 'Advanced';

  userForm = {
    submitted: false,
    username: '',
    email: '',
    subscription: '',
  };

  onSubmit() {
    this.userForm.submitted = true;
    this.userForm.username = this.signupForm.form.value.username;
    this.userForm.email = this.signupForm.form.value.email;
    this.userForm.subscription = this.signupForm.form.value.subscription;
  }
}
