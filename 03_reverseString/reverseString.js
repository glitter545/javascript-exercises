const reverseString = function(string) {
   
    let word = string;
    let reverse = "";

    for (let i = string.length -1; i >= 0; i--) {
        reverse += word[i]; 
    }

    return reverse;

}; reverseString("hello");

// Do not edit below this line
module.exports = reverseString;

//count the letters 
//loop til the last letter 
//put string in an array // string is already an array, by default
//countdown from last to first letter
//store in a new variable
//convert to string

