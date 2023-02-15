import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import * as moment from 'moment';
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

  disabled: boolean = true

  divisions = [
    'Service',
    'Trainer',
    'Aufsicht'
  ]

  shiftForm = new FormGroup({
    date: new FormControl({ value: this.config.data.weekday, disabled: true }, [Validators.required]),
    timeOfDay: new FormControl(this.config.data.shift, [Validators.required]),
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

    if (this.config.data.shift.id) {
      this.shiftForm.patchValue(this.config.data.shift)

      this.shiftForm.patchValue({
        date: moment.unix(this.config.data.shift.date).format('LL'),
      })
    }
  }

  async setEmployees() {
    await this.employeesService.getEmployees()
    this.employeesService.employeesChanges.subscribe(value => {
      this.employees = value
    })
  }

  onSubmit() {
    if (this.config.data.shift.id) {
      this.shiftService.updateShift(this.config.data.shift, this.shiftForm.getRawValue())
    } else {
      this.shiftService.createShift(this.shiftForm.getRawValue())
    }
    this.closeDialog()
  }

  closeDialog() {
    this.ref.close()
  }
}
