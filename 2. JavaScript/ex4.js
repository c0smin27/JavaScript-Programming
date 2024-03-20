// 3.Să se implementeze o clasă JS numită Student 

class Student {
    constructor(nume, prenume, data_nasterii, foaie_matricola) {
        this.nume = nume;
        this.prenume = prenume;
        this.data_nasterii = data_nasterii;
        this.foaie_matricola = foaie_matricola; //(șir de valori numerice)
    }

    afiseazaVarsta = () => {
        const anCurent = new Date().getFullYear();
        const anNastere = new Date(this.data_nasterii).getFullYear();
        const varsta = anCurent - anNastere;
        return varsta;
    } //returnează vârsta calculată în funcție de data nașterii

    afiseazaNotele = () => {
        return this.foaie_matricola.join(', ');
    } //returnează un șir de caractere obținut prin alăturarea și separarea cu ‘,’ a tuturor notelor existente

    calculeazaMedia = () => {
        const sumaNotelor = this.foaie_matricola.reduce(function(total, nota) {
            return total + nota;
        }, 0);
        const media = sumaNotelor / this.foaie_matricola.length;
        return media.toFixed(2);
    } //returnează media aritmetică a notelor existente

    adaugaNota = (nota_noua) => {
        this.foaie_matricola.push(nota_noua);
    } //adaugă în lista de note noua valoare primită ca parametru
}

textAfisat = ""; //variabila de tip text, folosita la output

function f1() {
    displayer = document.getElementById("displayer");

    // Să se definească un șir de 3 studenți cu datele predefinite.
    var lista = [];
    lista.push(new Student("Melinte", "Cosmin", "2002/3/27", [10,9,10]));
    lista.push(new Student("Popescu", "Ioana", "2003/10/3", [7,8,8]));
    lista.push(new Student("Popescu", "Elena", "2002/12/15", [5,6,6]));

    // Să se ordoneze și să se afișeze studenții alfabetic, ținând cont de nume și prenume
    textAfisat += "<br>Afisare studenti alfabetic:<br>";
    lista.sort(function(a, b) {
        var sortat = a.nume.localeCompare(b.nume);
        if (sortat === 0) {
            return a.prenume.localeCompare(b.prenume);
        }
        return sortat;
    });
    for (var i = 0; i < lista.length; i++) {
        var student = lista[i];
        textAfisat += "Nume: " + student.nume + ", Prenume: " + student.prenume + ", Data nasterii: " + student.data_nasterii + ", Foaie Matricola: " + "[" + student.foaie_matricola.join(", ") + "]" + "<br>";
    }

    // Să se ordoneze și să se afișeze studenții după medii
    textAfisat += "<br>Afisare studenti dupa medii:<br>";
    lista.sort(function(a, b) {
        return b.calculeazaMedia() - a.calculeazaMedia();
    });
    for (var i = 0; i < lista.length; i++) {
        var student = lista[i];
        textAfisat += "Nume: " + student.nume + ", Prenume: " + student.prenume + ", Media: " + student.calculeazaMedia() + "<br>";
    }
   
    // Să se ordoneze și să se afișeze studenții după vârstă
    textAfisat += "<br>Afisare studenti dupa varsta:<br>";
    lista.sort(function(a, b) {
        return a.afiseazaVarsta() - b.afiseazaVarsta();
    });
    for (var i = 0; i < lista.length; i++) {
        var student = lista[i];
        textAfisat += "Nume: " + student.nume + ", Prenume: " + student.prenume + ", Varsta: " + student.afiseazaVarsta() + "<br>";
    }

    // 3’.Se vor adăuga noi valori pt. note și se va re-apela ordonarea după medii.
    textAfisat += "<br>Afisare studenti dupa medii2:<br>";
    lista[0].adaugaNota(10); //Ioana
    lista[1].adaugaNota(10); //Cosmin
    lista[2].adaugaNota(10); //Elena
    lista.sort(function(a, b) {
        return b.calculeazaMedia() - a.calculeazaMedia();
    });
    for (var i = 0; i < lista.length; i++) {
        var student = lista[i];
        textAfisat += "Nume: " + student.nume + ", Prenume: " + student.prenume + ", Foaie Matricola: " + "[" + student.foaie_matricola.join(", ") + "]" + ", Media: " + student.calculeazaMedia() + "<br>";
    }

    // 3’’.Se vor schimba numele anumitor studenți și se va re-apela ordonarea alfabetică.
    textAfisat += "<br>Afisare studenti nume schimbat:<br>";
    for (var i = 0; i < lista.length; i++) {
        if(lista[i].nume === "Popescu" && lista[i].prenume === "Elena") {
            lista[i].nume = "Dragomir"
        }
    }
    lista.sort(function(a, b) {
        var sortat = a.nume.localeCompare(b.nume);
        if (sortat === 0) {
            return a.prenume.localeCompare(b.prenume);
        }
        return sortat;
    });
    for (var i = 0; i < lista.length; i++) {
        var student = lista[i];
        textAfisat += "Nume: " + student.nume + ", Prenume: " + student.prenume + ", Foaie Matricola: " + "[" + student.foaie_matricola.join(", ") + "]" + "<br>";
    }
    
    // 3’’’.Se vor adăuga noi studenți în listă. Se vor șterge studenți din listă. Se vor afișa noile liste rezultate
    textAfisat += "<br>Afisare noua a studentilor:<br>";
    lista.push(new Student("Marin", "Preda", "1922/8/5", [9,9,10]));
    lista.push(new Student("Pop", "Lucian", "2000/5/19", [8,5,7]));
    for (var i = 0; i < lista.length; i++) {
        var student = lista[i];
        if (student.nume === "Popescu" && student.prenume === "Elena") {
            lista.splice(i, 1);
            break;
        }
        if (student.nume === "Popescu" && student.prenume === "Ioana") {
            lista.splice(i, 1);
            break;
        }
    }
    for (var i = 0; i < lista.length; i++) {
        textAfisat += "Nume: " + lista[i].nume + ", Prenume: " + lista[i].prenume + ", Foaie Matricola: " + "[" + lista[i].foaie_matricola.join(", ") + "]" + "<br>";
    }

    displayer.innerHTML = textAfisat;
}
