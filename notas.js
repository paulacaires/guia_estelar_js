/*	Crie um algoritmo que transforme as notas do sistema
	numérico para sistema de notas em caracteres tipo A B C

	de 90 para cima -   A
	entre 80 - 89   -   B
	entre 70 - 79   -   C
	entre 60 - 69   -   D
	menor que 60    -   F	*/

function converte_nota (nota) {
	
	if (nota >= 90 && nota <= 100)
		return('A');
	
	if (nota >= 80 && nota <= 89)
		return('B');
		
	if (nota >= 70 && nota <= 79)
		return('C');
		
	if (nota >= 60 && nota <= 69)
		return('D');
		
	if (nota <= 60 && nota >= 0)
		return('F');
		
	else
		throw 'Nota inválida';	
}

// Array com as notas que serão testadas pela função.
const notas_teste = new Array(110, 90, 85, 50, 0, -1, 'A', 'Noventa', '70');

for (let nota of notas_teste) {	
	try {
		console.log(converte_nota(nota));
	} catch(e) {
		console.log(`A nota ${nota} é inválida`);
	}
}
