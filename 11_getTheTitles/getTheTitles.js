const getTheTitles = function(arr) {
    return arr.reduce((empty,item) => {
        let titles = item.title;
      empty.push(titles);
      return empty;
    },[]);
};

// Do not edit below this line
module.exports = getTheTitles;
