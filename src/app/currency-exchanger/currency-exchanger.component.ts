import { Component, Input } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { HttpService } from '../services/currency-exchanger.service';

@Component({
  selector: 'app-currency-exchanger',
  templateUrl: './currency-exchanger.component.html',
  styleUrls: ['./currency-exchanger.component.scss'],
})
export class CurrencyExchangerComponent {
  showDetails = false;
  currencyType = 'Currency Exchanger';
  currencyInfo = '';
  currencyConvertorForm!: FormGroup;
  currencyRateListAll: any;

  @Input() conversionType: any;
  currencySource: any = [
    'Javatpoint.com',
    'HDTuto.com',
    'Tutorialandexample.com',
  ];
  currencyTarget: any = [
    'Javatpoint.com',
    'HDTuto.com',
    'Tutorialandexample.com',
  ];
  showChart: boolean = false;
  constructor(private htpService: HttpService, public fb: FormBuilder) {}

  ngOnInit() {
    this.createForm();
    this.getCurrencyRates();
    this.htpService.beSubjectSelectedConversion.subscribe((response: any) => {
      if (response) {
        this.showDetails = true;
        this.currencyInfo = response.title;
        this.setDefaults('EUR', response.tgt);
        this.changeCurrencyEvent();
        this.showChart = false;
      } else {
        this.showDetails = false;
      }
    });
  }

  createForm() {
    this.currencyConvertorForm = this.fb.group({
      amount: new FormControl('', [Validators.required]),
      from: [{ value: '' }, Validators.required],
      to: [{ value: '' }, Validators.required],
      fromRate: [{ value: '', disabled: true }],
      convertedAmount: [{ value: '', disabled: true }],
    });
  }

  getCurrencyRates() {
    this.htpService.getCurrencyRates().subscribe((response: any) => {
      this.currencyRateListAll = response.rates;
      this.currencySource = ['EUR'];
      this.currencyTarget = Object.keys(this.currencyRateListAll);
      this.setDefaults('EUR', this.currencyTarget[0]);
      this.changeCurrencyEvent();
      this.convertCurrency();
    });
  }

  setDefaults(src: string, tgt: string) {
    this.currencyConvertorForm.patchValue({
      from: src,
      to: tgt,
    });
  }

  changeCurrencyEvent() {
    let fromValue = this.currencyConvertorForm.get('from')?.value;
    let toValue = this.currencyConvertorForm.get('to')?.value;
    this.currencyConvertorForm.patchValue({
      fromRate: `1 ${fromValue} = ${this.currencyRateListAll[toValue]} ${toValue}`,
      convertedAmount:null
    });
  }

  convertCurrency() {
    let fromValue = this.currencyConvertorForm.get('from')?.value;
    let toValue = this.currencyConvertorForm.get('to')?.value;
    let amount = this.currencyConvertorForm.get('amount')?.value;
    let exchangerate = `${this.currencyRateListAll[toValue]} `;
    let final = Number(amount) * Number(exchangerate);
    this.currencyConvertorForm.patchValue({
      convertedAmount: `${final} ${toValue}`,
    });
  }

  reset() {
    this.currencyConvertorForm.reset();
    this.setDefaults('EUR', this.currencyTarget[0]);
    this.changeCurrencyEvent();
    this.showDetails = false;
    this.showChart = false;
  }

  enterAmount() {
    let amount = this.currencyConvertorForm.get('amount')?.value;
    return amount?false:true;
  }
}
