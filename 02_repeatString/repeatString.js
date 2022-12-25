const repeatString = function(string,num) {

    let word = "";
   //loop from 0 to num


   if(num <0){
    word = "ERROR";
    return word;
    }
   
   for (let i=0; i < num; i++) {
      word += string;
        
   }
   


return word;
}; 

// Do not edit below this line
module.exports = repeatString;


//1.store in a variable
//2.loop through num, add to variable

//make a repeat code block
//test the condition

