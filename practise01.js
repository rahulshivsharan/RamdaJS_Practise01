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