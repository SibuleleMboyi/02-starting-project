import { Component, computed, inject, input, Input } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { InvestmentService } from '../investment.service';

@Component({
  selector: 'app-investments-results',
  templateUrl: './investments-results.component.html',
  styleUrl: './investments-results.component.css',
})
export class InvestmentsResultsComponent {
  private investmentService = inject(InvestmentService);

  // OR
  // constructor(private investmentService: InvestmentService) {}

  public results = computed(() => this.investmentService.resultsData());
  // OR
  // get results() {
  //   return this.investmentService.resultsData;
  // }
}
