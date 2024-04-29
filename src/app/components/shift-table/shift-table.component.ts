import { Component, OnInit } from '@angular/core';
import { DialogService } from 'primeng/dynamicdialog';
import { Employe } from 'src/app/models/employe';
import { FirestoreService } from 'src/app/shared/services/firestore.service';
import { ShiftService } from './services/shift.service';
import { ShiftDialogComponent } from './shift-dialog/shift-dialog.component';
import 'moment/locale/de'
import * as moment from 'moment';
import { Shift } from 'src/app/models/shift';


@Component({
  selector: 'app-shift-table',
  templateUrl: './shift-table.component.html',
  styleUrls: ['./shift-table.component.scss']
})
export class ShiftTableComponent implements OnInit {

  shiftTimes = ['Vormittag', 'Nachmittag', 'Abend']

  selectedWeek: any = []
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
    this.getWeek()
    this.shiftService.shiftChanges.subscribe(value => {
      this.shifts = value
      console.log(this.shifts);
      
    })
  }

  getWeek() {
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

    this.startOfWeek = moment(this.today).startOf('isoWeek');
    
    this.endOfWeek = moment(this.today).endOf('isoWeek');
    
    let currentDayOfWeek = this.startOfWeek
    
    this.selectedWeek = []
    while (moment(currentDayOfWeek).isSameOrBefore(this.endOfWeek) && moment(currentDayOfWeek).isSameOrAfter(this.startOfWeek)) {
      this.selectedWeek.push(currentDayOfWeek)
      
      currentDayOfWeek = moment(currentDayOfWeek).add(1, 'days')
    }
    
    this.getShifts()
  }

  async getShifts() {
    await this.shiftService.getShifts(this.startOfWeek, this.endOfWeek)
  }
  nextWeek() {
    this.today.add(7, 'days')
    this.getWeek()
  }

  lastWeek() {
    this.today.subtract(7, 'days')
    this.getWeek()
  }

  currentWeek() {
    this.today = moment()
    this.getWeek()
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
    // console.log(weekday);
    
    // console.log(moment(weekday).format('LL') , moment.unix(day).format('LL'));
    // console.log( shiftTime, timeOfDay);
    
    return (moment(weekday).unix() === day && shiftTime === timeOfDay);
  }


}
