interface IFlight {
    flightNo: number;
    from: string;
    to: string;
}

class Flight implements IFlight {
    flightNo: number;
    from: string;
    to: string;

    constructor(flightNo: number, from: string, to:string) {
        this.flightNo = flightNo;
        this.from = from;
        this.to = to ; 
    }
}


var objFlight = new Flight(123, "Mumbai", "UK");
class Student {
    private _userName: string;
 
    get name() : string {
     // format 
     return this._userName;
    }
    set name(name: string) {
     if(name == "codemind") {
         this._userName = name;
     }
     
    }
   display() {
     console.log(this._userName);
   }
 }
 
 var objstudent = new Student();
 objstudent.name = "Codemind";
 console.log(objstudent.name);
 