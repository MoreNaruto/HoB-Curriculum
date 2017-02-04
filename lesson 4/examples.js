console.log('Hello World!');

console.log("2 + 2 = " + addNumbers(2, 2));

console.log("My name backwards is: " + backwardName("Thomas"));

isTall(5.0);

function addNumbers(first, second){
	var sum = first + second; //integer

	return sum; 
}

function backwardName(name){ 
  var reverseName = []; //create a new empty array 
  for (var i = name.length - 1, j = 0; i >= 0; i--, j++) {
    reverseName[j] = name[i]; //set space value to name's char
  }
  return reverseName.join(''); //join all characters into a string
}

function isTall(feet){
	if (feet > 5.5) { 
		console.log("I am tall");
	} else {
		console.log("I am short");
	}
}