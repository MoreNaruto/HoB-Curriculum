var historicBlackFigures = [
	"Hallie Quinn Brown",
	"Imelme Umana",
	"Kim Royster",
	"Sarah Bailey"
]

console.log("\nCurrent Length of arrays: " + historicBlackFigures.length);

historicBlackFigures.push("Al Jarreau");

console.log("After push length array: " + historicBlackFigures.length);

historicBlackFigures[historicBlackFigures.length] = "Samuel Marlowe";

console.log("After adding to array: " + historicBlackFigures.length);
console.log("Last historic black figure in array: " + historicBlackFigures[historicBlackFigures.length - 1] + "\n");

console.log("All the historic figures in the array: \n");
for (i = 0; i < historicBlackFigures.length; i++){
	console.log(historicBlackFigures[i]);
}

console.log("\nAll the historic figures in alphabetical order: \n");
historicBlackFigures.sort();
for (i = 0; i < historicBlackFigures.length; i++){
	console.log(historicBlackFigures[i]);
}

console.log()