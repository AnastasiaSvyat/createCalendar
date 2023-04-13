import { ValidatorFn, FormGroup } from '@angular/forms';
import * as moment from 'moment';

export function compareTime(start: string, end: string): ValidatorFn | any {
    return (form: FormGroup): { [key: string]: boolean } | any => {

        const startTimeValue = form.get(start)?.value;
        const endTimeValue = form.get(end)?.value;

        if (!startTimeValue || !endTimeValue) {
            return { missing: true };
        }

        var startTimeFormat = moment(startTimeValue, 'h:mma');
        var endTimeFormat = moment(endTimeValue, 'h:mma');

        if (endTimeFormat.isBefore(startTimeFormat)) {
            const err = { compareTime: true };
            form.get(end)?.setErrors(err);
            form.get(start)?.setErrors(err);
            return err;
        } else {
            const dateLessError = form.get(end)?.hasError('compareTime');
            if (dateLessError) {
                form.get(end)?.updateValueAndValidity();
                form.get(start)?.updateValueAndValidity();
            }
        }
    };
}