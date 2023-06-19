//Zad 2.

function Vozilo(marka,god_proizvodnje){
    this.marka=marka;
    this.god_proizvodnje=god_proizvodnje;
}

Vozilo.prototype.vozi=function(){
    console.log(`Vozim ${this.marka} vozila godište ${this.god_proizvodnje}`)
}

function Automobil(marka,god_proizvodnje,boja,br_vrata)
{
    Vozilo.call(this,marka,god_proizvodnje)
    this.boja=boja;
    this.br_vrata=br_vrata;
}

Automobil.prototype=Object.create(Vozilo.prototype);
Automobil.prototype.constructor = Automobil

Automobil.prototype.parkiraj=function(){
    console.log(`Automobil ${this.marka}, ${this.boja} boje je parkiran!`) 
}

function Motocikl(marka,god_proizvodnje,tip){
    Vozilo.call(this,marka,god_proizvodnje)
    this.tip=tip;
}

Motocikl.prototype=Object.create(Vozilo.prototype);
Motocikl.prototype.constructor = Motocikl

Motocikl.prototype.voziBrzo=function(){
    console.log(`Vozim motocikl tipa ${this.tip} marke ${this.marka} i godišta ${this.god_proizvodnje} brzo!`)
}

let auto = new Automobil("BMW", 2022, "crna", 5);
auto.vozi(); // Vozim marku vozila BMW godište 2022
auto.parkiraj(); // Automobil BMW, crna boje je parkiran!
// Kreiranje instance objekta Motocikl
let moto = new Motocikl("Honda", 2020, "sportski");
moto.vozi(); // Vozim marku vozila Honda godište 2020
moto.voziBrzo(); // Vozim motocikl tipa sportski, marke Honda i godište 2020 brzo!  
