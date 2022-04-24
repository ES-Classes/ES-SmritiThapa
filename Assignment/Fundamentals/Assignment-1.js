let prabinMass = 78;
let ramMass = 92;

let prabinHeight = 1.70;
let ramHeight = 1.92;

let prabinBMI = prabinMass / (prabinHeight * prabinHeight)
let ramBMI = ramMass / (ramMass * ramMass)

let prabinHightBMI = prabinBMI > ramBMI;

console.log(`The BMI of prabin is ${prabinBMI}.`);
console.log(`The BMI of ram is ${ramBMI}.`);

switch (prabinHightBMI) {
    case true:
        console.log("Prabin has higher BMI than ram.");
        break;
    case false:
        console.log("Ram has higher BMI than prabin.");
        break;
}