//Zad 1.

function delayedGreeting(time, greeting){
    return new Promise(function () {
        setTimeout(function () { console.log(greeting);} , time);
    });
}

// let greeting = delayedGreeting(10000,"Hello delayed");

//Zad 2.

function checkWeather(city){
    return new Promise(function(resolve, reject){
        setTimeout(() => {
            const weather = {
                city:"Split",
                isSunny: false
            };
        
        if (weather.isSunny){
            resolve(`Vrijeme je suncano u ${city}`);
        }
        else{
            reject(`Vrijeme nije suncano u ${city}`);
        }
        }, 5000)
})
}

checkWeather('Split')
//.then((message) => console.log(message))
//.catch((error) => console.log(error))

console.log('Hello')

//Zad 3. Primjer

function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
    }

async function example() {
    console.log('Prije čekanja');
    await delay(2000); // čeka 2 sekunde
    console.log('Nakon čekanja');
}

//example();


//Zad 4. Primjer

function getData(callback) {
    setTimeout(function() {
    const data = { message: 'Ovo su podaci' };
    callback(data);
    }, 4000);
}

function processData(data) {
    console.log('Obrada podataka:', data.message);
}

//getData(processData);
//console.log('Nastavak izvršavanja');


// Zad 5.

function calculateAndPrintSum(a,b){
    return new Promise( resolve = () => {
        console.log(calculateSum(a,b));
    });
}

function delay(ms) { return new Promise( resolve => setTimeout(resolve, ms))}
async function calculateSum (a,b) {
    console.log("Cekanje izracuna.");
    await delay(2000);
    return a+b;
}

calculateAndPrintSum(10,4)
.then((message) => console.log(message))

//Zad 6.
function checkNumber(number){
    return new Promise((resolve,reject)=>{
        if((number%2)==0){
            resolve(`Broj ${number} je paran!`)
        }

        else{
            reject(`Broj ${number} je neparan!`)
        }
    })
}

checkNumber(10)
.then((message)=>{
    console.log(message);})
.catch((error)=>{
    console.error(error);})