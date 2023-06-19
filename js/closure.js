/*
//Zad 1.
let niz=[]
for (let i=0;i<10;i++){
    niz[i]=Math.round((Math.random()*200)+1)
}
console.log(niz)
niz.sort((a,b)=>a-b)
console.log(niz)
*/

/*
//Zad 2.
function input() {
    let sum_even = 0;
    let sum_odd = 0;
  
    const sum = () => {
      let s = 0;
      return (i) => {
        s += i;
        return s;
      };
    };
  
    const sumEven = sum();
    const sumOdd = sum();
  
    while (true) {
      let i = Number(prompt("Uneste broj:"));
      if (i === 0) {
        break;
      }
  
      if (i % 2 === 0) {
        sum_even = sumEven(i);
      } else {
        sum_odd = sumOdd(i);
      }
    }
  
    let out_e = `Ovo je suma parnih: ${sum_even}`;
    let out_o = `Ovo je suma neparnih: ${sum_odd}`;
    console.log(out_e);
    console.log(out_o);
  }
  
  input();
*/

/*
//Zad 3.
function z(){
    let out = `Programirati nije teško`
    function y(){
        console.log(out)
    }
    y()
}
z()
*/
/*
//Zad 4.
function sum(a){
    return (b, c) => {
    return a * b * c
    }
    }
    let x = sum(10); // ovdje definiramo "funkcijsku varijablu" x koja svojim pozivom zapravo poziva funkciju sum s parametrom 10
    console.log(x(3,12)); // sada kada pozivamo funkciju x zapravo pozivamo funfciju sum(10), a parametri (3,12) se prosljeđuju closure funkciji (b,c) koja racuna a*b*c,to jest radi se currying
    // ili
    console.log(sum(10)(3,12)); // ovo je drugi zapis bez "funkcijske varijable" x gdje direktno pozivamo funkciju sum(10), a s (3,12) pozivamo returnu clouser funkcije (b,c)
    
*/

//Zad 5.

function multiply_less_20(a){
    const multiply = (b) => {
        if(b<20&&b>0)
        {
            return multiply_less_20(a*b);
        }
        else if(b===undefined)
        {
            return a;
        }
        else
        {
            return multiply_less_20(a);
        }
    }
    return multiply
}

let r=multiply_less_20(25)(2)(1)();

console.log(r)
