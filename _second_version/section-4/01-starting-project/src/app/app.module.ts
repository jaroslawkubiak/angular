import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { InvestmentResultsComponent } from './investment-results/investment-results.component';
import { UserInputComponent } from './user-input/user-input.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [
    AppComponent,
    HeaderComponent,
    UserInputComponent,
    InvestmentResultsComponent,
  ],
  bootstrap: [AppComponent],
  providers: [],
})
export class AppModule {}
