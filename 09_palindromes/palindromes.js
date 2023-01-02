const palindromes = function (word) {
    
    let words = word.toLowerCase();
    let originalArray = [];

    for (let x of words) {
        if (!(x.includes(" ") || x.includes("!") ||
         x.includes(".") || x.includes(","))) {
            originalArray.push(x);
        }
    };

    let copy = []; 
    // copying the original array into a new one
    for (let i=0;i<originalArray.length;i++) {
        copy.push(originalArray[i]);
    }

    let reversed = copy.reverse();
    let truthy = [];

    for (let i =0;i<originalArray.length;i++) {
       if (originalArray[i] === reversed[i]) {
        truthy.push('yes');
       } 
    }

    if (originalArray.length === truthy.length) {
        return true;
    } else {
        return false;
    }

}; 
// Do not edit below this line
module.exports = palindromes;

//loop through every letter, store in an array
//use reverse method
//convert back to string
//needs to ignore spaces
//compare word with new array


// let originalArray = ['r' , 'c', 'e'];
// let copy = []; //effected
// for (let i=0;i<originalArray.length;i++) {
//     copy.push(originalArray[i]);
// }

// let reversed = copy.reverse();  //contagious
// console.log(originalArray);
// console.log(reversed);