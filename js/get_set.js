// function Auto(marka,model,god_proizvodnje,br_kilometara,br_vrata,snaga_motora,obujam_motora){
//     this.marka = marka;
//     this.model = model;
//     this.god_proizvodnje = god_proizvodnje;
//     this.br_kilometara = br_kilometara;
//     this.br_vrata = br_vrata;
//     this.snaga_motora = snaga_motora;
//     this.obujam_motora = obujam_motora;

//     this.kategorija='B'

//     let VIN=''
//     let avg_con=0

//     this.info = function(){
//         console.log(`
//         Marka auta: ${this.marka}\n
//         Model: ${this.model}\n
//         God proizvodnje: ${this.god_proizvodnje}\n
//         Br kilometara: ${this.br_kilometara}km\n`)
//     }

//         avg_consumption=function(km,litar){
//           this.avg_con=parseFloat((litar/km)*100).toFixed(2)
//         }

//         get_avg_con=function(){
//           console.log(`Prosjecna potrosnja ${this.marka} ${this.model} je: ${this.avg_con}l/100km`)
//         }

//     this.snaga =function(){
//         console.log(`
//         Snaga motora u KS: ${this.snaga_motora}KS\n
//         Snaga motora u KW: ${parseFloat(this.snaga_motora/1.36).toFixed(2)}KW\n`)
//     }
//     set_VIN=function(VIN){
//         this.VIN = VIN
//     }
//     get_VIN=function(){
//         console.log(`VIN: ${this.VIN}`)
//     }

// }

// const A = new Auto('Volkswagen','Golf 7',2015,90000,5,115,'1.6')

// A.info()
// A.snaga()
// A.set_VIN('VW123456789')
// A.get_VIN()
// console.log(A.VIN)

// const B = new Auto('Audi','A6',2012,120000,5,178,'2.0')

// B.info()
// B.snaga()
// B.set_VIN('AU987654321')
// B.get_VIN()


class Auto {
    constructor(marka, model, god_proizvodnje, br_kilometara, br_vrata, snaga_motora, obujam_motora) {
      this.marka = marka;
      this.model = model;
      this.god_proizvodnje = god_proizvodnje;
      this.br_kilometara = br_kilometara;
      this.br_vrata = br_vrata;
      this.snaga_motora = snaga_motora;
      this.obujam_motora = obujam_motora;
      this.kategorija = 'B';
    }
  
    #VIN = '';
    #avg_con=0;
  
    info() {
      console.log(`
Marka auta: ${this.marka}\n
Model: ${this.model}\n
God proizvodnje: ${this.god_proizvodnje}\n
Br kilometara: ${this.br_kilometara}km\n
          `);
    }
  
    snaga() {
      console.log(`
Snaga motora u KS: ${this.snaga_motora}KS\n
Snaga motora u KW: ${parseFloat(this.snaga_motora / 1.36).toFixed(2)}KW\n
          `);
    }
  
    avg_consumption(km,litar){
      this.#avg_con=parseFloat((litar/km)*100).toFixed(2)
    }

    get_avg_con=()=>{
      console.log(`Prosjecna potrosnja ${this.marka} ${this.model} je: ${this.#avg_con} l/100km`)
    }

    set VIN(V){
      this.#VIN = V
    }
  
    get VIN(){
      return this.#VIN
    }
  }
  

const A = new Auto('Volkswagen','Golf 7',2015,90000,5,115,'1.6')

A.info()
A.snaga()
A.VIN='VW123456789'
console.log(A.VIN)
A.avg_consumption(850,50)
A.get_avg_con()

const B = new Auto('Audi','A6',2012,120000,5,178,'2.0')

B.info()
B.snaga()
B.VIN='AU987654321'
console.log(B.VIN)
B.avg_consumption(1000,65)
B.get_avg_con()
