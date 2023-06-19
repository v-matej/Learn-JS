// function Banka(stanje)
// {
//     this.stanje = stanje;
// }

// Banka.prototype.getBalance = function(){return this.stanje}
// Banka.prototype.deposit = function(deposit){this.stanje+=deposit}
// Banka.prototype.withDraw = function(draw){
// if (this.stanje >= draw){
//     this.stanje -= draw;
// }
// else
// {
//     console.log("Nema dovoljno sredstava");
// }
// }

// const b = new Banka(100);
// console.log(b.getBalance());
// b.deposit(500)
// console.log(b.getBalance());
// b.withDraw(600);
// console.log(b.getBalance());


// function Kamata(stanje, kamata){
//     Banka.call(this, stanje);
//     this.kamata = kamata;
// }

// Kamata.prototype = Object.create(Banka.prototype)
// Kamata.prototype.constructor = Banka

// Kamata.prototype.getKamata=function(){return this.stanje-=this.stanje*(this.kamata/100)}

// const k = new Kamata(100,5)
// k.getKamata()
// console.log(k.getBalance());


// function changeBackground()
// {   
//     document.body.style.backgroundColor = 'red';
//     const p = document.getElementsByTagName("p");
//     for (let i=0; i<p.length; i++){
//         p[i].style.fontSize ="16px";
//     }
// }


// function opseg(a,b,c){
//     return new Promise(function(resolve,reject){
//         if(isNaN(a)||isNaN(b)||isNaN(c))
//         {
//             reject("Greska")
//         }
//         else{
//             resolve(a+b+c)
//         }
//     })
// }

// opseg(1,2,3)
// .then(function(res)
// {console.log(res)})
// .catch(function(err)
// {console.log(err)})

///////////////////////////////

// function Vozilo(marka,model){
//     this.marka = marka
//     this.model = model
// }

// Vozilo.prototype.startEngine=function(){
//     return `Vozilo ${this.model} pokreće svoj motor!`
// }

// Vozilo.prototype.stopEngine=function(){
//     return `Vouilo ${this.model} gasi svoj motor!`
// }

// Vozilo.prototype.drive=function(){
//     return `Vozilo ${this.model} ${this.marka} vozi!`
// }

// function Automobil(marka,model,br_vrata)
// {
//     Vozilo.call(this,marka,model)
//     this.br_vrata=br_vrata
//     let lock_status=false
// }

// Automobil.prototype = Object.create(Vozilo.prototype)
// Automobil.prototype.constructor = Vozilo

// Automobil.prototype.numberOfDoors = function(){
//     return `Automobil ${this.marka} ${this.model} ima ${this.br_vrata} vrata!`;
// }

// Automobil.prototype.lock = function(){
//     if(this.lock_status=false)
//     {
//         this.lock_status=true
//         return `Automobil je zakljucan!`
//     }
//     else
//     {
//         return `Automobil je vec bio zakljucan!`
//     }
// }

// Automobil.prototype.unlock = function(){
//     if(this.lock_status=true)
//     {
//         this.lock_status=false
//         return `Automobil je utkljucan!`
//     }
//     else
//     {
//         return `Automobil je vec bio otkljucan!`
//     }
// }

// const a = new Automobil('VW','Golf',5)
// console.log(a.numberOfDoors())
// console.log(a.drive())
// console.log(a.stopEngine())
// console.log(a.unlock())
// console.log(a.unlock())
// console.log(a.lock())

////////////////////////////////////////

// class Animal
// {
//     constructor(name,age)
//     {
//         this.name = name;
//         this.age = age;
//     }

//     eat() {
//         return `Animale called ${this.name} is eating!`
//     } 

//     sleep() {
//         return `Animale called ${this.name} is sleeping!`
//     }
// }

// class Dog extends Animal
// {
//     constructor(name,age,breed)
//     {
//         super(name,age)
//         this.breed=breed
//     }

//     bark() {
//         return `Dog called ${this.name} is a ${this.breed} and is barking!`
//     }
// }

// const d = new Dog('Marly',4,'Bernese mountain dog')
// console.log(d.eat())
// console.log(d.sleep())
// console.log(d.bark())

///////////////////////////////////////////

// function changeFontColor(){
//     const b = document.body.style.color = "green";
// }

// function hide(){
//     const d = document.getElementById("teams")
//     if (d.style.display === "none")
//     {
//         d.style.display = "block"
//     }
//     else{
//         d.style.display = "none"
//     }
// }

/////////////////////////////////////////

// function calculateParamiter(a,b,c) {
//     return new Promise(function(resolve,reject){
//         if (isNaN(a) || isNaN(b) || isNaN(c))
//         reject("Greska")
//         else
//         resolve(a+b+c)
//     })
// }

// calculateParamiter(5,3,3)
// .then(function(res){
//     console.log(res)
// })
// .catch(function(err){
//     console.log(err)
// })

///////////////////////////////////////

// function calculateSum(a,b){
//     return a+b;
// }

// function disply(a,b,callback)
// {
//     console.log(callback(a,b));
// }

// disply(2,3,calculateSum);

////////////////////////////////////////

// async function fetchData(){
//     return new Promise(function(resolve,reject){
//         setTimeout(function(){resolve("This is data!")},5000)
//     })
// }

// function processData(data){console.log(data)}

// async function main(){
//     try{
//     const data = await fetchData();
//     processData(data);
//     }
//     catch(err){console.log(err)};
   
// }

// main()

/////////////////////////////////////////


// async function calculateSum(a,b){
//     return new Promise(function(resolve,reject){
//         setTimeout(function(){resolve(a+b)},5000)
//     })
// }


// async function calculateAndPrintSum(a,b)
// {
//     try{
//         let d = await calculateSum(a,b);
//         console.log(d);
//     }
//     catch(err){console.log(err)}
// }

// calculateAndPrintSum(2,3)

/////////////////////////////////////

// function checkNumber(number){
//     return new Promise(function(resolve,reject){
//         if ((number%2)!=0){
//             return reject(`${number} JE NEPARAN!`)
//         }
//         else{
//             return resolve(`${number} JE PARAN!`)
//         }
//     })
// }

// checkNumber(4)
// .then(function(msg){
//     console.log(msg)
// })
// .catch(function(err){
//     console.log(err)
// })

//////////////////////////////////////////

// function change(){
//     let ul = document.getElementById('teams')
//     let ol = document.createElement('ol')
//     ol.innerHTML = ul.innerHTML
//     ul.parentNode.replaceChild(ol,ul)
// }

////////////////////////////////////

function Continent(cont_name){
    this.cont_name = cont_name
}

Continent.prototype.getContinent = function(){
    return `${this.cont_name}`
}

Country.prototype = Object.create(Continent.prototype)
Country.prototype.constructor = Continent

function Country(cont_name,name){
    Continent.call(this,cont_name)
    this.name=name
}

Country.prototype.getCountry = function(){
    return `The name of the country is ${this.name}`
}

function Town(cont_name,country_name,town_name){
    Country.call(this,cont_name,country_name)
    this.town_name=town_name
}

Town.prototype = Object.create(Country.prototype)
Town.prototype.constructor = Country

Town.prototype.getTown = function(){
    return `The name of the town is ${this.town_name} and the country is ${this.name}`
}

const t = new Town('Europa','Hrvatska','Split')
console.log(t.getTown())
console.log(t.getCountry())
console.log(t.getContinent())