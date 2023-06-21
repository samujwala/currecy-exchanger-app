import { Component, EventEmitter, Output } from '@angular/core';
import { HttpService } from './services/currency-exchanger.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'APP_CURRENCY_EXCHANGER_V15';

  constructor(private htpService: HttpService) {}

  @Output() tabClickEvent: EventEmitter<any> = new EventEmitter();
  conversionTabs = [
    {
      key: 1,
      value: 'EUR USD Details',
      tgt: 'USD',
      title: 'European Union Euro',
    },
    {
      key: 2,
      value: 'EUR GBP Details',
      tgt: 'GBP',
      title: 'European Union Euro',
    },
  ];

  tabClick(conversionInfo: any) {
    this.tabClickEvent.emit(conversionInfo);
    this.htpService.beSubjectSelectedConversion.next(conversionInfo);
  }
}
