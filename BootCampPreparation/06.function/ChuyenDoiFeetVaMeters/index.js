function feetToMeters (){
    var feet = document.getElementById("feet").value;
    var result = 0.305 * feet;
    document.getElementById("result1").innerHTML = result;
}
function meterToFeet (){
    var meter = document.getElementById("meter").value;
    var result = 3.279 * meter;
    document.getElementById("result2").innerHTML = result ;
}