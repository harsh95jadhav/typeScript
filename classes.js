var Flight = /** @class */ (function () {
    function Flight(flightNo, from, to) {
        this.flightNo = flightNo;
        this.from = from;
        this.to = to;
    }
    return Flight;
}());
var objFlight = new Flight(123, "Mumbai", "UK");
console.log(objFlight);
