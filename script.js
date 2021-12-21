const display = document.querySelector('.display');
const buttons = document.querySelectorAll('.button');
let displayValue = 0; // display value holder
let previousValue = 0;
let currentValue = 0;
let operator = '';

// ADDITION (+) function
// const add = function (a, b) {
//     displayValue[1] = '+';
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
const equals = function (operator, previousValue, displayValue) {
    switch (operator) {
        case "+":
            return Math.round((parseInt(previousValue) + parseInt(displayValue)) * 100) / 100;
            break;
        case "-":
            return Math.round((parseInt(previousValue) - parseInt(displayValue)) * 100) / 100;
            break;
        case "*":
            return Math.round((parseInt(previousValue) * parseInt(displayValue)) * 100) / 100;
            break;
        case "/":
            if (displayValue == 0) {
                alert('Fool!');
                return 'NaN'; // what should I return?
            } else {
                return Math.round((parseInt(previousValue) / parseInt(displayValue)) * 100) / 100;
            }
            break;
        case "=":
            return previousValue;
        default:
            console.log("the equals function didn't work")
    };
};

// clicking on NUMBERS buttons displays the numbers in the display
// and SAVES the value in a variable for use in the calculation

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

// create variables for operators and clear buttons
const addButton = document.querySelector('.add');
const subtractButton = document.querySelector('.subtract');
const multiplyButton = document.querySelector('.multiply');
const divideButton = document.querySelector('.divide');
const equalsButton = document.querySelector('.equals');
const clearButton = document.querySelector('.clear');

buttons.forEach((button) => {
    button.addEventListener('click', e => {
        switch (button) {
            case one:
                display.textContent = parseInt(displayValue + "1");
                displayValue = display.textContent;
                break;
            case two:
                display.textContent = parseInt(displayValue + "2");
                displayValue = display.textContent;
                break;
            case three:
                display.textContent = parseInt(displayValue + "3");
                displayValue = display.textContent;
                break;
            case four:
                display.textContent = parseInt(displayValue + "4");
                displayValue = display.textContent;
                break;
            case five:
                display.textContent = parseInt(displayValue + "5");
                displayValue = display.textContent;
                break;
            case six:
                display.textContent = parseInt(displayValue + "6");
                displayValue = display.textContent;
                break;
            case seven:
                display.textContent = parseInt(displayValue + "7");
                displayValue = display.textContent;
                break;
            case eight:
                display.textContent = parseInt(displayValue + "8");
                displayValue = display.textContent;
                break;
            case nine:
                display.textContent = parseInt(displayValue + "9");
                displayValue = display.textContent;
                break;
            case zero:
                display.textContent = parseInt(displayValue + "0");
                displayValue = display.textContent;
                break;
            case addButton:
                if (!previousValue) {
                    operator = "+";
                    displayValue = display.textContent;
                    previousValue = displayValue;
                    displayValue = 0;
                } else {
                    displayValue = display.textContent;
                    currentValue = equals(operator, previousValue, displayValue);
                    display.textContent = currentValue;
                    previousValue = currentValue;
                    operator = "+";
                    currentValue = 0;
                    displayValue = 0;
                };
                console.log('previousValue: ' + previousValue);
                console.log('displayValue: ' + displayValue);
                console.log('currentValue: ' + currentValue);
                break;
            case subtractButton:
                if (!previousValue) {
                    operator = "-";
                    displayValue = display.textContent;
                    previousValue = displayValue;
                    displayValue = 0;
                } else {
                    displayValue = display.textContent;
                    currentValue = equals(operator, previousValue, displayValue);
                    display.textContent = currentValue;
                    previousValue = currentValue;
                    operator = "-";
                    currentValue = 0;
                    displayValue = 0;
                };
                console.log('previousValue: ' + previousValue);
                console.log('displayValue: ' + displayValue);
                console.log('currentValue: ' + currentValue);
                break;
            case multiplyButton:
                if (!previousValue) {
                    operator = "*";
                    displayValue = display.textContent;
                    previousValue = displayValue;
                    displayValue = 0;
                } else {
                    displayValue = display.textContent;
                    currentValue = equals(operator, previousValue, displayValue);
                    display.textContent = currentValue;
                    previousValue = currentValue;
                    operator = "*";
                    currentValue = 0;
                    displayValue = 0;
                };
                console.log('previousValue: ' + previousValue);
                console.log('displayValue: ' + displayValue);
                console.log('currentValue: ' + currentValue);
                break;
            case divideButton:
                if (!previousValue) {
                    operator = "/";
                    displayValue = display.textContent;
                    previousValue = displayValue;
                    displayValue = 0;
                } else {
                    displayValue = display.textContent;
                    currentValue = equals(operator, previousValue, displayValue);
                    display.textContent = currentValue;
                    previousValue = currentValue;
                    operator = "/";
                    currentValue = 0;
                    displayValue = 0;
                };
                console.log('previousValue: ' + previousValue);
                console.log('displayValue: ' + displayValue);
                console.log('currentValue: ' + currentValue);
                break;
            case equalsButton:
                if (!operator) {
                    return;
                } else {
                    displayValue = display.textContent;
                    currentValue = equals(operator, previousValue, displayValue);
                    display.textContent = currentValue;
                    
                    // reset previous value, current value, display value, and operator
                    previousValue = 0;
                    currentValue = 0;
                    displayValue = 0;
                    operator = '';

                    // console log to see what's going on
                    console.log('previousValue: ' + previousValue);
                    console.log('displayValue: ' + displayValue);
                    console.log('currentValue: ' + currentValue);
                }
                break;
            case clearButton:
                display.textContent = 0;
                displayValue = 0;
                previousValue = 0;
                currentValue = 0;
                operator = '';
                break;
            default:
                console.log('button press did not work');
        }
    })
});