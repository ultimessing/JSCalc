let firstNumber = '';
let secondNumber = '';
let firstNumberDone = false;
let firstNumberDot = false;
let secondNumberDot = false;
let operator = '';
const numButtons = document.querySelectorAll('[data-number]');
const dotButton = document.querySelector('#dot');
const opButtons = document.querySelectorAll(`[data-operator]`);
const equalsButton = document.querySelector('#equals');
const displayStr = document.querySelector(`#displayedStr`);
const backspaceButton = document.querySelector(`#backspace`);
const clearButton = document.querySelector(`#clear`);

function updateDisplay() {
    displayStr.textContent = `${firstNumber} ${operator} ${secondNumber}`;
}

function resultDisplay(num) {
    firstNumber = `${num}`;
    secondNumber = '';
    operator = '';
    firstNumberDone = false;
    secondNumberDot = false;
    updateDisplay();
}

function appendNum(num) {
    if (firstNumberDone) {
        secondNumber += `${num}`;
    } else {
        firstNumber += `${num}`;
    }
    updateDisplay();
}

function addDot() {
    firstNumberDot = firstNumber.includes(`.`);
    secondNumberDot = secondNumber.includes(`.`);
    if (!firstNumberDone && !firstNumberDot) {
        firstNumber += `.`;
        firstNumberDot = true;
    }
    if (firstNumberDone && !secondNumberDot) {
        secondNumber += `.`;
        secondNumberDot = true;
    }
    updateDisplay();
}

numButtons.forEach(x => x.addEventListener(('click'), () => appendNum(x.textContent)));

opButtons.forEach(x => x.addEventListener(('click'), () => {
    operator = x.textContent;
    firstNumberDone = true;
    updateDisplay();
}));

dotButton.addEventListener((`click`), () => addDot());

equalsButton.addEventListener(('click'), () => {
    let firstNum = parseFloat(firstNumber);
    let secondNum = parseFloat(secondNumber);
    switch (operator) {
        case '+':
            resultDisplay(firstNum + secondNum);
            break;
        case '-':
            resultDisplay(firstNum - secondNum);
            break;
        case '*':
            resultDisplay(Math.round((firstNum * secondNum) * 100) / 100);
            break;
        case '/':
            if (secondNum === 0) return "Can't divide by zero"
            resultDisplay(Math.round((firstNum / secondNum) * 100) / 100);
            break;
    }
})

backspaceButton.addEventListener(('click'), () => {
    if (firstNumberDone) {
        secondNumber = secondNumber.slice(0, -1);
    } else {
        firstNumber = firstNumber.slice(0, -1);
    }
})

clearButton.addEventListener(('click'), () => {
    firstNumber = '';
    secondNumber = '';
    operator = '';
    firstNumberDone = '';
    firstNumberDot = '';
    secondNumberDot = '';
    updateDisplay();
})
