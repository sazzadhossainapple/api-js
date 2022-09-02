const defultParameter = () => 89;
// console.log(defultParameter());

const divideNumber = (number) => number / 17;
// console.log(divideNumber(100));

const addNumber = (a, b) => (a + b) / 2;
// console.log(addNumber(3, 7));

const isNumber = (num1, num2) => {
  const n1 = num1 + 7;
  const n2 = num2 + 5;
  const n = n1 + n2;
  if (n % 2 === 0) {
    return true;
  } else {
    return false;
  }
};

// console.log(isNumber(3, 5));

const numbers = [1, 2, 3, 4, 5];
const squreNumber = (numbers) => {
  let sum = 0;
  for (const number of numbers) {
    const n = number * number;
    sum = sum + n;
  }
  return sum;
};

const output = squreNumber(numbers);
// console.log(output);

const arr = [43, 45, 34, 3, 56, 78, 100];
const mapDivided = arr.map((number) => number / 7);
// console.log(mapDivided);
