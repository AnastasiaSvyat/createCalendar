import { Component, OnInit } from '@angular/core';
import { CreateEventComponent } from '../calendar/create-event/create-event.component';
import { MatDialog } from '@angular/material/dialog';
import { Overlay } from '@angular/cdk/overlay';
import { DateActionService } from '../shared/services/date-action.service';
import { EventService } from '../shared/services/event.service';
import { switchMap, tap } from 'rxjs';
import { NewEvent } from '../shared/models/newEvent';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-event-organaizer',
  templateUrl: './event-organaizer.component.html',
  styleUrls: ['./event-organaizer.component.scss']
})
export class EventOrganaizerComponent implements OnInit {

  eventsList: NewEvent[] = [];
  duration: number = 2000;

  constructor(
    private dialog: MatDialog,
    private overlay: Overlay,
    public dateActionService: DateActionService,
    public eventService: EventService,
    private snackBar: MatSnackBar
  ) {

  }

  ngOnInit(): void {
    this.getEventsList();
  }

  editEvent(event: NewEvent, index: number) {
    const dialogRef = this.dialog.open(CreateEventComponent, {
      width: '398px',
      scrollStrategy: this.overlay.scrollStrategies.reposition(),
      minHeight: '321px',
      height: 'auto',
      disableClose: true,
      data: { event: event, head: "Edit", index: index }
    });
  }

  getEventsList() {
    this.dateActionService.currentDate.pipe(
      switchMap(valuet => this.eventService.getEvent(valuet))
    ).subscribe(eventsList => {
      this.eventsList = eventsList;
    })
  }

  deleteEvent(index: number) {
    this.eventService.deleteEvent(index);
    this.snackBar.open('Congratulations! Event has been delated!', '', {
      duration: this.duration
    });
  }

  createNewEvent() {
    const dialogRef = this.dialog.open(CreateEventComponent, {
      width: '500px',
      scrollStrategy: this.overlay.scrollStrategies.reposition(),
      minHeight: '400px',
      height: 'auto',
      disableClose: true,
      data: { head: "Create" }
    });
  }
}