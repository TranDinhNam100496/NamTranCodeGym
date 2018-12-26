var arr = [3, 5, 1, 8, -3, 7, 8];
var minArray = minArray(arr);
 
function minArray(arr){
    var min = arr[0];
    for(var i = 0 ; i < arr.length; i++){
        if(arr[i] < min){
            min = arr[i];
        }
    }
     document.write(min);
  }
