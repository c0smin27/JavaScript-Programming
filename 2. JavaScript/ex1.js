// 1.Să se definească și să se populeze un șir de valori numerice.
var sirnumere = ['5', '2', '99', '4', '1'];
var sirnumereextra = ['11', '22', '33'];

textAfisat = ""; //variabila de tip text, folosita la output
var temp = "";

function f1() {
    displayer = document.getElementById("displayer");

    textAfisat += "<br> afisarea sirului de numere: ";
    for (i = 0; i < sirnumere.length; i++)
        textAfisat += sirnumere[i] + " ";

    // ordonare crescătoare a valorilor din sir
    sirnumere.sort();
    temp = "";
    textAfisat += "<br><br> sirul ordonat crescator: ";
    sirnumere.forEach(afisare);
    textAfisat += temp;

    // ordonare descrescătoare a valorilor din sir
    sirnumere.sort(function(a, b){return b-a});
    temp = "";
    textAfisat += "<br><br> sirul ordonat descrescator: ";
    sirnumere.forEach(afisare);
    textAfisat += temp;

    // eliminarea din șir a valorilor pare
    temp = "";
    for (i = sirnumere.length - 1; i >= 0; i--) {
        if (sirnumere[i] % 2 == 0)
        sirnumere.splice(i, 1);
    }
    textAfisat += "<br><br> elementele impare ale sirului: ";
    sirnumere.forEach(afisare);
    textAfisat += temp;

    // introducerea în șir a elementelor unui alt șir predefinit
    textAfisat += "<br><br> afisare implicita a doua siruri: " + sirnumere + "," + sirnumereextra;

    displayer.innerHTML = textAfisat;
}

function afisare(val, index) {
    //index se transmite ca parametru, poate fi folosit
    temp += val + " ";
}
