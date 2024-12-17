let userFlavors = window.prompt("Enter your flavors");
console.log(userFlavors);

// Split the string of flavors into an array of strings.
const stringArray = userFlavors.split(",");

// Convert the array of strings into an array.
const flavors = [];
for (let i = 0; i < stringArray.length; i++) {
  const flavor = stringArray[i];
  flavors.push(flavor);
}

console.log(flavors);

const wantFlavors = {};

for (let i = 0; i < stringArray.length; i++) {
  const flavor = stringArray[i];
  if (wantFlavors[flavor]) {
    wantFlavors[flavor]++;
  } else {
    wantFlavors[flavor] = 1;
  }
}

console.log(wantFlavors);
