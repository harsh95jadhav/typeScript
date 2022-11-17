interface IExterior {
    color: string;
    numOfDoors: number
} 

interface IInterior {
    seats: number;
    auto: boolean;
}

interface ICar extends IExterior, IInterior {
    make: string;
    model: string;
    year: number;
}

var myCar: ICar = {
    make: "TATA",
    model: "ALtroz",
    year: 2022,
    color: "Gray",
    numOfDoors: 4,
    seats: 4,
    auto: false
}

//assignment on extend interface


interface IStudentInfo {
    name: string;
    rollNo: number;
    contactNo: number;
    emailId: any;
    marks: number;
    isApplicableRound2: boolean;
}

interface studentDetail  extends IStudentInfo {
    collegeName: string;
    area: string;
    univercity: string;

}
var addmission: studentDetail = {
    name: "Harshvardhan Jadhav",
    contactNo: 7972692199,
    emailId: "jadhavharsh99@gmail.com",
    rollNo:123,
    marks: 90,
    isApplicableRound2: true,
    collegeName: "S.B.PATIL COLLEGE OF ENGG.",
    area: "indapur",
    univercity: "pune"
}
console.log(addmission);

