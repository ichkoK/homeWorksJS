// --- Task 1

const sumCounter = () => {
  let sum = 0;
  return (num) => {
    return sum += num;
  };
};

const counterSem = sumCounter();

// --- Task 2

const UpdatedArrCounter = () => {
  let arr = [];
  return (element) => {
    if (!element) {
      return arr = [];
    };
    arr.push(element);
    return arr;
  };
};
const getUpdatedArr = UpdatedArrCounter();

// --- Task 3

const getTimeClosure = () =>{
    let sec = 0;
    return () =>{
        if (sec == 0) {
        	sec = new Date().getTime();
        	return('Enabled');
        }
        let secondSec = new Date().getTime();
        finalSec = Math.abs(sec - secondSec)
        sec = secondSec;
        return Math.ceil(finalSec / 1000);
    } 
}

const getTime = getTimeClosure();