var R = require("ramda");

//console.log(R.add(2,3));

//var curriedFn = R.replace("{name}",R.__,"Hello {name}, how are you ?");
//console.log(curriedFn("Rahul"));

//console.log(R.add(2,3));
//console.log(R.add(2)(3));

/*
var mappedFn = R.addIndex(R.map);
var myArray = [2,3,4,5]; 
console.log(myArray);
var myArray = mappedFn(function(val,index){
	return val * 3;
},myArray);

console.log(myArray);
*/

/*
var myArray = [2,3,4,5], index = 2;
console.log(myArray);
myArray = R.adjust(fn,index,myArray);
function fn(num){ // fn get applied to the element present index value 
	return 40 + num;
}
console.log(myArray);

myArray = [12,23,34,55], index = 3;
console.log(myArray);
var adjustFn = R.adjust(fn);
myArray = adjustFn(index,myArray);
console.log(myArray);
*/


var myArray = [12,34,45,56];
var allFn = R.all(fn)

function fn(num){
	return ((num % 2) === 0 || (num % 3) === 0);
}

console.log(allFn(myArray));


myArray = [paramFn(2),paramFn(4),paramFn(6)];
function paramFn(num){
	var fn = function(){
		return 10 + num;
	}
	return fn;
}

allFn = R.all(fnOne);

function fnOne(f){
	return (f() % 2) === 0;
}

console.log(allFn(myArray));
