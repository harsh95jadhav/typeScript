//console.log("==================Given array==============");
var array = ["J&J", "pfizer", "Sputnik", "covaxin"];
console.log(array);
//array.push("Covaxin");
//console.log("================After Adding Covaxin======");
//console.log(array.push("Covaxin"));
console.log("===================traverse array================");
for (var a in array) {
    console.log(array[a]);
}
console.log("==============De-structuring of array===========");
console.log("1st vaccine:", array[0]);
console.log("2nd vaccine:", array[1]);
console.log("3rd vaccine:", array[2]);
console.log("4th vaccine:", array[3]);
