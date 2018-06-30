mostrarHora();

var tempo1 = setInterval(mostrarHora, 1000);
var tempo2 = setInterval(novoBloco, 500);

var valor = 25.30;
var marketcap = 0;
var tokens = 100000000;
var block = 352798;

function mostrarHora() {
    let data = new Date();
    document.getElementById("data").innerHTML = "Dados "+data.toLocaleDateString()+" "+data.toLocaleTimeString();
}


function novoBloco() {
	block++;
	tokens+=12.5;
	marketcap = tokens*valor;
	
	document.getElementById("valor").innerHTML = "<strong>Valor/Token:</strong> $"+valor.toLocaleString('pt-br');
	document.getElementById("marketcap").innerHTML = "<strong>Market Cap:</strong> $"+marketcap.toLocaleString('pt-br');
	document.getElementById("tokens").innerHTML = "<strong>Tokens em circulação:</strong> "+tokens.toLocaleString('pt-br');
	document.getElementById("bloco").innerHTML = "<strong>Altura do bloco:</strong> "+block.toString();
}