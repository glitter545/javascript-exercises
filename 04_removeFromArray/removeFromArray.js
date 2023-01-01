const removeFromArray = function(arr,...moreArgs) {

     return arr.filter(item => !moreArgs.includes(item));

}



// Do not edit below this line
module.exports = removeFromArray;

