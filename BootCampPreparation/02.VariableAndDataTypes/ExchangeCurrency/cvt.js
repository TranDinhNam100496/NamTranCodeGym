function cvt() {
    var amount = document.forms['myForm']['Amt'].value;
    var from = document.forms['myForm']['from'].value;
    var to = document.forms['myForm']['to'].value;
    var tigia = 1;
    if (amount == '') {
        document.getElementById("kq").innerHTML = 0
    }
    else 
    {
        if (to = 'US')
       {
            if (from = 'VN') 
            {
                tigia = '20'
                count = tigia * amount
                document.getElementById("kq").innerHTML = count;
            }

        }
    }
    return false;

}



