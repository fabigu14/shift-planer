import { Injectable } from '@angular/core';
import { Employe } from '../models/employe';

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {

  employees: Employe[] = []

  constructor() { }

  createEmploye(employe: any){
    this.employees.push(
      new Employe(employe)
    )
    console.log(this.employees);
  }

  deleteEmploye(employe: Employe){
    this.employees.splice(this.employees.indexOf(employe), 1)
  }

  updateEmploye(updatedEmployeData: any, employeToBeUpdated: Employe){
    employeToBeUpdated.firstName = updatedEmployeData.firstName;
    employeToBeUpdated.lastName = updatedEmployeData.lastName;
    employeToBeUpdated.code = updatedEmployeData.code;
    employeToBeUpdated.division = updatedEmployeData.division;
  }
}
