var R = require("ramda");

//console.log(R.add(2,3));

//var curriedFn = R.replace("{name}",R.__,"Hello {name}, how are you ?");
//console.log(curriedFn("Rahul"));

//console.log(R.add(2,3));
//console.log(R.add(2)(3));

var mappedFn = R.addIndex(R.map);
var myArray = [2,3,4,5]; 
console.log(myArray);
var myArray = mappedFn(function(val,index){
	return val * 3;
},myArray);

console.log(myArray);

