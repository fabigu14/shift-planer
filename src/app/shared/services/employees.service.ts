import { Injectable, OnInit } from '@angular/core';
import { DocumentChangeAction } from '@angular/fire/compat/firestore';
import { DialogService } from 'primeng/dynamicdialog';
import { Subject } from 'rxjs';
import { Employe } from '../../models/employe';
import { ConfirmDeleteDialogComponent } from '../dialogs/confirm-delete-dialog/confirm-delete-dialog.component';
import { FirestoreService } from './firestore.service';

@Injectable({
  providedIn: 'root',
})
export class EmployeesService {

  employeesChanges: Subject<Employe[]> = new Subject<Employe[]>();

  constructor(
    private fs: FirestoreService,
    private dialogService: DialogService) { }

  createEmploye(employe: any) {
    const newEmploye = new Employe(employe)
    this.fs.post(newEmploye, 'employees')
  }

  deleteEmploye(employe: Employe) {
    this.dialogService.open(ConfirmDeleteDialogComponent, {
      data: {
        id: employe.userID,
        collection: 'employees'
      },
      header: 'Löschen bestätigen',
      width: '700px',
    });
  }

  async getEmployees() {
    this.fs.get('employees')
      .subscribe(async (res) => {
        await this.setEmployees(res);
      });
  }

  async setEmployees(employees: DocumentChangeAction<unknown>[]) {
    let employeesArr: Employe[] = []
    employees.forEach((employe) => {
      employeesArr.push(
        new Employe(employe.payload.doc.data(), employe.payload.doc['id'])
      )
    });
    this.employeesChanges.next(employeesArr)
  }

  updateEmploye(updatedEmployeData: any, employeToBeUpdated: Employe) {
    employeToBeUpdated.firstName = updatedEmployeData.firstName;
    employeToBeUpdated.lastName = updatedEmployeData.lastName;
    employeToBeUpdated.code = updatedEmployeData.code;
    employeToBeUpdated.division = updatedEmployeData.division;

    this.fs.update(employeToBeUpdated, 'employees', employeToBeUpdated.userID);
  }
}
