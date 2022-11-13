console.log("Maths:", 80);
console.log("Physics:", 90);
console.log("Chemistory:", 85);
var students = [80, 90, 85];
var Avgmarks = 0;
for (var i = 0; i < students.length; i++) {
    Avgmarks += students[i];
    var avg = (Avgmarks / students.length);
}
console.log("Average grade: " + avg);
if (avg < 70) {
    console.log("Grade : c");
}
else if (avg > 70) {
    console.log("Grade : B");
}
else if (avg > 90) {
    console.log("Grade : A");
}
//console.log("************************************************");
//function student(maths,physics,chemistory) {
//  console.log(student);
//}
//student(60,55,68)
var array = [68, 78, 88];
var avgArray = 0;
for (var i = 0; i < array.length; i++) {
    avgArray += array[i];
    var avg = (avgArray / array.length);
}
console.log("Average grade: " + avg);
if (avg < 70) {
    console.log("Grade c");
}
else if (avg > 70) {
    console.log("grade b");
}
else if (avg > 90) {
    console.log("Grade A");
}
