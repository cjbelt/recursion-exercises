/***********************************************************************
Write a recursive method permutations(array) that calculates all the
permutations of the given array. For an array of length n there are n! different
permutations. So for an array with three elements we will have 3 * 2 * 1 = 6
different permutations.

Examples:

permutations([1, 2]) // [[1, 2], [2, 1]]
permutations([1, 2, 3]) // [[1, 2, 3], [1, 3, 2],
                        // [2, 1, 3], [2, 3, 1],
                        // [3, 1, 2], [3, 2, 1]]
***********************************************************************/

// your code here
const permutations = (array, newArr = []) => {
  const permute = (array, otherArray = []) => {
    if (array.length === 0) {
      newArr.push(otherArray.slice());
      return;
    }

    for (let i = 0; i < array.length; i++) {
      otherArray.push(array[i]);
      let remained = array.filter(el => el !== array[i]);
      permute(remained, otherArray);
      otherArray.pop();
    }
  }

  permute(array);

  return newArr;
}
console.log(permutations([1, 2, 3])) // [[1, 2, 3], [1, 3, 2],
// [2, 1, 3], [2, 3, 1],
// [3, 1, 2], [3, 2, 1]]

/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = permutations;
} catch (e) {
  module.exports = null;
}