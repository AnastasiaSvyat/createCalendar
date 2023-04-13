import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { NewEvent } from 'src/app/shared/models/newEvent';
import { DateActionService } from 'src/app/shared/services/date-action.service';
import { EventService } from 'src/app/shared/services/event.service';
import { compareTime } from 'src/app/shared/validator/compareTime.validator';

export interface DialogData {
  head: string;
  index: number;
  event: NewEvent;
}

@Component({
  selector: 'app-create-event',
  templateUrl: './create-event.component.html',
  styleUrls: ['./create-event.component.scss']
})
export class CreateEventComponent implements OnInit {

  eventForm!: FormGroup;
  duration: number = 2000;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    public dialogRef: MatDialogRef<CreateEventComponent>,
    private dateActionService: DateActionService,
    private eventService: EventService,
    private snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
    this.eventForm = new FormGroup({
      title: new FormControl(this.data?.event?.title, [Validators.required]),
      type: new FormControl(this.data?.event?.type, [Validators.required]),
      start: new FormControl(this.data?.event?.start || '00:00'),
      end: new FormControl(this.data?.event?.end || '00:00'),
      date: new FormControl(this.dateActionService.currentDate.value.format('DD-MM-YYYY')),
    }, {
      validators:
        [
          compareTime('start', 'end'),
        ]
    })
  }

  get title() { return this.eventForm.get('title'); }
  get type() { return this.eventForm.get('type'); }
  get start() { return this.eventForm.get('start'); }
  get end() { return this.eventForm.get('end'); }

  close() {
    this.dialogRef.close()
  }

  saveEvent(newEvent: NewEvent) {

    if (this.data.head == 'Create') {
      this.eventService.createEvent(newEvent)
      this.snackBar.open('Congratulations! Event has been added!', '', {
        duration: this.duration
      });
    } else {
      this.eventService.updateEvent(newEvent, this.data.index)
      this.snackBar.open('Congratulations! Event has been updated!', '', {
        duration: this.duration
      });
    }
    this.close()
  }

}
