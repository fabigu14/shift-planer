import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ShiftService {

  constructor() { }

  createShift(data: any, shiftValue: any){
    data.weekday.shifts.push(shiftValue)
  }

  updateShift(toBeUpdated: any, newValue: any) {
    toBeUpdated.weekday.shifts[toBeUpdated.index] = newValue
  }

  deleteShift(weekday: any, index: number){
    weekday.shifts.splice(index, 1)
  }
}
