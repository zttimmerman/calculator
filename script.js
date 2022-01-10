function add(num1, num2) {
    return num1 + num2;
}

function subtract(num1, num2) {
    return num1 - num2;
}

function multiply(num1, num2) {
    return num1 * num2;
}

function divide(num1, num2) {
    if(num2 === 0 ) {
        return "Can't do that my guy";
    } else {
        test = num2;
        return num1 / num2;
    }
}

const zeroBtn = document.querySelector("#zero");
const oneBtn = document.querySelector("#one");
const twoBtn = document.querySelector("#two");
const threeBtn = document.querySelector("#three");
const fourBtn = document.querySelector("#four");
const fiveBtn = document.querySelector("#five");
const sixBtn = document.querySelector("#six");
const sevenBtn = document.querySelector("#seven");
const eightBtn = document.querySelector("#eight");
const nineBtn = document.querySelector("#nine");
const addBtn = document.querySelector("#add");
const subtractBtn = document.querySelector("#subtract");
const multiplyBtn = document.querySelector("#multiply");
const divideBtn = document.querySelector("#divide");
const decimalBtn = document.querySelector("#decimal");
const clearBtn = document.querySelector("#clear");
const equalsBtn = document.querySelector("#equals");
const display = document.querySelector("#display");

zeroBtn.addEventListener("click", showNumber);
oneBtn.addEventListener("click", showNumber);
twoBtn.addEventListener("click", showNumber);
threeBtn.addEventListener("click", showNumber);
fourBtn.addEventListener("click", showNumber);
fiveBtn.addEventListener("click", showNumber);
sixBtn.addEventListener("click", showNumber);
sevenBtn.addEventListener("click", showNumber);
eightBtn.addEventListener("click", showNumber);
nineBtn.addEventListener("click", showNumber);
addBtn.addEventListener("click", takeOperator);
subtractBtn.addEventListener("click", takeOperator);
multiplyBtn.addEventListener("click", takeOperator);
divideBtn.addEventListener("click", takeOperator);
decimalBtn.addEventListener("click", takeDecimal);
clearBtn.addEventListener("click", clearDisplay);
equalsBtn.addEventListener("click", evaluate);

let calcArr = [];
let displayValue = "";
let result;

function showNumber(e) {
    displayValue += e.target.textContent;
    display.textContent = displayValue;
    if(result) {
        calcArr[1] = +displayValue;
    } else
    if (!calcArr[2]) {
        calcArr[0] = +displayValue;
    } else {
        calcArr[1] = +displayValue;
    }
}

function takeOperator(e) {
    if (calcArr[2]) { //if operator previously selected, start chaining 
        displayValue = operate(...calcArr);
        display.textContent = displayValue;
        calcArr[0] = displayValue;
        calcArr[2] = e.target.id;
    }
    if (result) { //if result previously calculated, make it the new previous value for next operator
        calcArr[0] = result;
        result = 0; 
    } 
    calcArr[2] = e.target.id;
    displayValue = "";
}

function takeDecimal(e) {
    if (display.textContent.includes(".")) return
    displayValue += ".";
    display.textContent = displayValue;
    if (!calcArr[2]) {
        calcArr[0] += ".";
    } else {
        calcArr[1] += ".";
    }
}

function clearDisplay(e) {
    display.textContent = "";
    displayValue = "";
    calcArr = [];
    result = 0;
}

function operate(num1, num2, operator) {
    if (operator === "add") {
        return add(num1, num2);
    } else if (operator === "subtract") {
        return subtract(num1, num2);
    } else if (operator === "multiply") {
        return multiply(num1, num2);
    } else if (operator === "divide") {
        return divide(num1, num2);
    } else {
        return "ERROR";
    }
}

function evaluate(e) {
    displayValue = operate(...calcArr);
    result = displayValue;
    display.textContent = displayValue;
}
