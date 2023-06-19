
//Zad 1.
/*
function avg(){
    let n1 = Number(prompt("Uneste prvi broj:"));
    let n2 = Number(prompt("Uneste drugi broj:"));
    let n3 = Number(prompt("Uneste treci broj:"));

    let sum=n1+n2+n3;
    console.log(sum);
    let avg=sum/3;
    console.log(avg);
}
avg();
*/

/*
//Zad 2.

let n1 = Number(prompt("Uneste prvi broj:"));
let n2 = Number(prompt("Uneste drugi broj:"));
let ch = prompt("Unesite znak operacije:");

function calc(b1,b2,ch)
{
    switch (ch){
        case "+":
            console.log(b1+b2);
            break;
        case "*":
            console.log(b1*b2);
            break;
        case "-":
            console.log(b1-b2);
            break;
        case "/":
            console.log(b1/b2);
            break;
        default:
            console.log("Krivi znak.");
    }
}

calc(n1,n2,ch);
*/

//Zad 3.
/*
let n=Number(prompt("Unesite broj:"));

function first(b)
{
    //ili b[0] jer se gleda kao string
    return parseInt(b/1000000000);
}

console.log("Prva znamenka deseteroznamenkastog broja je:"+first(n));
*/

//Zad 4.
/*
let n=prompt("Unesite mjesec:");

function check(m){
    switch(m){
        case "1.":
        case "2.":
        case "3.":
            alert("Zima!");
            break;
        case "4.":
        case "5.":
        case "6.":
            alert("Proljece!");
            break;
        case "7.":
        case "8.":
        case "9.":
            alert("Ljeto!");
            break;
        case "10.":
        case "11.":
        case "12.":
            alert("Jesen!");
            break;
        default:
            console.log("Krivi unos!");
    }
}

check(n);
*/

//Zad 5.
/*
let n=Number(prompt("Unesite broj:"));
let d=Number(prompt("Unesite znamnku:"));

function find(b,zn)
{
    let absB=Math.abs(b);
    let cnt=0;
    while(absB>0){
        let z=absB%10;
        if(z==zn){
            cnt++;
        }
        absB=Math.floor(absB/10);
    }

    console.log("U broju "+b+" imamo "+cnt+" pojavljivanja broja "+zn+".");
}

find(n,d);
*/
