/**
 * The return types of function can and should also be defined.
 *
 * Below, there might be a misunderstanding that foods contains an array
 * when it really contains a string.
 *
 * Without defining the return type of the addFoods function, we get no feedback
 * about this problem.
 *
 * Add string as the addFoods function return type to get instant feedback about the problem
 */

function addFoods(a, b): string {
  return a + b
}

const foods = addFoods('beans', 'rice')

foods.forEach(console.log)
