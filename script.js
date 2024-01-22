let firstNumber = '';
let secondNumber = '';
let firstNumberDone = false;
let operator = '';


function appendNum(num) {
if (firstNumberDone) {
    secondNumber += `${num}`;
}
    firstNumber += `${num}`;
}

const numButtons = document.querySelectorAll('[data-number]');
numButtons.forEach(x => x.addEventListener(('click'), () => appendNum(x.textContent)));
const dotButton = document.querySelector('#dot');


const opButtons = document.querySelectorAll(`[data-operator]`);
opButtons.forEach(x => x.addEventListener(('click'), () => operator = x.textContent));
const plusButton = document.querySelector('#plus');
const minusButton = document.querySelector('#minus');
const multiplyButton = document.querySelector('#multiply');
const divideButton = document.querySelector('#divide');
const equalsButton = document.querySelector('#equals');