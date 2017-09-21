//Metoda getElementbyID()
var elPierwszy = document.getElementById('pierwszy');
elPierwszy.className = 'zielony';
//Metoda getElementsByTagName()
var elNaglowek = document.getElementsByTagName('h1');
if(elNaglowek.length > 0){
   console.log(elNaglowek);
   console.log(elNaglowek.length);
    elNaglowek[0].className='czerwony';

}
//Metoda getELementbyClassName()

var elCzerwony = document.getElementsByClassName('czerwony');
if(elCzerwony.length > 0){
    console.log(elCzerwony.length);
    //wolniejszy sposob
    elCzerwony.item(elCzerwony.length-1).className = 'zielony';
    //szybszy sposob
    elCzerwony[elCzerwony.length-1].className = 'czerwony';
    //Metoda querySelector
    //zwraca pierwsze dopasowanie

    var elImie = document.querySelector('li');
    elImie.className = 'xD'
    //Metoda querySelectorAll()
    var elImiona = document.querySelectorAll('li.grey');
    console.log('elImiona')




    //Zmień wszystkie elementy w liscie z imionami na czerwone.Wykorzystaj metodę forEach


}
//metoda getElementsByName

var elAuta = document.getElementsByName('auto')
console.log(elAuta);
