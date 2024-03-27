function report(){
    var x,y,z,p,q,r;
    var a = document.getElementById("one").value;
    var b = document.getElementById("two").value;
    var c = document.getElementById("three").value;
    var d = document.getElementById("four").value;
    var e = document.getElementById("five").value;
    var f = document.getElementById("six").value;

    if(a!=" " || !a.match("^[0-9]$")){
        if (a >= 21 && a <= 45) {
            x = "Normal range";
        } else {
            x = "NOT Normal range";
        }
    }
    else{
        alert("Invalid input.");
    }
    if(b!=" " || b.match("^[0-9]$")){
        if (b >= 0.5 && b <= 1.4) {
            y = "Normal range";
        } else {
            y = "NOT Normal range";
        }
    }
    else{
        alert("Invalid input.");
    }
    if(c!=" " || c.match("^[0-9]$")){
        if (c >= 3.5 && c <= 7.2) {
            z = "Normal range";
        } else {
            z = "NOT Normal range";
        }
    }
    else{
        alert("Invalid input.");
    }
        if(d!=" " || d.match("^[0-9]$")){
        if (d >= 8.4 && d <= 21.04) {
            p = "Normal range";
        } else {
            p = "NOT Normal range";
        }
        }
        else{
            alert("Invalid input.");
        }
        if(e!=" " || e.match("^[0-9]$")){
        if (e >= 3.5 && e <= 5.3) {
            q = "Normal range";
        } else {
            q = "NOT Normal range";
        }
        }
        else{
            alert("Invalid input.");
        }
        if(f!=" " || f.match("^[0-9]$")){
            if (f >= 2.5 && f <= 3.8) {
                r = "Normal range";
            } else {
                r = "NOT Normal range";
            }
            }
            else{
                alert("Invalid input.");
            }
            document.getElementById("report").innerHTML = `White Blood Cells : Measured value is ${a}. ${x}<br>` +
            `Haemoglobin : Measured value is ${b}. ${y}<br>` +
            `Hematocrit: Measured value is ${c}. ${z}<br>` +
            `Mean corpuscular volume: Measured value is ${d}. ${p}<br>` +
            `Platelets : Measured value is ${e}. ${q}`;
}