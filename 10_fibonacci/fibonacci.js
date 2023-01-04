const fibonacci = function(num) {
    num = +num - 1;
    let initial= [0 , 1];

    for (let i=1; i <=50; i++) {
    let result = initial[initial.length -1] + initial[initial.length-2];
    initial.push(result);
}; 

initial.shift();
     
    if (num < 0) {
        return "OOPS";
    } else {
        return initial[num];
    }
};

// Do not edit below this line
module.exports = fibonacci;


//1+1, numberBefore + nextNum, and so on

//create a fibonacci sequence until 100
// look at the numth array + 1, return 

//112358

//look at the last index, add with next number

//create an array with 100 numbers

// let nextNumber = [];
// for (let i =1;i <=100;i++) {
//     nextNumber.push(i);
// };

// 1 + 1 = 2
// 1 + 2 = 3
// 2 + 3 = 5
// 4 + 5 = 8









// initial, lastIndex + indexBefore,