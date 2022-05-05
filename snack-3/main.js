const red = document.getElementById("red");
const green = document.getElementById("green");

red.style.color = "red";
green.style.color = "green";

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (let i = 0; i < nums.length; i++) {
  if (i % 2 === 0) {
    green.innerHTML += nums[i];
  } else {
    red.innerHTML += nums[i];
  }
}
