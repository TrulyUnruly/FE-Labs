/* 
   Copyright (c) 2023 Promineo Tech
   Author:  Promineo Tech Academic Team
   Subject:  JavaScript ECMAScript 6 and Intermediate JavaScript
   FE JS4 Lab
*/

/* ----------------------------------------------------- */
// Key Term List:
// let
// const
// var
// declare a variable
// ECMAScript6 (ES6)
// arrow function
// function
// parameter
// argument
// callback
// promise
// string concatentation
// template literal
//

/* ----------------------------------------------------- */
// Please do not alter the existing code unless instructed to do so.
// Read the comments and add your code where it is specified for each question.
/* ----------------------------------------------------- */

/*
 *                                     ~Lunch Date~
 *
 *  Your friend is coming over for lunch. Let's use code to decide what to eat!
 *
 */

/*---------------------------------- Let and Const -------------------------------------*/
console.log(`-------------------------- 
Question 1: Declaring Let and Const variables`)

/*
 * Step 1: Initialize two variables using 'const' and set the value of those variables to what you're having to eat and drink
 * Step 2: Initialize two more variables using 'let' and set one value to your name, and the other to your friends name.
 *
 * ↓ YOUR CODE HERE ↓ */
const food = "Chicken Salad"; // Using 'const' here to indicate that this value should not change
var drink = "Iced Tea"; // Using 'var' here to demonstrate the difference between 'var' and 'const'

let myName = "Julie"; // Using 'let' here to allow for potential reassignment later
let friendsName = "Christina";   

console.log(food); // Logging the food variable
console.log(drink); // Logging the drink variable
console.log(myName); // Logging the myName variable
console.log(friendsName); // Logging the friendsName variable
//Question: Name a reason why you would use const instead of let.
console.log("Answer: Using const for a value that is intended to remain constant throughout the program helps prevent accidental reassignment, ensuring that the value remains unchanged."); // Answer to the question about const vs let


/*---------------------------------- Template Literals -------------------------------------*/
console.log(`-------------------------- 
Question 2: Template Literals`)

/*
 * Step 1: Using template literals and the variables we just created,
 *         write a sentence describing what you and your friend are eating & drinking for lunch.
 *
 *
 * ↓ YOUR CODE HERE ↓ */
const lunchDate = `${myName} and ${friendsName} are having ${food} and ${drink} for lunch.`; // Using template literals to create a sentence with the variables
console.log(lunchDate); // Logging the lunchDate variable to see the result
//Question: How would the sentence you wrote look if you used string concatenation instead of template literals?
//          console.log() your answer to check
console.log("Answer: " + myName + " and " + friendsName + " are having " + food + " and " + drink + " for lunch."); // String concatenation version of the sentence
console.log(`-------------------------- 
Question 2a: Oh no`)

/* Oh no! You just remembered your friend is allergic to the drink we prepared!
 *
 * Step 1: In the section below, reassign your drink item to something else. console.log() your drink variable and run your code.
 * Step 2: Make a change to your code in Question 1 to fix the error. Run your code to make sure it's fixed.
 *
 * ↓ YOUR CODE HERE ↓ */
var drink = "Lemonade"; // Reassigning the drink variable to a new value
console.log(drink); // Logging the new drink variable
//Question: Read the error message - in your own words - what does it mean?
console.log("Answer: Uncaught SyntaxError: Identifier 'drink' has already been declared. This means that the variable 'drink' was previously declared with 'const' and cannot be reassigned with 'var'."); // Answer to the question about the error message   

/*---------------------------------- Arrow Functions -------------------------------------*/
console.log(`-------------------------- 
Question 3: Arrow Functions`)

/* You and your friend eat together so often that having a new variable for each food/drink
 *     item could get tiring.
 *
 * Let's use functions so we can easily describe what we're eating.
 *
 * Step 1: Using ES6 standards, write a fat arrow function using const called "lunchTime" that
 *         takes in two parameters: foodChoice, and drinkChoice.
 * Step 2: Have the function 'return' the same sentenced you used to describe eating lunch above
 *         but replace the food/drink variables with our newly created parameters.
 * Step 3: Copy the code below, ↓ paste it underneath our new function, and run the code.
 *         console.log(lunchTime('Pizza','Water'))
 * ↓ YOUR CODE HERE ↓ */
const lunchTime = (foodChoice, drinkChoice) => { // Defining the arrow function with parameters foodChoice and drinkChoice
    return `${myName} and ${friendsName} are having ${foodChoice} and ${drinkChoice} for lunch.`; // Returning a string that uses the parameters in place of the previous variables
};
console.log(lunchTime('Pizza','Water')); // Logging the result of calling the lunchTime function with 'Pizza' and 'Water' as arguments
//Question: What would your function look like if we were using the old way of creating a function?
console.log("Answer: function lunchTime(foodChoice, drinkChoice) {"); // Old way of creating a function 

/*---------------------------------- Callbacks -------------------------------------*/
console.log(`-------------------------- 
Question 4: Callbacks`)

/**
 * You and your friend ALWAYS eat lunch, but it might be a good idea to plan for the next date in advance.
 * Let's use functions and callbacks to describe what we're eating today, and what we want tomorrow.
 *
 * Step 1: Create a ES6 fat arrow function called 'foodForTodayAndTomorrow' that takes 3 parameters: tomorrowsFoodChoice, tomorrowsDrinkChoice, and callbackFunction.
 * Step 2: Have your function return a new string in this format: `${callbackFunction} Tomorrow we want ${tomorrowsFoodChoice} and ${tomorrowsDrinkChoice}.`
 * Step 3: console.log() your new function, foodForTodayAndTomorrow, and pass in lunchTime('newFoodItem', 'newDrinkItem') as the argument for the "callbackFunction" parameter.
 *
 * ↓ YOUR CODE HERE ↓ */
const foodForTodayAndTomorrow = (tomorrowsFoodChoice, tomorrowsDrinkChoice, callbackFunction) => {
    return `${callbackFunction} Tomorrow we want ${tomorrowsFoodChoice} and ${tomorrowsDrinkChoice}.`; // Returning a string that includes the callback function and the new food/drink choices
};
console.log(foodForTodayAndTomorrow('Sushi', 'Green Tea', lunchTime('Tacos', 'Lemonade'))); // Logging the result of calling foodForTodayAndTomorrow with new food/drink items and the lunchTime function as a callback
//Question: What is a callback function? Why would we use one? 
console.log("Answer: A callback function is a function that is passed as an argument to another function and is executed after the completion of that function. We use callbacks to allow for asynchronous operations and to handle results once they are available, enabling better control over the flow of our code."); // Answer to the question about callback functions
console.log(`-----------Finished------------`)
