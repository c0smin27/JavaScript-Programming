// 2.Să se definească și să se populeze un șir de valori asociative denumit produse care face corespondența între denumiri (o serie de chei de tip șir de caractere) și prețuri (valori numerice).

class Produse {
    constructor(denumire, pret) {
        this.denumire = denumire;
        this.pret = pret;
    }
}

textAfisat = ""; //variabila de tip text, folosita la output

function f1() {
    displayer = document.getElementById("displayer");

    lista = [];
    lista.push(new Produse("Telefon", 1500));
    lista.push(new Produse("Laptop", 4000));
    lista.push(new Produse("Tableta", 1000));

    // afișarea cheilor și valorilor din șir prin tipărirea directă
    textAfisat += "<br>Afisare chei+valori tiparire directa:";
    for (i in lista) {
        textAfisat += "<br>";
        textAfisat += "denumire: " + lista[i].denumire + ", ";
        textAfisat += "pret: " + lista[i].pret;
    }

    // afișarea valorilor din șir prin iterarea cheilor
    textAfisat += "<br><br>Afisare valori prin iterarea cheilor:";
    for (i in lista) {
        textAfisat += "<br>";
        attr = Object.keys(lista[i]);
        for (j in attr) {
            textAfisat += attr[j] + ": ";
            textAfisat += lista[i][attr[j]] + ", ";
        }
    }

    // ordonare produse după preț și afișare rezultat
    textAfisat += "<br><br>Afisare produse ordonate dupa pret:";
    lista.sort(function(a, b) {
        return a.pret-b.pret;
    });
    for (i in lista) {
        textAfisat += "<br>";
        attr = Object.keys(lista[i]);
        for (j in attr) {
            textAfisat += attr[j] + ": ";
            textAfisat += lista[i][attr[j]] + ", ";
        }
    }

    displayer.innerHTML = textAfisat;
}
