var tab = ['Anna', 'Adrian', 'Janusz', 'Andrzej'];

/*for(var i = 0; i<=tab.length-1;i++){
    document.write(tab[i]+ ', ');
}*/

function p(indeks, wartosc){
    document.write(wartosc + 1 + 'element tablicy: ' + indeks +'<br>');
}
tab.forEach(p)
