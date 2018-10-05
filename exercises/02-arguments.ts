/**
 * In javascript, we often have to blindly trust arguments to our function
 * are what we expect, or we need to create tests and validators to handle unexpected inputs
 *
 * Using typescript, we can concisely and clearly define what we expect our function arguments should be
 *
 * Get rid of the argument validation by assgining types to the arguments
 */

function add(a, b) {
  if (typeof a !== 'number' || typeof a !== 'number') {
    throw new Error('Add function received non-numeric arguments')
  }

  return a + b + ''
}

add(1, 2) // Should Pass
add('a', 'b') // should fail

/**
 * In TypeScript, argument are assumed mandary. But what happens
 * if you want an optional argument such as an options object?
 *
 * Mark the options parameter as optional but adding a question mark -- options?
 */

function initialize(options) {
  console.log('intialized!')
}

initialize()
