import { Component, Input, OnInit } from '@angular/core';
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-currency-rates-chart',
  templateUrl: './currency-rates-chart.component.html',
  styleUrls: ['./currency-rates-chart.component.scss'],
})
export class CurrencyRatesChartComponent {
  @Input() showChart: any;
  chart: any;

  ngOnInit() {}

  displayChart() {
    this.chart = new Chart('canvas', {
      type: 'bar',
      data: {
        labels: ['June', 'May', 'April', 'March', 'Feb', 'Jan'],
        datasets: [
          {
            label: 'Historical Data for EUR/AED',
            data: [4.0092, 3.9251, 4.0463, 3.9805, 3.8842, 3.9893],
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(153, 102, 255, 0.2)',
              'rgba(255, 159, 64, 0.2)',
            ],
            borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(255, 159, 64, 1)',
            ],
            borderWidth: 1,
          },
        ],
      },
      options: {},
    });
  }
  ngOnChanges() {
    if (this.showChart) {
      this.displayChart();
    }
  }
}
