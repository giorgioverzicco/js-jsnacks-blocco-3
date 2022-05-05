const arr = [];

let sum = 0;
while (sum < 50) {
  const userInput = Number(prompt("Inserisci un numero:"));
  if (isNaN(userInput)) continue;
  sum += userInput;
  arr.push(userInput);
}
console.log(arr);
