import { Component, OnInit } from '@angular/core';
import { DialogService } from 'primeng/dynamicdialog';
import { Employe } from 'src/app/models/employe';
import { EmployeesService } from 'src/app/shared/services/employees.service';
import { FirestoreService } from 'src/app/shared/services/firestore.service';
import { ShiftService } from './services/shift.service';
import { ShiftDialogComponent } from './shift-dialog/shift-dialog.component';

@Component({
  selector: 'app-shift-table',
  templateUrl: './shift-table.component.html',
  styleUrls: ['./shift-table.component.scss']
})
export class ShiftTableComponent implements OnInit {
  shiftplan = [
    {
      dayTime: 'Vormittag',
      weekdays: [
        {
          day: 'Montag',
          shifts: []
        },
        {
          day: 'Dienstag',
          shifts: []
        },
        {
          day: 'Mittwoch',
          shifts: []
        },
        {
          day: 'Donnerstag',
          shifts: []
        },
        {
          day: 'Freitag',
          shifts: []
        },
        {
          day: 'Samstag',
          shifts: []
        },
        {
          day: 'Sonntag',
          shifts: []
        },
      ]
    },
    {
      dayTime: 'Nachmittag',
      weekdays: [
        {
          day: 'Montag',
          shifts: []
        },
        {
          day: 'Dienstag',
          shifts: []
        },
        {
          day: 'Mittwoch',
          shifts: []
        },
        {
          day: 'Donnerstag',
          shifts: []
        },
        {
          day: 'Freitag',
          shifts: []
        },
        {
          day: 'Samstag',
          shifts: []
        },
        {
          day: 'Sonntag',
          shifts: []
        },
      ]
    },
    {
      dayTime: 'Nachmittag',
      weekdays: [
        {
          day: 'Montag',
          shifts: []
        },
        {
          day: 'Dienstag',
          shifts: []
        },
        {
          day: 'Mittwoch',
          shifts: []
        },
        {
          day: 'Donnerstag',
          shifts: []
        },
        {
          day: 'Freitag',
          shifts: []
        },
        {
          day: 'Samstag',
          shifts: []
        },
        {
          day: 'Sonntag',
          shifts: []
        },
      ]
    }
  ]

  constructor(
    public dialogService: DialogService,
    private firestoreService: FirestoreService,
    private shiftService: ShiftService,
  ) { }

  employees: Employe[] = []

  ngOnInit(): void {
    this.firestoreService.get('employees')
      .subscribe(res => {
        console.log(res);
      })
  }

  showShiftDialog(weekday: any, shift?: any, index?: number) {

    this.dialogService.open(ShiftDialogComponent, {
      data: {
        weekday,
        shift,
        index
      },
      header: 'Schicht anlegen',
      width: '500px',
    });
  }

  deleteShift(weekday: any, index: number) {
   this.shiftService.deleteShift(weekday, index)
  }

  editShift(weekday: any, shift: any, index: number) {
    this.showShiftDialog(weekday, shift, index)
  }
}
