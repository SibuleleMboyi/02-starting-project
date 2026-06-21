import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { UserInputComponent } from './user-input/user-input.component';
import { InvestmentsResultsComponent } from './investments-results/investments-results.component';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [AppComponent, HeaderComponent, UserInputComponent, InvestmentsResultsComponent],
  imports: [FormsModule, BrowserModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
