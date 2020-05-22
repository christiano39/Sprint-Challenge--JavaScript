// ==== Closures ==== 

/* Task 1: Study the code below and explain in your own words why nested function can access the variable internal. */


const external = "I'm outside the function";

function myFunction() {
  //console.log(external);
  const internal = "Hello! I'm inside myFunction!";

  function nestedFunction() {
    //console.log(internal);
  };
  nestedFunction();
}
myFunction();

// Explanation: nestedFunction can access the internal variable because of closure, which is when any nested functions have access to all variables within the scope of their parent function, grandparent function, ect...

/* Task 2: Counter */

/* Create a function called `sumation` that accepts a parameter and uses a counter to return the summation of that number. For example, `summation(4)` should return 10 because 1+2+3+4 is 10. */

function counter(){
  let count = 0;
  return function(){
    return count++;
  }
}

function sumation(num){
  const newCounter = counter();
  let sum = 0;
  for (let i = 0; i <= num; i++){
    sum += newCounter();
  }
  return sum;
}

//console.log(sumation(4));