
import './styles.css';
import { add, subtract, multiply } from './math';

// console.log('Ready to Party');

// console.log('Let us do this');

const num1 = document.getElementById('num1') as HTMLInputElement;
const num2 = document.getElementById('num2') as HTMLInputElement;
const addButton: any = document.getElementById('add') as HTMLInputElement;
const subtractButton: any = document.getElementById('subtract') as HTMLInputElement;
const multiplyButton: any = document.getElementById('multiply') as HTMLInputElement;
const answer = document.getElementById('answer') as HTMLSpanElement;

function doAddition() {
    const n1 = num1.valueAsNumber;
    const n2 = num2.valueAsNumber;

    answer.innerText = add(n1, n2).toString();
}

function doSubtraction() {
    const n1 = num1.valueAsNumber;
    const n2 = num2.valueAsNumber;

    answer.innerText = subtract(n1, n2).toString();
}

function doMultiplication() {
    const n1 = num1.valueAsNumber;
    const n2 = num2.valueAsNumber;

    answer.innerText = multiply(n1, n2).toString();
}

addButton.addEventListener('click', doAddition);
subtractButton.addEventListener('click', doAddition);
multiplyButton.addEventListener('click', doAddition);