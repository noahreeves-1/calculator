// ADDITION (+) function
const add = function (a, b) {
    const result = a + b;
    return result;
}
console.log(add(1, 2)) // should return 3

// SUBTRACTION (-) function
const subtract = function (a, b) {
    const result = a - b;
    return result;
}
console.log(subtract(10, 3)) // should return 7

// MULTIPLICATION (*) function
const multiply = function (a, b) {
    const result = a * b;
    return result;
}
console.log(multiply(4, 5)) // should return 20

// DIVISION function (/)
const divide = function (a, b) {
    const result = a / b;
    return result;
}
console.log(divide(100, 2)) // should return 50

// EQUALS / OPERATE (=) function
const equals = function (operator, a, b) {
    switch (operator) {
        case "+":
            return add(a, b)
            break;
        case "-":
            return subtract(a, b);
            break;
        case "*":
            return multiply(a, b);
            break;
        case "/":
            return divide(a, b);
            break;
        default:
            console.log("the equals function didn't work")
    };
};

console.log(equals("+", 200, 12)); // should return 212

// clicking on NUMBERS buttons displays the numbers in the display
// and SAVES the value in a variable for use in the calculation
const display = document.querySelector('.display');
const digit = document.querySelectorAll('.digit');
const one = document.querySelector('.one');
const two = document.querySelector('.two');
const three = document.querySelector('.three');
const four = document.querySelector('.four');
const five = document.querySelector('.five');
const six = document.querySelector('.six');
const seven = document.querySelector('.seven');
const eight = document.querySelector('.eight');
const nine = document.querySelector('.nine');
const zero = document.querySelector('.zero');

one.addEventListener('click', e => {
    display.textContent = parseInt(display.textContent + "1");
});

two.addEventListener('click', e => {
    display.textContent = parseInt(display.textContent + "2");
});

three.addEventListener('click', e => {
    display.textContent = parseInt(display.textContent + "3");
});

four.addEventListener('click', e => {
    display.textContent = parseInt(display.textContent + "4");
});

five.addEventListener('click', e => {
    display.textContent = parseInt(display.textContent + "5");
});

six.addEventListener('click', e => {
    display.textContent = parseInt(display.textContent + "6");
});

seven.addEventListener('click', e => {
    display.textContent = parseInt(display.textContent + "7");
});

eight.addEventListener('click', e => {
    display.textContent = parseInt(display.textContent + "8");
});

nine.addEventListener('click', e => {
    display.textContent = parseInt(display.textContent + "9");
});

zero.addEventListener('click', e => {
    display.textContent = parseInt(display.textContent + "0");
});

// WHY DOESN'T THIS WORK??
/*
digit.forEach((number) => {
    number.addEventListener('click', e => {
        switch (number) {
            case one:
                one.addEventListener('click', e => {
                    display.textContent = parseInt(display.textContent + "1");
                })
                break;
            case two: {
                two.addEventListener('click', e => {
                    display.textContent = parseInt(display.textContent + "1");
                })
                break;
            }
        }
    })
})
*/

// CLEAR the display and show ZERO in the display
const clear = document.querySelector('.clear')
clear.addEventListener('click', e => {
    display.textContent = parseInt(0);
});

// OPERATORS to make the math work
console.log()