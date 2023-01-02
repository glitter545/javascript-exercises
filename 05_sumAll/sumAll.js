const sumAll = function(start,end) {
    let array = [];

     if(arguments[0] > arguments[1]) {
		tempStart = arguments[1];
		end = arguments[0];
		start = tempStart;
    } else if(typeof(arguments[0]) !== 'number'  
    || typeof(arguments[1]) !== 'number') {
        return "ERROR";
    } else if (arguments[0] < 0 || arguments[1] < 0) {
        return "ERROR";
    }
    for (let i = start; i<=end;i++) {
        array.push(i);
    }
    
    return array.reduce((accumulator,currentValue) => accumulator + currentValue);
}; sumAll(1,4);

// Do not edit below this line
module.exports = sumAll;

//loop through the numbers
//store in an array
//add the numbers together







