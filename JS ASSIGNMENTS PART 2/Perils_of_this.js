// 1. Why doesn’t the original user.greetDelayed() work as expected in terms of this binding?
// In the original code, setTimeout uses a regular function. Regular functions have their own this which,
// when not bound explicitly, defaults to the global object (window in browsers, undefined in strict mode). 
// Since the callback isn't called as a method of the user object, this.name becomes undefined.


// 2. How does storing this in a variable (self or that) solve the issue with traditional functions?
// By assigning this (which correctly refers to the user object in the outer method) to a variable like self, 
// we preserve the context. Then, inside the regular setTimeout callback, we use self.name, which still points 
//   to the correct object, avoiding the incorrect this.

const user = {
  name: "Alice",
  greetDelayed: function () {
    const self = this;
    setTimeout(function () {
      console.log(`Hello, ${self.name}!`);
    }, 1000);
  }
};
user.greetDelayed(); // Output: Hello, Alice!



// 3. Why does using an arrow function within setTimeout correctly refer to the user object? What is lexical this binding?
// Arrow functions do not have their own this; instead, they use the this value from their lexical scope — the surrounding 
// context where the arrow function is defined. Since setTimeout is inside the greetDelayed method, it inherits this from 
// that method, which points to the user object.
// This is called lexical this binding — this is resolved based on where the function is defined, not how it's called.

const user = {
  name: "Bob",
  greetDelayed: function () {
    setTimeout(() => {
      console.log(`Hello, ${this.name}!`);
    }, 1000);
  }
};
user.greetDelayed(); // Output: Hello, Bob!


// 4. Create an object that fails first, then works with an arrow function
const book = {
  title: "JavaScript Essentials",
  announce: function () {
    setTimeout(() => {
      console.log(`Now reading: ${this.title}`);
    }, 1000);
  }
};

book.announce(); // Output: Now reading: JavaScript Essentials


