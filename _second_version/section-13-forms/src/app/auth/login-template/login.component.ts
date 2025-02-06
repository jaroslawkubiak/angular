import {
  afterNextRender,
  Component,
  DestroyRef,
  inject,
  viewChild,
} from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-login-template',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginTemplateComponent {
  private formularz = viewChild.required<NgForm>('form');
  private destroyRef = inject(DestroyRef);

  constructor() {
    afterNextRender(() => {
      const subscription = this.formularz()?.valueChanges?.subscribe({
        next: (value) => console.log(value),
      });

      this.destroyRef.onDestroy(() => subscription?.unsubscribe());
    });
  }

  onSubmit(formData: NgForm) {
    console.log(formData.form);
    if (!formData.form.valid) {
      console.log(`FORM INVALID`);
      return;
    }

    const { email, password } = formData.form.value;
    console.log(email);
    console.log(password);

    formData.form.reset();
  }
}
