const originalArray = [5, 2, 9, 1, 5, 6];


const sortedArray = originalArray.sort(function(a, b) {
  return b - a;
});

console.log(sortedArray); 
