import { Component } from '@angular/core';
import * as moment from 'moment';
import { ActivatedRoute } from '@angular/router';
import { DateActionService } from '../shared/services/date-action.service';
import { Week } from '../shared/models/week';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})

export class CalendarComponent {

  calendar!: Week[];
  displayedColumns: string[] = ['Sun', 'Mon', 'Tue', 'Wen', 'Thu', 'Fri', 'Sut']

  constructor(
    private dateActionService: DateActionService,
    private activatedRoute: ActivatedRoute,
  ) {
    this.changeViewCalendar()
  }

  ngOnInit(): void {
    this.getCurrentDate();
  }

  changeViewCalendar() {
    this.dateActionService.changeViewCalendar(this.activatedRoute?.snapshot.routeConfig?.path || '')
  }

  getCurrentDate() {
    this.dateActionService.currentDate.subscribe(this.generationListOfDate.bind(this))
  }

  generationListOfDate(now: moment.Moment) {
    let startDay;
    let endDay;
    if (this.dateActionService.whichCalendar.value == 'month') {
      startDay = now.clone().startOf('month').startOf('week')
      endDay = now.clone().endOf('month').endOf('week')
    } else {
      startDay = now.clone().startOf('week')
      endDay = now.clone().endOf('week')
    }

    const date = startDay.clone().subtract(1, 'day')
    const calendar = [];

    while (date.isBefore(endDay, 'day')) {
      calendar.push(
        {
          days: Array(7)
            .fill(0)
            .map(() => {
              const value = date.add(1, 'day').clone()
              const active = moment().isSame(value, 'date');
              const disabled = !now.isSame(value, 'month');
              const selected = now.isSame(value, 'date');

              return {
                value, active, disabled, selected
              };
            })
        }
      )
    }
    this.calendar = calendar;
  }

  selectDay(day: moment.Moment) {
    this.dateActionService.changeDate(day);
  }

}

