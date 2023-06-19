//Zad 1.
document.getElementById("prednosti").style.backgroundColor = "yellow";

//Zad 2.
const elementi=document.getElementsByClassName(".odjeljak");
for (let i=0; i<elementi.length; i++)
{
    elementi[i].style.fontSize="16px";
}

//Zad 3.
document.getElementById("prednosti").innerHTML= "Ova sekcija je promijenjena korištenjem DOM-a.";

//Zad 4.
const sections=document.getElementsByTagName("section");
for (let i=0; i<sections.length; i++){
    sections[i].style.backgroundColor="blue";
}

//Zad 5.
function promijeniBoju(){
    document.body.style.backgroundColor="gray";
}

//Zad 6.
function ubaciNoviParagraf(){
    document.getElementById("novi_paragraf").innerHTML= "Ovo je moj proizvoljni tekst.";
}

//Zad 7.
function promijeniSliku(){
    document.getElementById("slika").src="/images/slika2.jpg";
}

//Zad 8.
function dodajParagraf(){
    const paragraf=document.createElement("p");
    paragraf.innerHTML="Ovo je novi paragraf.";
    const paragrafi=document.getElementById("paragrafi")
    paragrafi.appendChild(paragraf);
}