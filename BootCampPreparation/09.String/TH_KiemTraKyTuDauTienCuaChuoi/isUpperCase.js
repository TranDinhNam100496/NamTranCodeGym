
var regexp;
function isFirstLetterUpperCase(str) {
    regexp = /^[A-Z]/;
    if (regexp.test(str)) {
        console.log("Chữ đầu tiên trong chuỗi là viết hoa");
    } else {
        console.log("Chữ đầu tiên trong chuỗi không phải viết hoa");
    }
}
    isFirstLetterUpperCase('Nguyen van Nam');
    isFirstLetterUpperCase('NGUYEN VAN NAM');
    isFirstLetterUpperCase('nguyen van Nam');