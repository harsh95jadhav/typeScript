var employee:any = {
    FirstName: "Harshvardhan",
    LastName: "Jadhav",
    Salary: 30000,
    role: "admin"

}
console.log("============================object=========================");

console.log(employee);

console.log("==============================object traversing using for...in loop====================");
for(var e in employee){
    console.log(employee[e]);
    
}
console.log("===============object De-structuring===================");
console.log("FirstName",employee.FirstName);
console.log("LastNmae",employee.LastName);
console.log("Salary",employee.Salary);
console.log("role",employee.role);






