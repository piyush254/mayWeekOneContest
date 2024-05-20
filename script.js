let count = document.querySelector(".count");
let Increment = document.querySelector("#Increment");
let Decrement = document.querySelector("#Decrement");
let error = document.querySelector(".error");
let Clear = document.querySelector("#Clear");

let countingNumber = 0;
count.innerHTML = `${countingNumber}`;

Increment.addEventListener("click", () => {
  countingNumber++;
  if (countingNumber == 1) {
    Clear.style.display = "inline-block";  
  }
  count.innerHTML = `${countingNumber}`;
  error.innerHTML = ``;
});

Decrement.addEventListener("click", () => {
  if (countingNumber > 0) {
    countingNumber--;
  }
  if (countingNumber == 0) {
    Clear.style.display = "none";
  } 
  else if (countingNumber == 0) {
    error.innerHTML = `Error : cannot go below 0`;
  }
  // console.log(countingNumber);
  count.innerHTML = `${countingNumber}`;
});

Clear.addEventListener("click", () => {
  countingNumber = 0;
  error.innerHTML = ``;
  Clear.style.display = "none";
  count.innerHTML = `${countingNumber}`;
});
