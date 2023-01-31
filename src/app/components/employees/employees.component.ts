import { Component, OnInit } from '@angular/core';
import { DocumentChangeAction } from '@angular/fire/compat/firestore';
import { DialogService } from 'primeng/dynamicdialog';
import { Employe } from 'src/app/models/employe';
import { EmployeesService } from 'src/app/shared/services/employees.service';
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
  ) { }


  async ngOnInit(): Promise<void> {
    await this.employeesService.getEmployees()
    this.employeesService.employeesChanges.subscribe( value => {
      this.employees = value
    })
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
