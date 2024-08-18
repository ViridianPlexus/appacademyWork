// Generic function to get the bigger number
function getBiggerNum(num1, num2) {
  return num1 > num2 ? num1 : num2;
}

// Generic function to get the smaller number
function getSmallerNum(num1, num2) {
  return num1 < num2 ? num1 : num2;
}

// Specific operations using the generic functions
function multiplyBiggerNumByTwo(num1, num2) {
  return getBiggerNum(num1, num2) * 2;
}

function divideBiggerNumByThree(num1, num2) {
  return getBiggerNum(num1, num2) / 3;
}

function eatMostTacos(sum1, sum2) {
  return `I ate ${getBiggerNum(sum1, sum2)} tacos.`;
}

function adoptSmallerDog(weight1, weight2) {
  return `I adopted a dog that weighs ${getSmallerNum(weight1, weight2)} pounds.`;
}

/**************************************************************************/
/* DO NOT CHANGE THE CODE BELOW */
module.exports = {
  multiplyBiggerNumByTwo,
  divideBiggerNumByThree,
  eatMostTacos,
  adoptSmallerDog
};
