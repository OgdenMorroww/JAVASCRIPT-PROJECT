let counts = 0;
let countEl = document.getElementById("counter-el");

console.log(countEl);

let increment = () => {
  counts = counts += 1;
  countEl.innerText = counts;
};

let decrement = () => {
  counts = counts -= 1;
  countEl.innerText = counts;
};

let save = () => {
  console.log(counts);
};
