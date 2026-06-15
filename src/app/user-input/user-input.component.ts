import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css',
})
export class UserInputComponent {
  public enteredInitialInvestment: string = '0';
  public enteredAnnualInvestment: string = '0';
  public enteredExpectedReturn: string = '5';
  public enteredDuration: string = '10';

  public onSubmit() {
    console.log('Submitted:');
    console.log('enteredInitialInvestment:' + this.enteredInitialInvestment);
    console.log('enteredAnnualInvestment:' + this.enteredAnnualInvestment);
    console.log('enteredExpectedReturn:' + this.enteredExpectedReturn);
    console.log('enteredDuration:' + this.enteredDuration);
  }
}
