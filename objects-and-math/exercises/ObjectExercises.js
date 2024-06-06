let superChimpOne = {
   name: "Chad",
   species: "Chimpanzee",
   mass: 9,
   age: 6,
   astronautID: 3,

   move: function() {
      return Math.round(Math.random()*10)
   }
};

let salamander = {
   name: "Lacey",
   species: "Axolotl Salamander",
   mass: 0.1,
   age: 5,
   astronautID: 6,

   move: function() {
      return Math.round(Math.random()*10)
   }
};

let unicorn = {
   name: "Ulga",
   species: "Unicorn",
   mass: 7,
   age: 33,
   astronautID: 9,

   move: function() {
      return Math.round(Math.random()*10)
   }
};

let furryFerret = {
   name: "Frances",
   species: "Ferret",
   mass: 0.3,
   age: 12,
   astronautID: 4,

   move: function() {
      return Math.round(Math.random()*10)
   }
}

let badBaboon = {
   name: "Billy",
   species: "Baboon",
   mass: 17,
   age: 71,
   astronautID: 1,

   move: function() {
      return Math.round(Math.random()*10)
   }
}



let crew = [superChimpOne, salamander, unicorn, furryFerret, badBaboon];

function crewReports(animal) {
   return (`${animal.name} is a ${animal.species}. They are ${animal.age} years old and ${animal.mass} kilograms. Their ID is ${animal.astronautID}.`)
   
}

console.log(crewReports(badBaboon))

// My Solution
// function fitnessTest (arr) {
//    let totalSteps;
//    let turnsToCompleteRace;
//    let results = [];

//    for (let i = 0; i < arr.length; i++) {
//       totalSteps = 0;
//       turnsToCompleteRace = 0;
//       if (totalSteps < 20) {
//          totalSteps += arr[i].move();
//          turnsToCompleteRace++;
//       }
//       results.push(`${arr[i].name} took ${turnsToCompleteRace} turns to take 20 steps.`)
      
//    }   
//    return results;
// }

// console.log(fitnessTest(crew))

//LaunchCode's solution
//--------------------------------------------------------------------
function fitnessTest(candidates) {
   let results = []
   let numSteps;
   let turns;
   

   for (let i = 0; i < candidates.length; i++) {
      numSteps = 0;
      turns = 0;
      while(numSteps < 20) {
         numSteps += candidates[i].move();
         turns++;
      }
      results.push(`${candidates[i].name} took ${turns} turns to take 20 steps.`);
   }
   return results;
}

console.log(fitnessTest(crew))



// After you have created the other object literals, add the astronautID property to each one.

// Add a move method to each animal object

// Create an array to hold the animal objects.

// Print out the relevant information about each animal.

// Start an animal race!



