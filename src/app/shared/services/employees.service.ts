import { Injectable, OnInit } from '@angular/core';
import { DialogService } from 'primeng/dynamicdialog';
import { Employe } from '../../models/employe';
import { ConfirmDeleteDialogComponent } from '../dialogs/confirm-delete-dialog/confirm-delete-dialog.component';
import { FirestoreService } from './firestore.service';

@Injectable({
  providedIn: 'root',
})
export class EmployeesService {

  // employees: Employe[] = []

  constructor(
    private firestoreService: FirestoreService,
    private dialogService: DialogService) { }

  createEmploye(employe: any) {
    const newEmploye = new Employe(employe)
    this.firestoreService.post(newEmploye, 'employees')
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

  updateEmploye(updatedEmployeData: any, employeToBeUpdated: Employe) {
    employeToBeUpdated.firstName = updatedEmployeData.firstName;
    employeToBeUpdated.lastName = updatedEmployeData.lastName;
    employeToBeUpdated.code = updatedEmployeData.code;
    employeToBeUpdated.division = updatedEmployeData.division;

    this.firestoreService.update(employeToBeUpdated, 'employees', employeToBeUpdated.userID);
  }


}
