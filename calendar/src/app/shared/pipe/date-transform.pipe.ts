import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';

@Pipe({
  name: 'dateTransform',
  pure: false
})
export class DateTransformPipe implements PipeTransform {

  transform(momentValue: moment.Moment | null, format: string = 'MMMM YYYY'): string | null {
    return momentValue?.format(format) || null;
  }

}
