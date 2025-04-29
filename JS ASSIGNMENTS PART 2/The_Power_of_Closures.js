//  1. What is a Closure?

// A closure is a function that "remembers" the variables from the place where it was created, even after that outer function has finished executing.
// In the setupCounter example:
// The inner increment and decrement functions still remember the count variable from setupCounter, even after it’s returned.
// Each time setupCounter() is called, it creates a new, private count, and the returned functions can access and modify it because of the closure.
// In short: Closures allow functions to carry their own “backpack” of variables wherever they go.

// 2. Function: createGreeting

function createGreeting(greeting) {
  return function(name) {
    return `${greeting}, ${name}!`;
  };
}

// Usage:
const sayHello = createGreeting("Hello");
console.log(sayHello("World")); // Output: Hello, World!

const sayHi = createGreeting("Hi");
console.log(sayHi("Alice")); // Output: Hi, Alice!



// 3. Function: createSecretHolder

function createSecretHolder(secret) {
  let _secret = secret;

  return {
    getSecret: function() {
      return _secret;
    },
    setSecret: function(newSecret) {
      _secret = newSecret;
    }
  };
}

// Usage:
const holder = createSecretHolder("myPassword123");

console.log(holder.getSecret()); // Output: myPassword123

holder.setSecret("newSecret!");
console.log(holder.getSecret()); // Output: newSecret!

// _secret is not accessible directly:
console.log(holder._secret); // Output: undefined



// 4. Encapsulation with Closures
// The secret value is not accessible from outside because it is stored in a private variable (_secret) inside the outer function’s scope. 
// Only the returned methods can access or modify it — making this a perfect example of using closures for data privacy.

