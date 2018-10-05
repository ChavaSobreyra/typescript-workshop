/**
 * In javascript, we often have to blindly trust arguments to our function
 * are what we expect, or we need to create tests and validators to handle unexpected inputs
 *
 * Using typescript, we can concisely and clearly define what we expect our function arguments should be
 *
 * Get rid of the argument validation by assgining types to the arguments
 */

const num = add(1, 2)
