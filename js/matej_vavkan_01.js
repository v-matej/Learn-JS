//Zad 1.

function Automobil(marka,model,god_proizvodnje,brzina)
{
    this.marka = marka;
    this.model = model;
    this.god_proizvodnje = god_proizvodnje;
    this.brzina = brzina;
}

Automobil.prototype.dodajBrzinu=function (brzina){
    this.brzina += brzina;
}

Automobil.prototype.prikaziBrzinu=function (){
    console.log(this.brzina)
}


let mojAutomobil = new Automobil("Toyota", "Camry", 2015, 60);
mojAutomobil.dodajBrzinu(20);
mojAutomobil.prikaziBrzinu();



