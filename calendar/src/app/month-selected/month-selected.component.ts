import { Component } from '@angular/core';
import { DateActionService } from '../shared/services/date-action.service';

@Component({
  selector: 'app-month-selected',
  templateUrl: './month-selected.component.html',
  styleUrls: ['./month-selected.component.scss']
})
export class MonthSelectedComponent {

  constructor(
    public dateActionService: DateActionService,
  ) { }

  change(count: number) {
    if (this.dateActionService.whichCalendar.value == 'month') {
      this.dateActionService.changeMonth(count)
    } else {
      this.dateActionService.changeWeek(count)
    }
  }
}