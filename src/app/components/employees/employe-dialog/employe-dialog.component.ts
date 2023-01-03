import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { EmployeesService } from 'src/app/services/employees.service';


@Component({
  selector: 'app-new-employe-dialog',
  templateUrl: './employe-dialog.component.html',
  styleUrls: ['./employe-dialog.component.scss']
})
export class EmployeDialogComponent {

  constructor(
    private employeesService: EmployeesService,
    public ref: DynamicDialogRef
  ) { }

  employeForm = new FormGroup({
    firstName: new FormControl('Fabian', [Validators.required, Validators.minLength(1)]),
    lastName: new FormControl('Gurth', [Validators.required, Validators.minLength(1)]),
    code: new FormControl('GUR', [Validators.required, Validators.minLength(1)]),
    division: new FormControl('Service', [Validators.required, Validators.minLength(1)]),
  });

  divisions = [
    'Service',
    'Trainer',
    'Aufsicht'
  ]

  onSubmit() {
    // console.log(this.employeForm.value);
    this.employeesService.createEmploye(this.employeForm.value)
    this.ref.close()
  }

}
