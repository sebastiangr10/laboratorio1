let calParcial;
let nota1;
let nota2;
let nota3;
let examen;
let trabajoFinal;
let calFinal;
nota1=Number (prompt("ingresa nota parcial 1"));
nota2=Number(prompt("ingresa nota parcial 2"));
nota3=Number(prompt("ingresa nota parcial 3"));
calParcial=parseInt((nota1+nota2+nota3)/3);

document.write("la calificacion parcial es " + calParcial);
examen=Number(prompt("ingresa nota examen"));
trabajoFinal=Number(prompt("ingresa nota trabajo final"));
calFinal=parseInt(((calParcial*0.55)+(examen*0.30)+(trabajoFinal*0.15)));
alert("su calificacion final es "+ calFinal);

document.write("su calificacion final es "+ calFinal)