function witaj(imie){
    document.write("Witaj" + imie);
}
witaj();
//var name= 'Maciej'
//witaj(name);
//var pole;
//var a = prompt("Podaj bok a","Podaj bok b")
//var b = prompt("Podaj bok b","Podaj bok a")
//function poleProstokata(){
    //poleProstokata= a*b;
    //return poleProstokata;

//poleProstokata();
//document.write('bhybh');
function poleObjetosc(szerokosc, dlugosc, wysokosc){
    var pole = szerokosc * dlugosc;
    var objetosc = pole * wysokosc;
    var wynik = [pole, objetosc]
    return wynik;
}
console.log(poleObjetosc(2, 3, 4));
var objetosc = poleObjetosc(2, 3, 4)[1];
var pole = poleObjetosc(2, 3, 4)[0];
console.log(pole + 'Pole:');
console.log('Objetosc' + objetosc)