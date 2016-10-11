var R = require("ramda");

//console.log(R.add(2,3));

var curriedFn = R.replace("{name}",R.__,"Hello {name}, how are you ?");
console.log(curriedFn("Rahul"));

