import { BodySize } from "./bodysize.model";


export class UserModel {
    firstname: string;
    lastname: string;
    hospitalId: string;
    age: number;
    gender: string;
    bodysize: BodySize;
    bloodGlucose: number;
    insulinInfusion: number;
    insulinConcentration: number;

    /**
     *
     */
    constructor(
        firstName: string, 
        lastname: string, 
        hospitalId: string, 
        age: number, 
        gender: string, 
        bodySize: BodySize, 
        bloodglucose: number,
        insulinInfusion: number,
        insulinConcentration: number
        ) {
        this.firstname = firstName;
        this.lastname = lastname;
        this.hospitalId = hospitalId;
        this.age = age;
        this.gender = gender;
        this.bodysize = bodySize;
        this.bloodGlucose = bloodglucose;
        this.insulinInfusion = insulinInfusion;
        this.insulinConcentration = insulinConcentration;
    }
}