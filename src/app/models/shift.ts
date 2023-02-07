import { Employe } from "./employe"

export class Shift {
    id: string
    date: string
    timeOfDay: string
    start: string
    end: string
    employe: Employe
    division: string

    constructor(shift: any, id?: string) {
        this.id = id ? id : '';
        this.date = shift.date
        this.timeOfDay = shift.timeOfDay
        this.start = shift.start
        this.end = shift.end
        this.employe = shift.employe
        this.division = shift.division
    }
}
