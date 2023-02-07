import { Component, OnInit } from '@angular/core';
import { DialogService } from 'primeng/dynamicdialog';
import { Employe } from 'src/app/models/employe';
import { FirestoreService } from 'src/app/shared/services/firestore.service';
import { ShiftService } from './services/shift.service';
import { ShiftDialogComponent } from './shift-dialog/shift-dialog.component';
import 'moment/locale/de'
import * as moment from 'moment';
import { Shift } from 'src/app/models/shift';

// const moment = require('moment');
moment.locale('de')


@Component({
  selector: 'app-shift-table',
  templateUrl: './shift-table.component.html',
  styleUrls: ['./shift-table.component.scss']
})
export class ShiftTableComponent implements OnInit {

  shiftTimes = ['Vormittag', 'Nachmittag', 'Abend']

  currentWeek: any = []
  today = moment()
  startOfWeek: any
  endOfWeek: any

  constructor(
    public dialogService: DialogService,
    private firestoreService: FirestoreService,
    private shiftService: ShiftService,
  ) { }

  shifts: any[]

  async ngOnInit(): Promise<void> {
    await this.shiftService.getShifts()
    this.shiftService.shiftChanges.subscribe(value => {
      this.shifts = value
    })
    this.getCurrentWeek()

  }

  getCurrentWeek() {
    moment.updateLocale('de', {
      longDateFormat: {
        LT: 'HH:mm',
        LTS: 'HH:mm:ss',
        L: 'DD.MM.YY',
        LL: 'D. MMMM YYYY',
        LLL: 'L LT', // LLL has been modified to override the the format
        LLLL: 'dddd, D. MMMM YYYY HH:mm',
      },
    });

    this.startOfWeek = moment(moment(this.today).startOf('isoWeek').toDate()).format('LL');
    this.endOfWeek = moment(moment(this.today).endOf('isoWeek').toDate()).format('LL');
    let currentDayOfWeek = this.startOfWeek
    this.currentWeek = []
    while (moment(currentDayOfWeek).isBefore(this.endOfWeek) || moment(currentDayOfWeek).isSame(this.endOfWeek)) {
      this.currentWeek.push(currentDayOfWeek)
      currentDayOfWeek = moment(currentDayOfWeek).add(1, 'days').format('LL')
    }
  }

  nextWeek() {
    this.today.add(7, 'days')
    this.getCurrentWeek()
  }

  lastWeek() {
    this.today.subtract(7, 'days')
    this.getCurrentWeek()
  }

  showShiftDialog(shift: any, weekday?: any,) {

    this.dialogService.open(ShiftDialogComponent, {
      data: {
        shift,
        weekday
      },
      header: 'Schicht anlegen',
      width: '500px',
    });
  }

  deleteShift(shift: Shift) {
    this.shiftService.deleteShift(shift)
  }

  editShift(shift: any) {
    this.showShiftDialog(shift)
  }

  checkMatchingDate(weekday: any, shiftTime: any, day: any, timeOfDay: any) {
    return (weekday === day && shiftTime === timeOfDay);
  }


}
