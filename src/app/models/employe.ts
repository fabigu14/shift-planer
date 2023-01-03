import * as uuid from 'uuid';

export class Employe {
    userID: string
    firstName: string
    lastName: string
    code: string
    division: string

    constructor(employe: any) {
        this.userID = uuid.v4()
        this.firstName = employe.firstName;
        this.lastName = employe.lastName;
        this.code = employe.code;
        this.division = employe.division;
    }
}
