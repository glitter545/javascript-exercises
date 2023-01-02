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


