/***********************************************************************
Write a function called `subsets` that will return all subsets of an array.

Examples:

subsets([]) // [[]]
subsets([1]) // [[], [1]]
subsets([1, 2]) // [[], [1], [2], [1, 2]]
subsets([1, 2, 3]) // [[], [1], [2], [1, 2], [3], [1, 3], [2, 3], [1, 2, 3]]

Hint: For subsets([1, 2, 3]), there are two kinds of subsets:
  1. Those that do not contain 3 (all of these are subsets of [1, 2]).
  2. For every subset that does not contain 3, there is also a corresponding
     subset that is the same, except it also does contain 3.
***********************************************************************/

// your code here
function recursion(array = [[]], set, newSets = []) {
  if (array.length === 0) {
    return newSets;
  }

  newSets.push(array[0].concat(set));

  return recursion(array.slice(1), set, newSets);
}

function subsets(array, sets = [[]]) {
  if (array.length === 0) {
    return sets;
  }

  sets.push(...recursion(sets, [array[0]]))

  return subsets(array.slice(1), sets);
}

/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = subsets;
} catch (e) {
  module.exports = null;
}
