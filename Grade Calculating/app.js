function calculate() {
    var a = parseInt(document.getElementById('bookOne').value);
    var b = parseInt(document.getElementById('bookTwo').value);
    var c = parseInt(document.getElementById('bookThree').value);
    var d = parseInt(document.getElementById('bookFour').value);
    var e = parseInt(document.getElementById('bookFive').value);
    if (a > 100 || b > 100 || c > 100 || d > 100 || e > 100) {
        alert("Please enter correct value");
    }
    else {
        var obtain = a + b + c + d + e;
        document.getElementById('obtain').innerHTML = obtain;
        var per=obtain/500*100;
        document.getElementById("per").innerHTML=per;
    }
    if(a >40 && b >40 && c >40 && d >40 && e >40){
        document.getElementById("remarks").innerHTML="<span style='color:green'>Pass</span>";
    }
    else{
        document.getElementById("remarks").innerHTML="<span style='color:red'>Fail</span>";
    }
    if(obtain>=80) {
        document.getElementById("grade").textContent="A";
    }
    else if(obtain>=70) {
        document.getElementById("grade").textContent="B";
    }
    else if(obtain>=60) {
        document.getElementById("grade").textContent="C";
    }
    else if(obtain>=50) {
        document.getElementById("grade").textContent="D";
    }
    else if(obtain>=40) {
        document.getElementById("grade").textContent="E";
    }
    else{
        document.getElementById("grade").textContent="F";
    }
    return false;
    }