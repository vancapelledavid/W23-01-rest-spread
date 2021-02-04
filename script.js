const cijfersOptellen = (...args) => args.reduce((acc, arg) => acc + arg);
console.log(cijfersOptellen(0, 1, 3, 5, 7, 8));

args = [1, 2, 3, 4, 5, 6, 7, 8, 9]
console.log(cijfersOptellen(...args));

