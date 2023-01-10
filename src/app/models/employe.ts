export class Employe {
    userID: string
    firstName: string
    lastName: string
    code: string
    division: string

    constructor(employe: any, id?: string) {
        this.userID = id ? id : '';
        this.firstName = employe.firstName;
        this.lastName = employe.lastName;
        this.code = employe.code;
        this.division = employe.division;
    }
}
