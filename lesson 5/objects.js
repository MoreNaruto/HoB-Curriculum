var person = {
	height: "6'2",
	weight: "240",
	firstName: "Thomas",
	lastName: "Morris",
	eyeColor: "Dark Brown",
	ethnicity: "African American",
	abilityToLaugh: true,
	full_name: 	function() {
		return this.firstName + " " + this.lastName;
	}
}

console.log("Bio about Thomas Morris: \n");
console.log("Height: " + person.height);
console.log("Weight: " + person.weight);
console.log("Eye color: " + person.eyeColor);
console.log("Ethnic Group: " + person.ethnicity);
console.log("Full Name: " + person.full_name());

