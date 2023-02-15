import { Injectable } from '@angular/core';
import { DocumentChangeAction } from '@angular/fire/compat/firestore';
import * as moment from 'moment';
import { DialogService } from 'primeng/dynamicdialog';
import { Subject } from 'rxjs';
import { Shift } from 'src/app/models/shift';
import { ConfirmDeleteDialogComponent } from 'src/app/shared/dialogs/confirm-delete-dialog/confirm-delete-dialog.component';
import { FirestoreService } from 'src/app/shared/services/firestore.service';

@Injectable({
  providedIn: 'root'
})
export class ShiftService {

  shiftChanges: Subject<any[]> = new Subject<any[]>();

  constructor(
    private fs: FirestoreService,
    private dialogService: DialogService
  ) { }

  createShift(shiftValue: any) {
    let newShift = new Shift(shiftValue)
    newShift.employe = Object.assign({}, shiftValue.employe)
    this.fs.post(newShift, 'shifts')
  }

  updateShift(toBeUpdated: Shift, newValue: any) {
    toBeUpdated.start = newValue.start
    toBeUpdated.end = newValue.end
    toBeUpdated.employe = newValue.employe
    toBeUpdated.division = newValue.division

    this.fs.update(toBeUpdated, 'shifts', toBeUpdated.id);
  }

  deleteShift(shift: Shift) {
    this.dialogService.open(ConfirmDeleteDialogComponent, {
      data: {
        id: shift.id,
        collection: 'shifts'
      },
      header: 'Löschen bestätigen',
      width: '700px',
    });
  }

  async getShifts(start: string, end: string) {
    const startOfWeek = moment(start).unix()
    const endOfWeek = moment(end).unix()
    this.fs.get('shifts', startOfWeek, endOfWeek)
      .subscribe(async (res) => {
        await this.setShifts(res);
      });
  }

  async setShifts(shifts: DocumentChangeAction<unknown>[]) {
    let shiftsArr: Shift[] = []
    shifts.forEach((shift) => {
      shiftsArr.push(
        new Shift(shift.payload.doc.data(), shift.payload.doc['id'])
      )
    });
    this.shiftChanges.next(shiftsArr)
  }
}
