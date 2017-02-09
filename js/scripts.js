// plik scripts.js

var	femaleNames = ['Asia', 'Kasia', 'Ola', 'Jola'],
	maleNames = ['Piotrek', 'Marek', 'Arek', 'Jarek'],
	allNames = femaleNames.concat(maleNames),
	newName = 'Marian';
if (allNames.indexOf(newName) === -1) {
		allNames.push(newName);
	} else {
		console.log('Imię już jest w tablicy.');
}
console.log(allNames);