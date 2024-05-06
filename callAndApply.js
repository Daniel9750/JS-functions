/*
The methods 'call()' and 'apply()' do basically the same. The only difference is:

- The 'call()' method takes arguments separately.

- The 'apply()' method takes arguments as an array.

Here's an example using the 'max()' method:
*/

console.log(Math.max.apply(null, [1,2,3]));

console.log("\n");

console.log(Math.max.call(4, 5, 6));