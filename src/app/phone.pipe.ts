import { Pipe, PipeTransform } from '@angular/core';
import phoneNumbers from '../assets/phoneNumbers.json';

@Pipe({
  name: 'phone',
  pure: false
})
export class PhonePipe implements PipeTransform {

  transform(values: typeof phoneNumbers, ...args: unknown[]): string {
    var res = '';
    for (var i = 0; i < values.phoneNumbers.length; i++) {
      res += '+';
      res += values.phoneNumbers[i].countryNum;
      res += ' (';
      res += values.phoneNumbers[i].operatorNum;
      res += ') ';
      res += values.phoneNumbers[i].restOfTheNumber.substring(0,3);
      res += '-';
      res += values.phoneNumbers[i].restOfTheNumber.substring(3,5);
      res += '-';
      res += values.phoneNumbers[i].restOfTheNumber.substring(5,7);
      if (i != values.phoneNumbers.length-1)
        res += ', ';
    }
    return res;
  }

}
