/*	Crie um objeto que possuirá 2 propriedades, ambas do tipo array:
    * receitas: [] 
    * despesas: []
Agora, crie uma função que irá calcular o total de receitas e 
despesas e irá mostrar uma mensagem se a família está com 
saldo positivo ou negativo, seguido do valor do saldo.	*/

// Criar um objeto com duas propriedades do tipo array

let financeiro = {
	receitas: [5.00, 3.00, 8.00, 10.50],
	despesas: [8.00, 7.00, 4.00, 1.00]	
};

// Criar uma função que calculará o total de despesas e receitas.

function calculo_saldo(financeiro) {
	let total_receitas = 0;	
	
	for (let i = 0; i < financeiro.receitas.length; i++) {
		total_receitas += financeiro.receitas[i];
	}
	
	let total_despesas = 0;	
	for (let i = 0; i < financeiro.despesas.length; i++) {
		total_despesas += financeiro.despesas[i];
	}
	
	let saldo = total_receitas - total_despesas;
	(saldo < 0) ? console.log("O saldo da família está negativo: " + saldo) : console.log("O saldo da família está positivo " + saldo);
}

calculo_saldo(financeiro)
