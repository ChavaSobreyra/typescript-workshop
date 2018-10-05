/**
 * Using some tsconfig options, we are able to use es6 module imports
 * to import a library written using commonjs modules
 *
 * Even though this is a javascript libary, you get typescript benefits because
 * the open source community has creates thousands of type definition files
 * for the most popular javascript libraries
 * https://github.com/DefinitelyTyped/DefinitelyTyped/tree/master/types
 *
 * These type definitions are downloaded in the background and used by your IDE
 * to offer everything that TS offers, such as auto completion, catching error, and more
 */

import moment from 'moment'

const time = moment()

console.log('time', time)

// You can run this file using: ts-node exercises/09-using-javascript-libraries.ts
