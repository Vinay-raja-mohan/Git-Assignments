// This will now throw a ReferenceError
console.log(mysteryVariable); 
let mysteryVariable = 10;
console.log(mysteryVariable);

function revealMystery() {
  console.log("Inside revealMystery:", mysteryVariable); 
  let mysteryVariable = 20;
  console.log("Inside revealMystery (after declaration):", mysteryVariable);
}

revealMystery();
console.log("After revealMystery:", mysteryVariable);


//Hoisting is JavaScript's behavior of moving variable and function declarations to the top of their scope during compilation. Variables declared with **var** are hoisted and initialized as undefined, 
//so accessing them before declaration doesn’t cause an error, just undefined. In contrast, **let** and **const** are also hoisted but placed in a "temporal dead zone" — a period between entering the 
//scope and the actual declaration — during which accessing them results in a ReferenceError. Additionally, const must be initialized at the time of declaration, while let can be initialized later.


