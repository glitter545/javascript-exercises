const findTheOldest = function(arr) {
    return arr.reduce((personOne,personTwo) => {
        let ageOne = personOne.yearOfDeath - personOne.yearOfBirth;
        let ageTwo = personTwo.yearOfDeath - personTwo.yearOfBirth;
        const today = new Date();
        const year = today.getFullYear();

        if (isNaN(ageOne)) {
            ageOne = year - personOne.yearOfBirth;
          }
          
        if(ageTwo > ageOne) {
            return personTwo;
        }
        return personOne;
          
    });
    
}
// Do not edit below this line
module.exports = findTheOldest;

