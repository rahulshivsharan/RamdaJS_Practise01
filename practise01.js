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


/*
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
*/

///////// Example One ////////////////////////
var isTwenty = R.propEq("age",20),
	hasMerce = R.propEq("car","Mercedes");

var isTwentyOwnsMerc = R.allPass([isTwenty,hasMerce]);
console.log(isTwentyOwnsMerc({ "age" : 20, "car" : "Mercedes"}));
console.log(isTwentyOwnsMerc({ "age" : 34, "car" : "Wagon R"}));

///////// Example Two ////////////////////////
var isEven = function(num){	
	return (num % 2) === 0;	
}

var isDivisibleByThree = function(num){	
	return (num % 3) === 0;	
}

var isEvenDivByThree = R.allPass([isEven,isDivisibleByThree]);

console.log(isEvenDivByThree(24));
console.log(isEvenDivByThree(14));

///////// Example Three ////////////////////////
console.log(R.all(isEvenDivByThree)([24,12,36]));
console.log(R.all(isEvenDivByThree)([24,15,39]));

