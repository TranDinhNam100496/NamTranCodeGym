
var number = parseInt(prompt("Nhap So Nguyen To"));

var isPrime = isPrime(number);
showPrime(isPrime);



function showPrime(isPrime) {
    document.write(isPrime)
}

function isPrime(number) {
    var result = true;
    if (number !== 2) {
        for (var i = 2; i < number - 1; i++) {
            if (number % i == 0) {
                result = false;
                break;
            }
        }
    }
    return result;
}

