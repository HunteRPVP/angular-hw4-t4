import { Component } from '@angular/core';
import phoneNumbers from '../assets/phoneNumbers.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-hw4-t4';

  phones = phoneNumbers;
  newPhone: string = '';

  addNewPhone(phoneNum: string): void {
    phoneNum = phoneNum.replace(/\D/g,'');
    console.log(phoneNum);
    if(phoneNum.length == 11) {
      var newPhone = {
        countryNum:phoneNum.substring(0,1),
        operatorNum:phoneNum.substring(1,4),
        restOfTheNumber:phoneNum.substring(4,12)
      };
      this.phones.phoneNumbers.push(newPhone);
    }
    else {
      alert('Номер телефона должен содержать 11 цифр');
    }
  }
}
