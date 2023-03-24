

import { Person } from "./bmiclass";
import { BMI } from "./bminterface";



import * as readline from 'readline';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Ask for the user's weight in kilograms
rl.question("Enter your weight in kilograms: ", (weight) => {

  // Ask for the user's height in meters
  rl.question("Enter your height in meters: ", (height) => {

    // Ask for the user's name
    rl.question("Enter your name: ", (name) => {

      // Calculate the user's body mass index
      const bmi = parseFloat(weight) / (parseFloat(height) ** 2);

      // Print the user's BMI and name
      console.log(`Hello ${name}, your BMI is ${bmi.toFixed(2)}`);

      // Close the readline interface
      rl.close();
    });
  });
});



  
  