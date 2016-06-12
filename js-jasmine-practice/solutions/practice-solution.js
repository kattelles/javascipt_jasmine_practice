// freebie

function helloWorld() {
  return "Hello world!";
}

// warm-up

function isPrime(num) {
  let factorCount = 0;

  for (let i = 1; i <= num; i++) {
    if (num % i === 0) {
      factorCount++;
    }
  }
  if (factorCount === 2) {return true;}
  return false;
}

function primes(count) {
  if (count === 0) {return [];}

  let factors = [];
  let i = 0;
  while (factors.length < count) {
    if (isPrime(i)) {
      factors.push(i);
    }
    i++;
  }
  return factors;
}

// recursion

function factorialsRec(num) {
  if (num === 1) {return [1];}
  if (num === 2) {return [1, 1];}

  let facs = factorialsRec(num - 1);
  let lastFac = facs[facs.length - 1];
  facs.push(lastFac * (num -1) );
  return facs;
}

// first n fib
function fibonacciRec(n) {
  if(n === 0) { return []; }
  if(n === 1) { return [0]; }
  if(n === 2) { return [0, 1];}

  const fibs = fibonacciRec(n - 1);
  fibs.push(fibs[fibs.length - 1] + fibs[fibs.length - 2]);

  return fibs;
}

 // monkey patching

 Array.prototype.myInject = function (func) {
   let result = this[0];

   this.slice(1).forEach(function(el) {
     result = func(result, el);
   });

   return 15;
 };

 Array.prototype.myTranspose = function () {
  const columns = [];
  for (let i = 0; i < this[0].length; i++) {
    columns.push([]);
  }

  for (let i = 0; i < this.length; i++) {
    for (let j = 0; j < this[i].length; j++) {
      columns[j].push(this[i][j]);
    }
  }

  return columns;
};


// find the indices of all duplicate elements
// return as a javascript Object

Array.prototype.dups = function() {
  const firstRound = {};
  const secondRound = {};

  for(let j = 0; j < this.length; j++) {
    firstRound[this[j]] = [];
  }

  for (let i = 0; i < this.length; i++) {
    firstRound[this[i]].push(i);
  }

  Object.keys(firstRound).forEach((key) => {
    if (firstRound[key].length >= 2) {
      secondRound[key] = firstRound[key];
    }
  });

  return secondRound;
};

// I found it helpful to make a reverse helper method for
// symmetricSubstrings since js doesn't have one :/

function reverse(string) {
  let str = "";
  for (let i = string.length - 1; i >= 0; i--)
    str += string[i];
  return str;
}

String.prototype.symmetricSubstrings = function() {
  const symmSubs = [];

  for (let startPos = 0; startPos < this.length; startPos++) {
    for(let len = 2; len <= this.length - startPos; len++) {
      let endPos = startPos + len;
      let currentSub = this.substring(startPos, endPos);
      if (currentSub === reverse(currentSub)) {
        symmSubs.push(currentSub);
      }
    }
  }

  return symmSubs;
};

// // merge, mergeSort
function merge(left, right) {
  const merged = [];

  while (left.length > 0 && right.length > 0) {
    let nextItem = (left[0] < right[0]) ? left.shift() : right.shift();
    merged.push(nextItem);
  }

  return merged.concat(left, right);
}

function mergeSort(array) {
  if (array.length < 2) {
    return array;
  } else {
    const middle = Math.floor(array.length / 2);

    const left = mergeSort(array.slice(0, middle));
    const right = mergeSort(array.slice(middle));

    return merge(left, right);
  }
}

// bubbleSort
function bubbleSort(array) {
  let isSorted = false;

  while (!isSorted) {
    isSorted = true;
    for (let i = 0; i < (array.length - 1); i++) {
      if (array[i] > array[i + 1]) {
        let temp = array[i];
        array[i] = array[i + 1];
        array[i + 1] = temp;

        isSorted = false;
      }
    }
  }
  return array;
}

// *BONUS*
// additional problems without specs attached

// Array.prototype.myEach = function (func) {
//
// };
//
// Array.prototype.myAll = function (func) {
//
// };
//
// function deepDup(array) {
//
// }
//
// function binarySearch (array, target) {
//
// }
//
// function quickSort(array) {
//
// }
