import { TheLargestNumber } from './index.js';

const result = TheLargestNumber(4, '4.5', '5.6');
const areEqual1 = result === "The 3rd number is largest and equal: 5.6";
console.log(areEqual1);

const result2 = TheLargestNumber(7.7, '7.7', '7.6');
const areEqual2 = result2 === "The 1st and 2nd numbers are equal and amount is: 7.7";
console.log(areEqual2);
