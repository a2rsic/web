function nekaFunkcija() {
    var lista = document.querySelectorAll("ul");
    lista[1].className = "first";
    return lista;
}
nekaFunkcija();



function drugaFunkcija() {
    var li = document.querySelectorAll("li");

    for (var i = 0; i < li.length; i++) {
        li[i].className = "second"
    }
    return li;
}
drugaFunkcija();


function trecaFunkcija() {

    var poslednjiLi = document.querySelectorAll("ul:nth-of-type(3) li");

    for (var i = 0; i < poslednjiLi.length; i++) {
        poslednjiLi[i].className = "third"

    }
    return poslednjiLi;
}

trecaFunkcija();