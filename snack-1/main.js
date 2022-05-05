const arr = [];

let sum = 0;
while (sum < 50) {
  const userInput = Number(prompt("Inserisci un numero:"));
  if (isNaN(userInput) || userInput >= 50) continue;
  sum += userInput;
  if (sum >= 50) break;
  arr.push(userInput);
}
console.log(arr);
