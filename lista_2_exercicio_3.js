var salarioLarissa = 2000;
var salarioMaria = 5000;
var salarioJonas = 1000;
var salarioFrancisco = 3000;


var reajuste = 10;


var valorReajusteLarissa = salarioLarissa * (reajuste / 100);
var valorReajusteMaria = salarioMaria * (reajuste / 100);
var valorReajusteJonas = salarioJonas * (reajuste / 100);
var valorReajusteFrancisco = salarioFrancisco * (reajuste / 100);


var salarioReajustadoLarissa = salarioLarissa + valorReajusteLarissa;
var salarioReajustadoMaria = salarioMaria + valorReajusteMaria;
var salarioReajustadoJonas = salarioJonas + valorReajusteJonas;
var salarioReajustadoFrancisco = salarioFrancisco + valorReajusteFrancisco;


console.log("Larissa ganha R$" + salarioLarissa + ", com reajuste de " + reajuste + "% passa a ganhar R$" + salarioReajustadoLarissa);
console.log("Maria ganha R$" + salarioMaria + ", com reajuste de " + reajuste + "% passa a ganhar R$" + salarioReajustadoMaria);
console.log("Jonas ganha R$" + salarioJonas + ", com reajuste de " + reajuste + "% passa a ganhar R$" + salarioReajustadoJonas);
console.log("Francisco ganha R$" + salarioFrancisco + ", com reajuste de " + reajuste + "% passa a ganhar R$" + salarioReajustadoFrancisco);