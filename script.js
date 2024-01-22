let firstNumber = '';
let secondNumber = '';
let firstNumberDone = false;
let operator = '';
const numButtons = document.querySelectorAll('[data-number]');
const dotButton = document.querySelector('#dot');
const opButtons = document.querySelectorAll(`[data-operator]`);
const equalsButton = document.querySelector('#equals');
const displayStr = document.querySelector(`#displayedStr`);

function updateDisplay() {
    displayStr.textContent = `${firstNumber} ${operator} ${secondNumber}`;
}

function resultDisplay(num) {
    firstNumber = num;
    secondNumber = '';
    operator = '';
    firstNumberDone = false;
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

numButtons.forEach(x => x.addEventListener(('click'), () => appendNum(x.textContent)));

opButtons.forEach(x => x.addEventListener(('click'), () => {
    operator = x.textContent;
    firstNumberDone = true;
    updateDisplay();
}
));


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
            resultDisplay(firstNum * secondNum);   
            break;
        case '/':
            if (secondNum === 0) return "Can't divide by zero"
            resultDisplay(Math.round((firstNum / secondNum) * 100) / 100);
            break;
    }
})