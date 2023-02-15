import * as moment from "moment"
import { Employe } from "./employe"

export class Shift {
    id: string
    date: number
    timeOfDay: string
    start: string
    end: string
    employe: Employe
    division: string

    constructor(shift: any, id?: string) {
        this.id = id ? id : '';
        this.date = typeof shift.date === 'string' ? moment(shift.date).unix() : shift.date
        this.timeOfDay = shift.timeOfDay
        this.start = shift.start
        this.end = shift.end
        this.employe = shift.employe
        this.division = shift.division
    }
}
