/*
Use Function#bind to implement a logging
function that allows you to namespace messages.

Your implementation should take a namespace string,
and return a function that prints messages to
the console with the namespace prepended.

Make sure all arguments passed to the returned
logging function are printed.

 Print the output to the console directly
 */

module.exports = function(namespace) {
  var nameSpacedLogger = console.log.bind(console, namespace);

  return function loggerInner() {
    var args = [].slice.call(arguments);
    nameSpacedLogger(args.join(' '));
  };
};
