import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { Employe } from 'src/app/models/employe';
import { EmployeesService } from 'src/app/shared/services/employees.service';
import { ShiftService } from '../services/shift.service';

@Component({
  selector: 'app-shift-dialog',
  templateUrl: './shift-dialog.component.html',
  styleUrls: ['./shift-dialog.component.scss']
})
export class ShiftDialogComponent implements OnInit {

  employees: Employe[]

  selectedEmploye: Employe

  divisions = [
    'Service',
    'Trainer',
    'Aufsicht'
  ]

  shiftForm = new FormGroup({
    start: new FormControl('12:33', [Validators.required]),
    end: new FormControl('12:33', [Validators.required]),
    employe: new FormControl('', [Validators.required, Validators.minLength(1)]),
    division: new FormControl('Service', [Validators.required, Validators.minLength(1)])
  })

  constructor(
    public employeesService: EmployeesService,
    private shiftService: ShiftService,
    public config: DynamicDialogConfig,
    public ref: DynamicDialogRef) { }

  async ngOnInit(): Promise<void> {
    this.setEmployees()
    if (this.config.data.shift) {
      this.shiftForm.patchValue(this.config.data.shift)
    }
  }

  async setEmployees() {
    await this.employeesService.getEmployees()
    this.employeesService.employeesChanges.subscribe(value => {
      this.employees = value
    })
  }

  onSubmit() {
    if (this.config.data.shift) {
      this.shiftService.updateShift(this.config.data, this.shiftForm.value)
    } else {
      this.shiftService.createShift(this.config.data, this.shiftForm.value)
    }
    this.closeDialog()
  }

  closeDialog() {
    this.ref.close()
  }
}
