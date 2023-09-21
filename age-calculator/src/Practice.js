import React from 'react'

function Practice() {

    //const findOdd = (xs) => xs.reduce((a, b) => a ^ b);
    function findOdd(arr) {
        var result, num = 0;
      
        arr = arr.sort();
        for (var i = 0; i < arr.length; i++) {
          if (arr[i] === arr[i+1]) {
            num++;
          } else {
            num++;
            if (num % 2 != 0) {
              result = arr[i];
              break;
            }
          }
        }
        return result;
      }

    const array1 = [7];
const array2 = [0];
const array3 = [1, 1, 2];
const array4 = [0, 1, 0, 1, 0];
const array5 = [1, 2, 2, 3, 3, 3, 4, 3, 3, 3, 2, 2, 1];

console.log(findOdd(array1)); // Output: 7
console.log(findOdd(array2)); // Output: 0
console.log(findOdd(array3)); // Output: 2
console.log(findOdd(array4)); // Output: 0
console.log(findOdd(array5)); // Output: 4

  return (
    <div></div>
  )
}

export default Practice