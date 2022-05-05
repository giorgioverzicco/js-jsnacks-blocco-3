const num = Number(prompt("Inserisci un numero:"));
const arr = [];
for (let i = 0; i < num; i++) {
  arr[i] = [];

  for (let j = 0; j < 10; j++) {
    arr[i][j] = Math.floor(Math.random() * 100) + 1;
  }

  console.log(`Array n${i + 1}: [${arr[i]}]`);
}
