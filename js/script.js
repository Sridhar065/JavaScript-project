function total(){
    var sub1 = parseInt(document.getElementById('mat').value);
    var sub2 = parseInt(document.getElementById('phy').value);
    var sub3 = parseInt(document.getElementById('chm').value);
    var sub4 = parseInt(document.getElementById('pro').value);
    var sub5 = parseInt(document.getElementById('sci').value);
    var sub6 = parseInt(document.getElementById('com').value);

    if(sub1>100 || sub2>100 || sub3>100 || sub4>100 || sub5>100 || sub6>100){
        alert("Please Enter mark in range of 100")
    }
    else{
        var total = sub1 + sub2 + sub3  + sub4 + sub5 + sub6;
        document.getElementById('total').innerHTML = "Applied Mathematics-1 :" +sub2+ "<br> Applied Physics-1 :" + sub3 + "<br> Applied Chemistry-1 :" + sub4 + "<br> Manufacturing Process :"
        + sub5 + "<br> Science & Technology :" + sub6 + " <br> Communication Skills-1 :" + sub1 + "<br>________________________<br> Totak marks" + ' ' + total;
    }
}

function Average(){
    var sub1 = parseInt(document.getElementById('mat').value);
    var sub2 = parseInt(document.getElementById('phy').value);
    var sub3 = parseInt(document.getElementById('chm').value);
    var sub4 = parseInt(document.getElementById('pro').value);
    var sub5 = parseInt(document.getElementById('sci').value);
    var sub6 = parseInt(document.getElementById('com').value);

    if(sub1>100 || sub2>100 || sub3>100 || sub4>100 || sub5>100 || sub6>100){
        alert("Please Enter mark in range of 100")
    }
    else{
        var total = sub1 + sub2 + sub3  + sub4 + sub5 + sub6;
        var ave = total/6;
        document.getElementById("average").innerHTML = "your average mark is :" + ave; 
    }
}

function grade(){
    var sub1 = parseInt(document.getElementById('mat').value);
    var sub2 = parseInt(document.getElementById('phy').value);
    var sub3 = parseInt(document.getElementById('chm').value);
    var sub4 = parseInt(document.getElementById('pro').value);
    var sub5 = parseInt(document.getElementById('sci').value);
    var sub6 = parseInt(document.getElementById('com').value);

    if(sub1>100 || sub2>100 || sub3>100 || sub4>100 || sub5>100 || sub6>100){
        alert("Please Enter mark in range of 100");
    }
    else{
        var total = sub1 + sub2 + sub3  + sub4 + sub5 + sub6;
        var Avee = total/6;

        if(Avee>=80 && Avee<=100){
            document.getElementById('grade').innerHTML = "your grade is A";
        }
        else if(Avee>=75 && Avee<=80){
            document.getElementById('grade').innerHTML = "your grade is B";
        }
        else if(Avee>=70 && Avee<=75){
            document.getElementById('grade').innerHTML = "your grade is C";
        }
        else if(Avee>=65 && Avee<=70){
            document.getElementById('grade').innerHTML = "your grade is D";
        }
        else if(Avee>=60 && Avee<=65){
            document.getElementById('grade').innerHTML = "your grade is C=";
        }
        else if(Avee>=55 && Avee<=60){
            document.getElementById('grade').innerHTML = "your grade is d+";
        }
        else{
            document.getElementById('grade').innerHTML = "your grade is F"
        }
    }
}
