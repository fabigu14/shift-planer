import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';

@Pipe({
  name: 'dateFormat'
})
export class MomentPipe implements PipeTransform {

  transform(value: Date, dateFormat: string): any {
    return moment(value).format(dateFormat);
}

}
