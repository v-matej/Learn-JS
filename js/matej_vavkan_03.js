//Zad 3.
class Zaposlenik{
    constructor(ime, prezime, email) {
        this.ime=ime;
        this.prezime=prezime;
        this.email=email;
    }
    #ocjena_sposobnosti
    ispisi(){
        console.log(`${this.ime} ${this.prezime}, ${this.email}`);
    }
    ocijeniSposobnost(value){
        this.#ocjena_sposobnosti=value;
    }
}

class Programer extends Zaposlenik{
    constructor(ime, prezime, email,prog_jezik){
        super(ime, prezime, email);
        this.prog_jezik=prog_jezik;
    }

    ispisi(){
        console.log(`${this.ime} ${this.prezime}, ${this.email}, programsi jezik: ${this.prog_jezik}`);
    }
}

class Dizajner extends Zaposlenik{
    constructor(ime, prezime, email,software){
        super(ime, prezime, email);
        this.software=software;
    }

    ispisi(){
        console.log(`${this.ime} ${this.prezime}, ${this.email}, radi u: ${this.software}`);
    }
}


// Kreiranje instance za klasu "Zaposlenik"
const zaposlenik1 = new Zaposlenik('Pero', 'Perić', 'pero.peric@example.com', 4);
zaposlenik1.ispisi(); // Ispisuje "Pero Perić, email: pero.peric@example.com"
zaposlenik1.ocijeniSposobnost(4)
// Kreiranje instance za klasu "Programer"
const programer1 = new Programer('Marko', 'Markić', 'marko.markic@example.com',
'JavaScript');
programer1.ispisi(); // Ispisuje "Marko Markić, email: marko.markic@example.com, programski jezik: JavaScript"
// Kreiranje instance za klasu "Dizajner"
const dizajner1 = new Dizajner('Ana', 'Anić', 'ana.anic@example.com', 'Adobe Photoshop');
dizajner1.ispisi(); // Ispisuje "Ana Anić, email: ana.anic@example.com, softver: Adobe Photoshop"