
// funzione per swappare prima e ultima lettera
function swap(parola){

	let length = parola.length;

// se la parola è minore di due non swappa
	if (length < 2) return parola;

	let ultimo = parola.charAt(length-1)  
	let mezzo = parola.substring(1,length - 1)  
	let prima = parola.charAt(0)

	return ultimo + mezzo + prima 
}

/*primo passaggio */
function fun1(array){
	let new_array = []
	for (let i=0; i<array.length; i++) {
		new_array.push(swap(array[i]))
	}
	return new_array
}

/*secondo passaggio */
function fun2(array){
	let maxChar = longestWord(array);
	let new_array = pallini(array,maxChar)
	return new_array
}


/*terzo passaggio */
function fun3(array){
	let vocabolario = {
		"a" : "z",
		"b" : "y",
		"c" : "x",
		"d" : "w",
		"e" : "v",
		"f" : "u",
		"g" : "t",
		"h" : "s",
		"i" : "r",
		"j" : "q",
		"k" : "p",
		"l" : "o",
		"m" : "n",
		"n" : "m",
		"o" : "l",
		"p" : "k",
		"q" : "j",
		"r" : "i",
		"s" : "h",
		"t" : "g",
		"u" : "f",
		"v" : "e",
		"w" : "d",
		"x" : "c",
		"y" : "b",
		"z" : "a",
		"," : ",",
		"." : ".",
		"!" : "!",
		"?" : "?",
		"(" : "(",
		")" : ")",
		"/" : "/",
		"à" : "ò",
		"ò" : "ì",
		"ì" : "è",
		"è" : "ù",
		"ù" : "à",


		"A" : "Z",
		"B" : "Y",
		"C" : "X",
		"D" : "W",
		"E" : "V",
		"F" : "U",
		"G" : "T",
		"H" : "S",
		"I" : "R",
		"J" : "Q",
		"K" : "P",
		"L" : "O",
		"M" : "N",
		"N" : "M",
		"O" : "L",
		"P" : "K",
		"Q" : "J",
		"R" : "I",
		"S" : "K",
		"T" : "G",
		"U" : "F",
		"V" : "E",
		"W" : "D",
		"X" : "C",
		"Y" : "B",
		"Z" : "A",
		"•" : "•",
		" " : "/"
	}

		let new_array = []
		for (let i=0; i<array.length; i++) {
			let new_parola = ""

			for (let a=0; a<array[i].length; a++) {
				new_parola += vocabolario[array[i][a]]
			}
			new_array.push(new_parola)
		}
		return new_array
}

/*_________________________________________________________________*/
	/*DECODIFICA TERZO PASSAGGIO*/

function fun4(array){
	let vocabolario = {
		"z" : "a",
		"y" : "b",
		"x" : "c",
		"w" : "d",
		"v" : "e",
		"u" : "f",
		"t" : "g",
		"s" : "h",
		"r" : "i",
		"q" : "j",
		"p" : "k",
		"o" : "l",
		"n" : "m",
		"m" : "n",
		"l" : "o",
		"k" : "p",
		"j" : "q",
		"i" : "r",
		"h" : "s",
		"g" : "t",
		"f" : "u",
		"e" : "v",
		"d" : "w",
		"c" : "x",
		"b" : "y",
		"a" : "z",
		"," : ",",
		"." : ".",
		"!" : "!",
		"?" : "?",
		"(" : "(",
		")" : ")",
		"/" : "/",
		"ò" : "à",
		"ì" : "ò",
		"è" : "ì",
		"ù" : "è",
		"à" : "ù",


		"Z" : "A",
		"Y" : "B",
		"X" : "C",
		"W" : "D",
		"V" : "E",
		"U" : "F",
		"T" : "G",
		"S" : "H",
		"R" : "I",
		"Q" : "J",
		"P" : "K",
		"O" : "L",
		"N" : "M",
		"M" : "N",
		"L" : "O",
		"K" : "P",
		"J" : "Q",
		"I" : "R",
		"H" : "S",
		"G" : "T",
		"F" : "U",
		"E" : "V",
		"D" : "W",
		"C" : "X",
		"B" : "Y",
		"A" : "Z",
		"," : ",",
		"." : ".",
		"!" : "!",
		"?" : "?",
		"(" : "(",
		")" : ")",
		"/" : "/",
		"Ò" : "À",
		"Ì" : "Ò",
		"È" : "Ì",
		"Ù" : "È",
		"À" : "Ù",
	}

		let newstring = ""
		for (let i=0; i<array.length; i++) {
			for (let a=0; a<array[i].length; a++) {
				newstring += vocabolario[array[i][a]]
			}
			newstring += " "

		}
		return newstring
}

/*_________________________________________________________________*/

/*____________TOGLIERE PALLINI____________*/
function meno_pallini(array){
	let new_array = []
	for (let i=0; i<array.length; i++) {
		let parola = array[i].replace(/•/g,'')
		new_array.push(parola)
	}
	return new_array
}
/*____________METTERE PALLINI____________*/
function pallini(array,maxChar){
	let parola = "";
	let new_array = []
	for (let i=0; i<array.length; i++) {
		let parola = array[i].padEnd(maxChar, '•')
		new_array.push(parola) 
	}
	return new_array
}
 					
// da quante lettere è composta parola
function longestWord (arr) {
	let longest = 0
	arr.forEach(function(el){
		if (el.length > longest) {
			longest = el.length
		}
	})
	return longest
}