import { Component, OnInit } from '@angular/core';
import { DialogService } from 'primeng/dynamicdialog';
import { Employe } from 'src/app/models/employe';
import { EmployeesService } from 'src/app/services/employees.service';
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
    private employeesService: EmployeesService
  ) { }


  ngOnInit(): void {
    this.employees = this.employeesService.employees;
  }

  showDialog() {
    const ref = this.dialogService.open(EmployeDialogComponent, {
      header: 'Mitarbeiter anlegen',
      width: '500px',
    });
  }

  editEmploye(employe: Employe) {
    console.log(employe);
  }

  deleteEmploye(employe: Employe) {
    console.log(employe);

    this.employeesService.deleteEmploye(employe)
  }

}
