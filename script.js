// ADDITION (+) function
// const add = function (a, b) {
//     const result = a + b;
//     return result;
// }
// console.log(add(1, 2)) // should return 3

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
            return a + b;
            break;
        case "-":
            return a - b;
            break;
        case "*":
            return a * b;
            break;
        case "/":
            return a / b;
            break;
        default:
            console.log("the equals function didn't work")
    };
};

console.log(equals("+", 200, 12)); // should return 212

// clicking on NUMBERS buttons displays the numbers in the display
// and SAVES the value in a variable for use in the calculation
const display = document.querySelector('.display');
const buttons = document.querySelectorAll('.button');

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

const clear = document.querySelector('.clear');
const add = '*';

let displayValue = 0; // display value holder

buttons.forEach((button) => {
    button.addEventListener('click', e => {
        switch (button) {
            case one:
                display.textContent = parseInt(display.textContent + "1");
                displayValue = display.textContent;
                break;
            case two:
                two.addEventListener('click', e => {
                    display.textContent = parseInt(display.textContent + "1");
                })
                break;
            case three:
                display.textContent = parseInt(display.textContent + "3");
                displayValue = display.textContent;
                break;
            case four:
                display.textContent = parseInt(display.textContent + "4");
                displayValue = display.textContent;
                break;
            case five:
                display.textContent = parseInt(display.textContent + "5");
                displayValue = display.textContent;
                break;
            case six:
                display.textContent = parseInt(display.textContent + "6");
                displayValue = display.textContent;
                break;
            case seven:
                display.textContent = parseInt(display.textContent + "7");
                displayValue = display.textContent;
                break;
            case eight:
                display.textContent = parseInt(display.textContent + "8");
                displayValue = display.textContent;
                break;
            case nine:
                display.textContent = parseInt(display.textContent + "9");
                displayValue = display.textContent;
                break;
            case zero:
                display.textContent = parseInt(display.textContent + "0");
                displayValue = display.textContent;
                break;
            case clear:
                display.textContent = 0;
                displayValue = 0;
                break;
            default:
                console.log('button press did not work');
        }
    })
});

