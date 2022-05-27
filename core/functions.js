// function countDown() {
//   console.log(5);
//   console.log(4);
//   console.log(3);
//   console.log(2);
//   console.log(1);
// }

// countDown();

const printNumbers = (numbers) => {
  console.log(`number: ${numbers}`);
};

printNumbers(42);
printNumbers(56);
printNumbers(35);

let lap1 = 34;
let lap2 = 33;
let lap3 = 36;

let myLogger = () => {
  let totalLaps = lap1 + lap2 + lap3;
  console.log(`Total Laps: ${totalLaps}`);
};

myLogger();

let lapsCompleted = 0;

let completeLaps = () => {
  let totals = (lapsCompleted += 1);
  console.log(`Total: ${totals}`);
};

completeLaps();
completeLaps();
completeLaps();
