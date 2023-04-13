import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CalendarComponent } from './calendar/calendar.component';
import { MonthSelectedComponent } from './month-selected/month-selected.component';
import { RouterCalendarViewComponent } from './router-calendar-view/router-calendar-view.component';
import { DateTransformPipe } from './shared/pipe/date-transform.pipe';
import { CreateEventComponent } from './calendar/create-event/create-event.component';
import { MaterialModule } from './shared/material.module';
import { EventOrganaizerComponent } from './event-organaizer/event-organaizer.component';

@NgModule({
  declarations: [
    AppComponent,
    CalendarComponent,
    CreateEventComponent,
    MonthSelectedComponent,
    RouterCalendarViewComponent,
    DateTransformPipe,
    EventOrganaizerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
