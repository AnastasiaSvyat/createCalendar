import { Injectable } from '@angular/core';
import * as moment from 'moment';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class DateActionService {

  public currentDate: BehaviorSubject<moment.Moment> = new BehaviorSubject(moment());

  public whichCalendar: BehaviorSubject<string> = new BehaviorSubject('month');

  constructor() { }

  changeMonth(count: number) {
    const newValue = this.currentDate.value.add(count, 'month');
    this.currentDate.next(newValue);
  }

  changeWeek(count: number) {
    const newValue = this.currentDate.value.add(count, 'week');
    this.currentDate.next(newValue);
  }

  changeDate(day: moment.Moment) {
    const value = this.currentDate.value.set({
      date: day.date(),
      month: day.month()
    })
    this.currentDate.next(value);
  }

  changeViewCalendar(option: string) {
    this.whichCalendar.next(option)
    
  }
}