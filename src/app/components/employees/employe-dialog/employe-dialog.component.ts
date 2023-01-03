import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DialogService, DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { EmployeesService } from 'src/app/services/employees.service';


@Component({
  selector: 'app-new-employe-dialog',
  templateUrl: './employe-dialog.component.html',
  styleUrls: ['./employe-dialog.component.scss']
})
export class EmployeDialogComponent implements OnInit {

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

  constructor(
    private employeesService: EmployeesService,
    public ref: DynamicDialogRef,
    public config: DynamicDialogConfig
  ) { }

  ngOnInit(): void {
    if (this.config.data) {
      this.employeForm.patchValue(this.config.data);
    }
  }

  onSubmit() {
    if (this.config.data) {
      this.employeesService.updateEmploye(this.employeForm.value, this.config.data);
    } else {
      this.employeesService.createEmploye(this.employeForm.value);
    }
    this.ref.close()
  }

}
