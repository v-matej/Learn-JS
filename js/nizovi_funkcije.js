let zad=1

let nizA = [0,1,2,3,4,5];

let obj_proizvod=[
    {
        naziv_proizvoda:"cokolada",
        godina_proizvodnje:2023,
        cijena:20,
        kolicina:34,
        popust:0
    },
    {
        naziv_proizvoda:"kava",
        godina_proizvodnje:2022,
        cijena:75,
        kolicina:22,
        popust:5
    },{
        naziv_proizvoda:"kruh",
        godina_proizvodnje:2023,
        cijena:5,
        kolicina:14,
        popust:0
    },
    {
        naziv_proizvoda:"stolica",
        godina_proizvodnje:2020,
        cijena:100,
        kolicina:10,
        popust:15
    },
]

let obj_trgovine = [
    {
        naziv_trgovine:"Konzum",
        adresa:"",
        poštanski_broj:""
    },
    {
        naziv_trgovine:"Tommy",
        adresa:"",
        poštanski_broj:""
    },
    {
        naziv_trgovine:"Lidl",
        adresa:"",
        poštanski_broj:""
    },
    {
        naziv_trgovine:"Spar",
        adresa:"",
        poštanski_broj:""
    }
]

//Zad 1.
switch(zad){
    case 1:
    console.log(nizA);

    nizA.unshift(10); // dodaj na pocetak
    console.log(nizA);

    nizA.push(20); // dodaj na kraj
    console.log(nizA);


    nizA[nizA.length-2]=11; // dodaj na predzadnje mjesto
    console.log(nizA);

    nizA.splice(1,1); // brise drugi element u nizu
    console.log(nizA); 

    nizA.pop(); //brise zadnji element
    console.log(nizA);

    nizA.splice(1,0,100); // mijenja drugi element
    console.log(nizA);

    let sum=0;
    for(let i=0;i<nizA.length;i++){ //suma brojeva u nizu
        sum+=nizA[i];
    }
    console.log("Suma je:"+sum);

    for(const i of nizA){
        console.log(i);
    }
    break;

    case 2:
    //Zad 2.
    const skuplje_50 = obj_proizvod.filter(obj_proizvod=>{
        return obj_proizvod.cijena<50;
    }).map(obj_proizvod=>{
        return obj_proizvod.naziv_proizvoda;
    });
    console.log(skuplje_50);
    break;

    case 3:
    //Zad 3.
    const totalK =obj_proizvod.reduce((sum,obj)=>{
        return sum + obj.kolicina;
    },0);
    console.log("Ukupna kolicina je:"+totalK);
    break;

    case 4:
    //Zad 4.

    const naziv_trgovina = obj_trgovine.map(obj_trgovine=> obj_trgovine.naziv_trgovine)
    console.log(naziv_trgovina);

    case 5:
    //Zad 5.
    function check(n){
        console.log(n>=0?1:0);
        console.log((n%2)==0?"Paran":"Neparan");
        const cube = num => num ** 3;
        console.log(cube(n));
        console.log("Hello World!");
    }

    check(4)
    break;

}