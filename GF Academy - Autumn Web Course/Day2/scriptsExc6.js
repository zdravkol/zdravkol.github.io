let numArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
console.log(numArray);
numArray.forEach(num => {
    if (num % 3 === 0) {
        console.log(num, num = "Fizz");
    }
    else if (num % 5 === 0) {
        console.log(num, num = "Buzz");
    }
});
numArray.push(16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30);
numArray.forEach(num => {
    if (num % 3 === 0 && num % 5 === 0) {
        console.log(num, num = "FizzBuzz")
    }
});