import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrencyRatesChartComponent } from './currency-rates-chart.component';

describe('CurrencyRatesChartComponent', () => {
  let component: CurrencyRatesChartComponent;
  let fixture: ComponentFixture<CurrencyRatesChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CurrencyRatesChartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CurrencyRatesChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
