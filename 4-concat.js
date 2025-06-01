const args = process.argv;

console.log(
  (args[2] === undefined ? 'undefined' : args[2]) + ' is ' + 
  (args[3] === undefined ? 'undefined' : args[3])
);