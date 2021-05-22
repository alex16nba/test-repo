//Global scope

function handleButtonClick(value) {
	const outputValue = document.getElementById('output').innerHTML;
	
	if(outputValue === '0') {
		document.getElementById('output').innerHTML = value;
	} else {
		document.getElementById('output').innerHTML += value;
	}
}

function clearCalculator() {
	document.getElementById('output').innerHTML = 0;
}


function testCalculate() {
	const outputValue = document.getElementById('output').innerHTML;
	const finalValue = eval(outputValue);
	document.getElementById('output').innerHTML = finalValue;
}

function calculatePercentage() {
	const outputValue = document.getElementById('output').innerHTML;
	const newValue = outputValue / 100;
	document.getElementById('output').innerHTML = newValue;
}

let fruits = ['banane', 'mere', 'pere', 'portocale', 'kiwi', 'capsuni'];
console.log('my site')

function myInitalCode() {
	for(let i = 0; i < 10; i = i + 1) {
		console.log('i', i);
	}	
}

function showFruits() {
	for(let i = 0; i < fruits.length; i = i + 1) {
		//console.log('i', i);
		console.log(fruits[i])
	}
}

function luca(name, name2) {
	console.log('My name is ' + name + ' ' + name2)
}

let price1 = 100;
let price2 = 30;
luca("Luca", "Alex")

//1)
function sumNUmbers(a, b) {
	return a + b;
}

//2)
//sumNUmbers(20, 20)
//sumNUmbers(price1, price2)   


//3)
let totalSum = sumNUmbers(price1, 20);
console.log('totalSum', totalSum)
//myInitalCode();
showFruits();
