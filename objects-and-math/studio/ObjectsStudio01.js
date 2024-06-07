// Code your selectRandomEntry function here:

// Code your buildCrewArray function here:

let idNumbers = [291, 414, 503, 599, 796, 890];

function selectRandomEntry(arr) {
  let chosenEntry = Math.floor(Math.random() * arr.length);
  return arr[chosenEntry];
}

console.log(selectRandomEntry(idNumbers));

let chosenId = [];

for (let i = 0; i < 3; i++) {
  let randomNumber = selectRandomEntry(idNumbers);
  while (chosenId.includes(randomNumber)) {
    randomNumber = selectRandomEntry(idNumbers);
  }
  chosenId.push(randomNumber);
}

console.log(chosenId);

// Here are the candidates and the 'animals' array:
let candidateA = {
  name: "Gordon Shumway",
  species: "alf",
  mass: 90,
  o2Used: function (hrs) {
    return 0.035 * hrs;
  },
  astronautID: 414,
};
let candidateB = {
  name: "Lassie",
  species: "dog",
  mass: 19.1,
  o2Used: function (hrs) {
    return 0.03 * hrs;
  },
  astronautID: 503,
};
let candidateC = {
  name: "Jonsey",
  species: "cat",
  mass: 3.6,
  o2Used: function (hrs) {
    return 0.022 * hrs;
  },
  astronautID: 796,
};
let candidateD = {
  name: "Paddington",
  species: "bear",
  mass: 31.8,
  o2Used: function (hrs) {
    return 0.047 * hrs;
  },
  astronautID: 291,
};
let candidateE = {
  name: "Pete",
  species: "tortoise",
  mass: 417,
  o2Used: function (hrs) {
    return 0.01 * hrs;
  },
  astronautID: 599,
};
let candidateF = {
  name: "Hugs",
  species: "ball python",
  mass: 2.3,
  o2Used: function (hrs) {
    return 0.018 * hrs;
  },
  astronautID: 890,
};

let animals = [
  candidateA,
  candidateB,
  candidateC,
  candidateD,
  candidateE,
  candidateF,
];

let crew = [];

function findAstronauts(selectedIDs, candidates) {
  for (let i = 0; i < selectedIDs.length; i++) {
    for (let j = 0; j < candidates.length; j++) {
      if (selectedIDs[i] === candidates[j].astronautID) {
        crew.push(candidates[j].name);
      }
    }
  }
  return crew;
}

console.log(findAstronauts(chosenId, animals));

// Code your template literal and console.log statements:
