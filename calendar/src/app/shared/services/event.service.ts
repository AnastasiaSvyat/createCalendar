import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { NewEvent } from '../models/newEvent';
import * as moment from 'moment';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  public eventList: BehaviorSubject<NewEvent[]> = new BehaviorSubject<NewEvent[]>([]);

  constructor() { }

  createEvent(event: NewEvent) {
    const currentValue = this.eventList.value;
    const updatedValue = [...currentValue, event];
    localStorage.setItem(event.date, JSON.stringify(updatedValue))
    this.eventList.next(updatedValue);
  }

  getEvent(date: moment.Moment) {
    const dateFormat = date.format('DD-MM-YYYY')
    const value = localStorage.getItem(dateFormat) ? JSON.parse(localStorage.getItem(dateFormat) || '') : [];
    this.eventList.next(value)
    return this.eventList
  }

  updateEvent(event: NewEvent, index: number) {
    const currentValue = this.eventList.value;
    currentValue.splice(index, 1, event)
    localStorage.setItem(event.date, JSON.stringify(currentValue))
    this.eventList.next(currentValue);
  }

  deleteEvent(index: number) {
    const currentValue = this.eventList.value;
    currentValue.splice(index, 1)
  }
}