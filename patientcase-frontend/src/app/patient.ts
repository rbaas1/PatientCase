import { Recipe } from "./recipe";

export class Patient {
    constructor(id: number, firstName: string, lastName: string) {}

    id: number;
    firstName: string;
    lastName: string;
    bsn: string;
    gender: string;
    birthDate: Date;
    homeAddress: string;
    homePostcode: string;
    phoneNumber: string;
    workAddress: string;
    workPostcode: string;

    recipes: Recipe[];

}