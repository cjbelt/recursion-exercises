/***********************************************************************
Write a recursive function called `sort` that takes an array of integers, `nums`
and returns an array containing those integers sorted from least to greatest.

Your function should accept a default argument called `sorted` which
holds the currently sorted elements. Each recursive step should add
the smallest number in the `nums` array to the end of `sorted`.

There are many ways to accomplish this task but here's a simple algorithm:

1. Check the base case: If `nums` is empty, then return `sorted`
2. Otherwise, find the smallest element in `nums`
3. Add the smallest element to the end of `sorted`
4. Remove the smallest element from `nums`
5. Recursively call `sort()` with updated `sorted` and `nums`

Examples:

sort([4,1,6,3,1,7]); // [1, 1, 3, 4, 6, 7]
sort([0, 1, -3]); // [-3, 0, 1]
sort([]); // []
***********************************************************************/
function findSmallest(array) {
  if (array.length === 1) {
    return array[0];
  }

  if (array[0] <= array[1]) {
    return findSmallest([array[0], ...array.slice(2)]);
  } else {
    return findSmallest(array.slice(1));
  }
}

function sort(nums, sorted = []) {
  // your code here
  if (nums.length === 0) {
    return sorted;
  }

  let smallest = findSmallest(nums);
  let i = nums.indexOf(smallest);
  sorted.push(smallest);

  return sort([...nums.slice(0, i), ...nums.slice(i + 1)], sorted);
}
console.log(sort([4,1,6,3,1,7])); // [1, 1, 3, 4, 6, 7]

/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = sort;
} catch (e) {
  module.exports = null;
}
