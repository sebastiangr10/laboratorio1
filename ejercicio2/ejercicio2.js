let persona1
let persona2
let persona3
let totalinvertido
let inv_per1
let inv_per2
let inv_per3
persona1=Number(prompt("ingresa lo invertido por persona 1"));
persona2=Number(prompt("ingresa lo invertido por persona 2"));
persona3=Number(prompt("ingresa lo invertido por persona 3"));
totalinvertido=(persona1+persona2+persona3)
alert("el total del capital invertido es "+ totalinvertido)
inv_per1=parseInt(((persona1*100)/ totalinvertido))
alert("el porcentaje de capital invertido por la persona 1 es "+inv_per1+"%")
inv_per2=parseInt(((persona2*100)/ totalinvertido))
alert("el porcentaje de capital invertido por la persona 2 es "+inv_per2+"%")
inv_per3=parseInt(((persona3*100)/ totalinvertido))
alert("el porcentaje de capital invertido por la persona 3 es "+inv_per3+"%")