var mediaSalarial = 0;
var mediaFilhos = 0;
var maiorSalario = 0;

    for (var i = 1; i <= 20; i++) {
        var salario = parseFloat(prompt("Digite o salario do habitante " + i));
        var numFilhos = parseInt(prompt("Digite o numero de filhos do habitante " + i));

        mediaSalarial = mediaSalarial + salario;
        mediaFilhos = mediaFilhos + numFilhos;

        if (salario > maiorSalario) {
            maiorSalario = salario;
        }
}

mediaSalarial = mediaSalarial / 20;
mediaFilhos = mediaFilhos / 20;

document.writeln("A Média salarial é: " + mediaSalario.toFixed(2) + " R$<br>");
document.writeln("Média do número de filhos por habitante são: " + mediaFilhos.toFixed(0) + "<br>");
document.writeln("Maior salário: " + maiorSalario.toFixed(2) + " R$");