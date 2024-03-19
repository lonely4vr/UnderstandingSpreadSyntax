// Task 1: Function Argument Expansion
function sum(a, b, c) { // create a sum function with 3 arguments
    return a + b + c;
  }
  
  const numbers = [123, 456, 789]; // create an array with 3 elements
  const result = sum(...numbers); //  spread syntax to pass array elements as arguments
  console.log("Task 1 Result:", result); // print result to console
  
  // Task 2: Merging Arrays
  const array1 = [1, 2, 3];
  const array2 = [4, 5, 6]; //create arrays as asked
  const mergedArray = [...array1, ...array2]; //  spread syntax to merge arrays
  console.log("Task 2 Result:", mergedArray); // print result to console
  
  // Task 3: Array Element Insertion
  const colors = ['red', 'green', 'blue'];
  const extendedColors = ['yellow', ...colors, 'purple']; //  spread syntax to insert elements
  console.log("Task 3 Result:", extendedColors); // print result to console
  
  // Task 4: Cloning and Modifying an Object
  const person = { name: 'John', age: 30 };
  const newPerson = { ...person, name: 'Jane', gender: 'female' }; //  spread syntax to clone and modify
  console.log("Task 4 Original Person:", person); // print result to console
  console.log("Task 4 New Person:", newPerson); // print result to console
  
  // Task 5: Combining Objects
  const object1 = { a: 1, b: 2 }; //creating objects as asked
  const object2 = { b: 3, c: 4 };
  const combinedObject = { ...object1, ...object2 }; // spread syntax to combine objects
  console.log("Task 5 Result:", combinedObject); // print result to console
  