const foods = ["pizza", "burger", "fingerChips", "donuts", "springRoll"];
const numberArray = [12,324,213,4,2,3,45,4234];
const myArray = [11, 34, 20, 5, 53, 16];

// Progression 1:
function slice(start, end){
  let modifiedFood = []
  for(let i=start; i < end - 1; i++){
    modifiedFood.push(foods[i])
  }
  return modifiedFood;
}


// Progression 2:
function spliced(){
  foods.splice(2,0,"noodles","icecream");
  return foods;
}

// Progression 3:
function isEven(num) {
  if(num%2 == 0){
    return true;
  }else{
    return false
  }
}

function isPrime(num){
  for(let i =2, s = Math.sqrt(num); i <= s; i++)
    if(num%i == 0) return false;

  return num > 1
}

function checkNumber(numberArray, operation){
  modifiedArr = numberArray.filter(operation);
  return modifiedArr
}

// Progression 4:
function reject(numberArray) {
  return numberArray.filter(number => !isPrime(number));
}

function nonPrime(numberArray) {
  return reject(numberArray);
}
// Progression 5:
const isEvenUsingLambda = number => number%2==0;

// Progression 6:
function findSquareOfNumbers(myArray) {
  return myArray.map(number => number * number);
}


// Progression 7:

function multiply(myArray) {
  return myArray.reduce((mul, number) => mul * number, 1);
}

function sumOfSquares(myArray) {
  return myArray.reduce((sum, number) => sum + number * number, 0);
}

