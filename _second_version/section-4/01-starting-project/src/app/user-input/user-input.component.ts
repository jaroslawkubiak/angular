import { Component, signal } from '@angular/core';
import { InvestmentService } from '../investment.service';

@Component({
  selector: 'app-user-input',
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css',
})
export class UserInputComponent {
  constructor(private investmentService: InvestmentService) {}

  enteredInitialInvestment = signal('10000');
  enteredAnnualInterest = signal('200');
  enteredExpectedReturn = signal('5');
  enteredDuration = signal('6');

  onSubmit() {
    console.log('Submitted!');
    this.investmentService.calculateInvestmentResults({
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
