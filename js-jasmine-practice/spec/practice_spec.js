describe("Hello world", function() {
  it("says hello", function() {
    expect(helloWorld()).toEqual("Hello world!");
  });
});


describe("primes", function() {
  it("returns first five primes in order", function() {
    expect(primes(5)).toEqual([2, 3, 5, 7, 11]);
  });
  it("returns an empty array when asked for zero primes", function() {
    expect(primes(0)).toEqual([]);
  });
});

describe('factorialsRec', function() {
  it("returns the first factorial number", function() {
    expect(factorialsRec(1)).toEqual([1]);
  });
  it("returns the second factorial number", function() {
    expect(factorialsRec(2)).toEqual([1, 1]);
  });
  it("returns many factorial numbers", function() {
    expect(factorialsRec(6)).toEqual([1, 1, 2, 6, 24, 120]);
  });
});

describe('fibonacciRec', function() {
  it("returns [] if given 0", function() {
    expect(fibonacciRec(0)).toEqual([]);
  });
  it("returns [0] if given 1", function() {
    expect(fibonacciRec(1)).toEqual([0]);
  });
  it("returns [0, 1] if given 2", function() {
    expect(fibonacciRec(2)).toEqual([0, 1]);
  });
  it("returns many fibonnacci numbers", function() {
    expect(fibonacciRec(9)).toEqual([0, 1, 1, 2, 3, 5, 8, 13, 21]);
  });
});


describe('myInject', function() {
  let block = function(total, item) {
    return total + item;
  };

  it("injects using a function", function(){
    expect([1,2,3,4,5].myInject(block)).toEqual(15);
  });
});


describe('myTranspose', function() {
  it("transposes a larger matrix", function() {
    expect([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9] ].myTranspose()).toEqual([
    [1, 4, 7],
    [2, 5, 8],
    [3, 6, 9]]);
  });
  it('transposes a tiny matrix', function() {
    expect([
    [1, 2],
    [3, 4]].myTranspose()).toEqual([
    [1, 3],
    [2, 4]]);
  });
});

describe('dups', function() {
  it("returns {} when no dups are found", function() {
    expect([1, 2, 3, 4, 5].dups()).toEqual( {} );
  });

  it('solves a simple example', function(){
    expect([1, 3, 0, 1].dups()).toEqual({1: [0, 3]});
  });

  it('finds two dups', function(){
    expect([1, 3, 0, 1, 3].dups()).toEqual({1: [0, 3], 3: [1, 4]});
  });

  it('finds multi-dups', function(){
    expect([1, 3, 4, 3, 0, 3].dups()).toEqual({ 3: [1, 3, 5]});
  });
});

describe('symmetricSubstrings', function() {

  it("handles a simple example", function() {
    expect("aba".symmetricSubstrings()).toEqual(["aba"]);
  });

  it("handles two substrings", function() {
    expect("aba1cdc".symmetricSubstrings()).toEqual(["aba", "cdc"]);
  });

  it("handles nested substrings", function() {
    expect("xabax".symmetricSubstrings()).toEqual(["xabax", "aba"]);
  });
});

describe('mergeSort', function() {

  it("works with an empty array", function() {
    expect(mergeSort([])).toEqual([]);
  });

  it("works with an array of one item", function() {
    expect(mergeSort([1])).toEqual([1]);
  });

  it("sorts numbers", function() {
    expect(mergeSort([5, 4, 3, 2, 1])).toEqual([1,2,3,4,5]);
  });
});

describe('bubbleSort', function() {

  it("works with an empty array", function() {
    expect(bubbleSort([])).toEqual([]);
  });

  it("works with an array of one item", function() {
    expect(bubbleSort([1])).toEqual([1]);
  });

  it("sorts numbers", function() {
    expect(bubbleSort([5, 4, 3, 2, 1])).toEqual([1,2,3,4,5]);
  });
});
