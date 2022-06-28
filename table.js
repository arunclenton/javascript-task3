function add() {
    let batqty = document.getElementById('qty').value;

    let batunit = document.getElementById('unit').innerText;

    let a = batqty * batunit;
    console.log(a);
    document.getElementById('prize').innerHTML = a;


    let ballqty = document.getElementById('qty1').value;

    let ball = document.getElementById('unit1').innerText;

    let b = ballqty * ball;
    console.log(b);
    document.getElementById('prize1').innerHTML = b;


    let padqty = document.getElementById('qty2').value;

    let pad = document.getElementById('unit2').innerText;

    let c = padqty * pad;
    console.log(c);
    document.getElementById('prize2').innerHTML = c;


    let helmetqty = document.getElementById('qty3').value;

    let helmet = document.getElementById('unit3').innerText;

    let d = helmetqty * helmet;
    console.log(d);
    document.getElementById('prize3').innerHTML = d;




    let stumpqty = document.getElementById('qty4').value;

    let stump = document.getElementById('unit4').innerText;

    let e = stumpqty * stump;
    console.log(e);
    document.getElementById('prize4').innerHTML = e;

    let result = a + b + c + d + e;
    document.getElementById('all').innerHTML = result;

    let x=(18/100)*result;
    document.getElementById('cole').innerHTML=x;

let y=result+x;
document.getElementById('cole1').innerHTML=y;

}