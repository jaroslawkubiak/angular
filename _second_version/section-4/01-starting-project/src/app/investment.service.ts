import { Injectable, signal } from '@angular/core';
import { InvesmentInput } from './investment-input.model';
import { InvestmentResults } from './investment-result.model';

@Injectable({ providedIn: 'root' })
export class InvestmentService {
  public resultData = signal<InvestmentResults[] | undefined>(undefined);
  calculateInvestmentResults(data: InvesmentInput) {
    const { initialInvestment, duration, expectedReturn, annualInvestment } =
      data;
    const annualData: InvestmentResults[] = [];
    let investmentValue = initialInvestment;

    for (let i = 0; i < duration; i++) {
      const year = i + 1;
      const interestEarnedInYear = investmentValue * (expectedReturn / 100);
      investmentValue += interestEarnedInYear + annualInvestment;
      const totalInterest =
        investmentValue - annualInvestment * year - initialInvestment;
      annualData.push({
        year: year,
        interest: interestEarnedInYear,
        valueEndOfYear: investmentValue,
        annualInvestment: annualInvestment,
        totalInterest: totalInterest,
        totalAmountInvested: initialInvestment + annualInvestment * year,
      });
    }
    console.log(annualData);
    this.resultData.set(annualData);
    // this.resultData = annualData;
  }
}
