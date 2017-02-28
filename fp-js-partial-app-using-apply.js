/*
Use partial application to create a function that
fixes the first argument to console.log.
i.e. Implement a logging function that prepends a
namespace string to its output.

Your implementation should take a namespace String
and return a function that prints messages to the
console with the namespace prepended.

You should use Function#apply to implement the partial application.

Make sure all arguments passed to the returned logging function are printed.
*/

function logger(namespace) {
  return function() {
    console.log.apply(null, [namespace].concat([].slice.call(arguments)));
  };
}

// /* test code */
// (() => {
//   const warn = logger('WARN:');
//   warn('something broke');
// })();

module.exports = logger;
