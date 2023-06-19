let ZAD= Number(prompt("Unesite broj zadatka"));
switch (ZAD){
    case 1:
        let ocjena_arrow = (k1,k2,sem)=>{return k1*0.42+k2*0.42+0.16*sem}
        console.log(`Postotak ocjena je: ${ocjena_arrow(50,50,80)}`)
        function ocjena_currying(k1)
        {
            return (k2) => {
                return (sem)=>{
                    return k1*0.42+k2*0.42+0.16*sem
                }
            }
        }
        console.log(`Postotak ocjena je: ${ocjena_currying(50)(50)(80)}`)
        break;
        
    case 2:
        let rezultat_arrow = (sub,sum,total)=>{
            let r= ((sum/total)*100).toFixed(2);
            return console.log(`Iz kolegija ${sub} ostvarili ste rezultat ${r}`);}
            rezultat_arrow('PWKS',25,35);
        function rezultat_currying(sub){
            return (sum)=>{
                return (total)=>{
                let r= ((sum/total)*100).toFixed(2);
                return console.log(`Iz kolegija ${sub} ostvarili ste rezultat ${r}`);}
            }
        }
        rezultat_currying('PWKS')(25)(35);
        break;
    case 3:
        function multiply_odd_currying(x) {
            if (x === undefined) {
              return 1;
            }
            const lastDigit = x % 10;
            if (lastDigit % 2 != 0) {
              return multiply_odd_currying;
            }
            return function(y) {
              return multiply_odd_currying(y * x);
            }
            y()
          }
          
        let r=multiply_odd_currying(2)(5)(13)(10)(14)(177)(4)(0)()
        console.log(r)
        break;
    
    case 4:
        // class Kolegij
        // {
        //     constructor(godina,semestar,kol1,kol2,ocjena_rez,ime,prezime)
        //     {
        //     this.godina=godina;
        //     this.semestar=semestar;
        //     this.kol1=kol1;
        //     this.kol2=kol2;
        //     this.ocjena_rez=ocjena_rez;
        //     this.ime=ime;
        //     this.prezime=prezime;
        //     }
        //     ocjena=function(){
        //         this.ocjena_rez=this.kol1*0.5+this.kol2*0.5;
        //     }
        //     info=function(){
        //         console.log(`Student na predmetu PWKS, ${this.godina}. godina, ${this.semestar}. semestar, ostvario je ${this.ocjena_rez}%`)
        //     }
        // }
        
        // let k1=new Kolegij(1,2,70,65)
        // let k2=new Kolegij(2,3,90,75)
        // k1.ocjena()
        // k2.ocjena()
        // k1.info()
        // k2.info()
        break;
    
    case 5:
        // class Kolegij
        // {
        //     constructor(godina,semestar,kol1,kol2,ocjena_rez,ime,prezime)
        //     {
        //     this.godina=godina;
        //     this.semestar=semestar;
        //     this.kol1=kol1;
        //     this.kol2=kol2;
        //     this.ocjena_rez=ocjena_rez;
        //     this.ime=ime;
        //     this.prezime=prezime;
        //     }
            
        //     ocjena=function(){
        //         this.ocjena_rez=this.kol1*0.5+this.kol2*0.5;
        //     }
        //     info=function(){
        //         console.log(`Student na predmetu PWKS, ${this.godina}. godina, ${this.semestar}. semestar, ostvario je ${this.ocjena_rez}%`)
        //     }
        //     status=function(){
        //         console.log(`Student ${this.ime} ${this.prezime} ima ${this.ocjena_rez} %`)
        //     }
        // }
        
        // let K1=new Kolegij(1,2,70,65)
        // let K2=new Kolegij(2,3,90,75)
        // K1.ocjena()
        // K2.ocjena()
        // K1.info()
        // K2.info()
        // K2.ime='Mate'
        // K2.prezime='Matic'
        // K2.status()

        // break;

    case 6:
        class Kolegij
        {
            constructor(godina,semestar,kol1,kol2,ocjena_rez,ime,prezime)
            {
            this.godina=godina;
            this.semestar=semestar;
            this.kol1=kol1;
            this.kol2=kol2;
            this.ocjena_rez=ocjena_rez;
            this.ime=ime;
            this.prezime=prezime;
            }
            
            ocjena=function(){
                this.ocjena_rez=this.kol1*0.5+this.kol2*0.5;
            }
            info=function(){
                console.log(`Student na predmetu PWKS, ${this.godina}. godina, ${this.semestar}. semestar, ostvario je ${this.ocjena_rez}%`)
            }
            status=function(){
                if(this.ime == undefined || this.prezime==undefined)
                {
                    console.log(`Student nepostoji.`)
                }
                else{
                console.log(`Student ${this.ime} ${this.prezime} ima ${this.ocjena_rez} %`)}
            }
        }
        
        let K1=new Kolegij(1,2,70,65)
        let K2=new Kolegij(2,3,90,75)
        K1.ocjena()
        K2.ocjena()
        K1.info()
        K2.info()
        K2.ime='Mate'
        K2.prezime='Matic'
        K2.status()
        delete K2.ime
        delete K2.prezime
        K2.status()

        break;
    default:
        console.log("Krivi unos.")
        break;
}