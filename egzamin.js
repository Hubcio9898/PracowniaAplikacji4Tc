
var form = document.forms['formularz'];
var elDodawanie = document.getElementById('dodawanie');
var elOdejmowanie = document.getElementById('odejmowanie');
var elMnożenie = document.getElementById('mnożenie');
var elDzielenie = document.getElementById('dzielenie');
var elWynik = document.getElementById('wynik');

elDodawanie.onclick = function(){
    var pierwsza = parseFloat(form.pierwsza.value)
    var druga = parseFloat(form.druga.value)
    var wynik;
    if(druga == '' || pierwsza == '') wynik = "Uzupelnij oba pola glupi geju"
    else wynik = pierwsza + druga;
    elWynik.textContent= 'Wynik' + wynik;
}
elOdejmowanie.onclick = function(){
    var pierwsza = parseFloat(form.pierwsza.value)
    var druga = parseFloat(form.druga.value)
    var wynik;
    if(druga == '' || pierwsza == '') wynik = "Uzupelnij oba pola glupi geju"
    else wynik = pierwsza - druga;
    elWynik.textContent= 'Wynik' + wynik;
}
elMnożenie.onclick = function(){
    var pierwsza = parseFloat(form.pierwsza.value)
    var druga = parseFloat(form.druga.value)
    var wynik;
    if(druga == '' || pierwsza == '') wynik = "Uzupelnij oba pola glupi geju"
    else wynik = pierwsza * druga;
    elWynik.textContent= 'Wynik' + wynik;
}
elDzielenie.onclick = function(){
    var pierwsza=form.pierwsza.value
    var druga=form.druga.value
    var wynik;
    if(druga == '' || pierwsza == '') wynik = "Uzupelnij oba pola glupi geju";
    else if(druga == 0) wynik = 'Nie można dzielic przez 0';
    else wynik = pierwsza / druga;
    elWynik.textContent= 'Wynik' + wynik;
}
// potega
var form = document.forms('formularz2')
var elPotega = document.getElementById('potega');
var elWynik2 = document.getElementById('wynik2');
elPotega.onclick = function(){
    var wynik2;
    var liczba1 = formularz2.liczba1.value
    var liczba2 = formularz2.liczba2.value
    if(liczba1 =='' || liczba2== '') wynik2 == "Wpisz podstawe i wykladnik potegi";
    else if(wynik2!= Math.abs(liczba2))
}


