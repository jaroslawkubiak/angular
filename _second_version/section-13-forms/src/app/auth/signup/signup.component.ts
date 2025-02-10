import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormArray,
  ReactiveFormsModule,
  Validators,
  AbstractControl,
} from '@angular/forms';

enum Role {
  student = 'student',
  teacher = 'teacher',
  employee = 'employee',
  founder = 'founder',
  other = 'other',
}

function equalValues(controlName1: string, controlName2: string) {
  return (control: AbstractControl) => {
    const value1 = control.get(controlName1)?.value;
    const value2 = control.get(controlName2)?.value;

    if (value1 === value2) {
      return null;
    }

    return { valuesNotEqual: true };
  };
}

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css',
})
export class SignupComponent {
  public initVal = {
    email: 'jarek@jarek.pl',
    firstName: 'Jaroslaw',
    lastName: 'Kubiak',
    street: 'Fordońska',
    number: '7',
    postalCode: '88-708',
    city: 'Bydgoszcz',
  };

  form = new FormGroup({
    email: new FormControl(this.initVal.email, {
      validators: [Validators.email, Validators.required],
    }),
    passwords: new FormGroup(
      {
        password: new FormControl('', {
          validators: [Validators.minLength(4), Validators.required],
        }),
        confirmPassword: new FormControl('', {
          validators: [Validators.minLength(4), Validators.required],
        }),
      },
      {
        validators: [equalValues('password', 'confirmPassword')],
      }
    ),
    firstName: new FormControl(this.initVal.firstName, {
      validators: [Validators.required],
    }),
    lastName: new FormControl(this.initVal.lastName, {
      validators: [Validators.required],
    }),
    address: new FormGroup({
      street: new FormControl(this.initVal.street, {
        validators: [Validators.required],
      }),
      number: new FormControl(this.initVal.number, {
        validators: [Validators.required],
      }),
      postalCode: new FormControl(this.initVal.postalCode, {
        validators: [Validators.required],
      }),
      city: new FormControl(this.initVal.city, {
        validators: [Validators.required],
      }),
    }),
    role: new FormControl<Role>(Role.employee, {
      validators: [Validators.required],
    }),
    source: new FormArray([
      new FormControl(false),
      new FormControl(false),
      new FormControl(true),
    ]),
    agree: new FormControl(false, { validators: [Validators.required] }),
  });

  get emailIsInvalid() {
    return (
      this.form.controls.email.touched &&
      this.form.controls.email.invalid &&
      this.form.controls.email.dirty
    );
  }

  get passwordIsInvalid() {
    return (
      this.form.controls.passwords.controls.password.touched &&
      this.form.controls.passwords.controls.password.invalid &&
      this.form.controls.passwords.controls.password.dirty
    );
  }

  get confirmPasswordIsInvalid() {
    return (
      this.form.controls.passwords.controls.confirmPassword.touched &&
      this.form.controls.passwords.controls.confirmPassword.invalid &&
      this.form.controls.passwords.controls.confirmPassword.dirty
    );
  }

  onSubmit() {
    console.log(this.form);
    if (this.form.invalid) {
      console.log(`INVALID FORM`);
      return;
    }
    console.log(`SUBMITTED`);
  }

  onReset() {
    this.form.reset();
  }
}
