var emp = {
    name: "harsh",
    score: 250
};
for (var e in emp) {
    console.log(e);
    console.log(emp[e]);
}
var cources = ["Angular", "ReactJs", ".Net"];
cources.push("Java");
cources.push(10);
//console.log(cources);
for (var index = 0; index < cources.length; index++) {
    console.log(cources[index]);
}
