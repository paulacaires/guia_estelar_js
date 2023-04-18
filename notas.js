/*	Crie um algoritmo que transforme as notas do sistema
numérico para sistema de notas em caracteres tipo A B C

* de 90 para cima -   A
* entre 80 - 89   -   B
* entre 70 - 79   -   C
* entre 60 - 69   -   D
* menor que 60    -   F	*/

function notasChar (nota) {
	
	if (nota >= 90)
		return 'A';
	
	if (nota >= 80 && nota <= 89)
		return 'B';
		
	if (nota >= 70 && nota <= 79)
		return 'C';
		
	if (nota >= 60 && nota <= 69)
		return 'D';
		
	return 'F';	
}
 
let nota = 85;
console.log(notasChar(nota));
console.log(nota <= 80);
