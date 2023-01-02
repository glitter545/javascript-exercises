const add = function(num1,num2) {
	return num1+num2;
};

const subtract = function(num1,num2) {
	return num1-num2;
};
  // array as a parameter
const sum = function(arr) {

  return arr.reduce((accumulator,currentValue) => accumulator +
  currentValue , 0);

};

const multiply = function(arr) {

  return arr.reduce((accumulator,currentValue) => accumulator *
  currentValue );
};

const power = function(num1,num2) {
	return num1 ** num2;
};

const factorial = function(num) {

  // 0! = 1
  // 1! = 1
  // 2! = 2
  // 3! = 6
  // 4! = 24     num=factorial       factorial/num = numberBefore

  let arr = [];
  if (num === 0) {
    return 1;
  }
  for (let i = num; i >=1; i--) {
    arr.push(i);
  }


  return arr.reduce((accumulator,currentValue) => accumulator * currentValue);

	
};

//get factorials
//divide

//define factorials
//loop
//add
//0?


// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
