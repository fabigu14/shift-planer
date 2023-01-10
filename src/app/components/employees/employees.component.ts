import { Component, OnInit } from '@angular/core';
import { DocumentChangeAction } from '@angular/fire/compat/firestore';
import { DialogService } from 'primeng/dynamicdialog';
import { Employe } from 'src/app/models/employe';
import { EmployeesService } from 'src/app/shared/services/employees.service';
import { FirestoreService } from 'src/app/shared/services/firestore.service';
import { EmployeDialogComponent } from './employe-dialog/employe-dialog.component';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss'],
  providers: [DialogService]
})
export class EmployeesComponent implements OnInit {

  employees: Employe[] = []

  constructor(
    public dialogService: DialogService,
    private employeesService: EmployeesService,
    private firestoreService: FirestoreService,
  ) { }


  ngOnInit(): void {
    this.firestoreService.get('employees')
      .subscribe(res => {
        this.setEmployees(res)
        console.log(this.employees);

      });
  }

  setEmployees(employees: DocumentChangeAction<unknown>[]) {
    this.employees = []
    employees.forEach((employe) => {
      this.employees.push(
        new Employe(employe.payload.doc.data(), employe.payload.doc['id'])
      )
    });
  }

  showDialog(employe?: Employe) {
    this.dialogService.open(EmployeDialogComponent, {
      data: employe,
      header: 'Mitarbeiter anlegen',
      width: '500px',
    });
  }

  editEmploye(employe: Employe) {
    this.showDialog(employe);
  }

  deleteEmploye(employe: Employe) {
    this.employeesService.deleteEmploye(employe)
  }

}
