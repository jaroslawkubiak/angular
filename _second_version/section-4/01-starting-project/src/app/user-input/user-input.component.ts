import { Component, output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import type { InvesmentInput } from '../investment-input.model';

@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css',
})
export class UserInputComponent {
  calculate = output<InvesmentInput>();

  enteredInitialInvestment = signal('10000');
  enteredAnnualInterest = signal('200');
  enteredExpectedReturn = signal('5');
  enteredDuration = signal('10');

  onSubmit() {
    console.log('Submitted!');
    this.calculate.emit({
      initialInvestment: +this.enteredInitialInvestment(),
      annualInvestment: +this.enteredAnnualInterest(),
      expectedReturn: +this.enteredExpectedReturn(),
      duration: +this.enteredDuration(),
    });
    // form reset
    // this.enteredInitialInvestment.set('0');
    // this.enteredAnnualInterest.set('0');
    // this.enteredExpectedReturn.set('0');
    // this.enteredDuration.set('0');
  }
}
