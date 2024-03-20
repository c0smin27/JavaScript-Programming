/* 5.Să se completeze clasa cu metode setter pt. atributele nume, prenume și data_nasterii. Se vor trata exceptiile date de:
- siruri de caractere cu lungimea mai mică decât 2 sau care conțin caractere numerice;
- date de naștere mai recente de 18 ani.
Excepțiile se tratează prin setarea unor valori implicite și afișarea unor mesaje în consola browser-ului. */

class Persoana {
    constructor(nume, prenume, data_nasterii) {
        this.nume = nume;
        this.prenume = prenume;
        this.data_nasterii = data_nasterii;
    }
    setNume(nume) {
        if (nume.length < 2) {
            throw "lungime nume < 2";
        }
        if (/\d/.test(nume)) {
            throw "nume contine cifre";
        } // /\d/.test verifica daca contine minim o cifra
        this.nume = nume;
    }
    setPrenume(prenume) {
        if (prenume.length <2) {
            throw "lungime prenume < 2";
        }
        if (/\d/.test(prenume)) {
            throw "prenume contine cifre";
        } // /\d/.test verifica daca contine minim o cifra
        this.prenume = prenume;
    }
    setDataNasterii(data_nasterii) {
        if (this.afiseazaVarsta() < 18) {
            throw "varsta < 18 ani";
        }
        this.data_nasterii = data_nasterii;
    }
    afiseazaVarsta() {
        const anCurent = new Date().getFullYear();
        const anNastere = new Date(this.data_nasterii).getFullYear();
        const varsta = anCurent - anNastere;
        return varsta;
    } //returnează vârsta calculată în funcție de data nașterii
}

textAfisat = ""; //variabila de tip text, folosita la output

function f1() {
    displayer = document.getElementById("displayer");

    var lista = [];
    lista.push(new Persoana("Melinte", "Cosmin", "2002/3/27"));
    lista.push(new Persoana("Popescu", "Ioana", "2020/10/3"));
    lista.push(new Persoana("Popescu2", "Elena", "2005/12/15"));
    lista.push(new Persoana("Popescu", "Elena2", "2005/12/15"));
    lista.push(new Persoana("E", "Elena", "2004/8/8"));
    lista.push(new Persoana("Elena", "E", "2004/8/8"));

    textAfisat += "<br>Afisare persoane:<br>";
    for (var i = 0; i < lista.length; i++) {
        var persoana = lista[i];
        textAfisat += "Nume: " + persoana.nume + ", Prenume: " + persoana.prenume + ", Data nasterii: " + persoana.data_nasterii + "<br>";
    }

    textAfisat += "<br>Afisare persoane dupa exceptii:<br>"
    for (var i = 0; i < lista.length; i++) {
        try {
            var persoana = lista[i];
            persoana.setNume(persoana.nume);
            persoana.setPrenume(persoana.prenume);
            persoana.setDataNasterii(persoana.data_nasterii);
            textAfisat += "Nume: " + persoana.nume + ", Prenume: " + persoana.prenume + ", Data nasterii: " + persoana.data_nasterii + "<br>";
        }
        catch(error){
            console.log(error);
        }
    }

    displayer.innerHTML = textAfisat;
}
