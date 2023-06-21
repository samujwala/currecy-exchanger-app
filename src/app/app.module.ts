import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CurrencyExchangerComponent } from './currency-exchanger/currency-exchanger.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpService } from './services/currency-exchanger.service';
import { HttpClientModule } from '@angular/common/http';
import { CurrencyRatesChartComponent } from './currency-rates-chart/currency-rates-chart.component';

@NgModule({
  declarations: [
    AppComponent,
    CurrencyExchangerComponent,
    CurrencyRatesChartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
