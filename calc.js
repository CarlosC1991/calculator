const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});



reader.question("What would you like to calculate?", function(input){
	const tokens = input.split(' ');
	
	const mathSymbol = tokens[0];
	const num1 = Number(tokens[1]);
	const num2 = Number(tokens[2]);
     console.log(mathSymbol, num1, num2,"line 16")
     if (mathSymbol === "a") {
	console.log(num1 + num2, "line 18")}
	if (mathSymbol === "-") { console.log(num1 - num2,"line 19")}

	if (mathSymbol === "*") 
	console.log( "hello",num1 * num2, "line 22")
	if (mathSymbol === "/") { console.log(mathSymbol, num1 / num2, "line 23")}
	// This line closes the connection to the command line interface.
	if (mathSymbol === "&"){ console.log(Math.sqrt(num1))}

	reader.close()


});

