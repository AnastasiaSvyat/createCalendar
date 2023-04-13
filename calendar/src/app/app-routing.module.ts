import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalendarComponent } from './calendar/calendar.component';

const routes: Routes = [
  { path: 'month', component: CalendarComponent },
  { path: 'week', component: CalendarComponent },
  { path: '', redirectTo: 'month', pathMatch: 'full' },
  { path: '**', redirectTo: 'month', },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
