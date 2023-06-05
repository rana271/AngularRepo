import { Component } from '@angular/core';
import { IEmployee } from './Employee';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Rana';

  employess: IEmployee[] = [
    { code: "e001", name: 'Tom', gender: 'Male', anualSalary: 5500, dateofBirth: '25/6/1988' },
    { code: "e002", name: 'Sam', gender: 'Male', anualSalary: 6700, dateofBirth: '25/11/1980' },
    { code: "e003", name: 'Ravi', gender: 'Male', anualSalary: 8900, dateofBirth: '27/11/1980' },
    { code: "e001", name: 'Kaveri', gender: 'Female', anualSalary: 9000, dateofBirth: '9/6/1991' }
];
//employess=[];
}
