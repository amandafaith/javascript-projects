// Declare and assign the variables below
let shuttleName = "Determination"
let shuttleSpeedMph = 175000
let distanceToMarsKm = 225000000
let distanceToMoonKm = 384400
const milesPerKm = 0.621
// Use console.log to print the 'typeof' each variable. Print one item per line.
console.log(typeof shuttleName)
console.log(typeof shuttleSpeedMph)
console.log(typeof distanceToMarsKm)
console.log(typeof distanceToMoonKm)
console.log(typeof milesPerKm)
// Calculate a space mission below

let milesToMars = distanceToMarsKm * milesPerKm

let hoursToReachMars = milesToMars / shuttleSpeedMph

let daysToMars = hoursToReachMars / 24



// Print the results of the space mission calculations below
console.log(shuttleName + " will take " + daysToMars + " days to reach Mars")

// Calculate a trip to the moon below

let milesToMoon = distanceToMoonKm * milesPerKm

let hoursToReachMoon = milesToMoon / shuttleSpeedMph

let daysToMoon = hoursToReachMoon / 24


// Print the results of the trip to the moon below

console.log(shuttleName + " will take " + daysToMoon + " days to reach the Moon")

console.log(shuttleName + " will take " + hoursToReachMoon + " hours to reach the Moon")