let display = document.querySelector(".displayResult");

let input1 = document.querySelector(".input1");
let input2 = document.querySelector(".input2");

let add = document.querySelector(".btn1");
let subtract = document.querySelector(".btn2");
let multiply = document.querySelector(".btn3");
let divide = document.querySelector(".btn4");
let reset = document.querySelector(".btn5");


// Addition
add.addEventListener("click", function () {
    let a = parseInt(input1.value);
    let b = parseInt(input2.value);
    add2num(a, b);
})
function add2num(a, b) {
    let sum = ` ${a + b} `;
    display.textContent = sum;
}

// Subtraction
subtract.addEventListener("click", function () {
    let a = parseInt(input1.value);
    let b = parseInt(input2.value);
    subtract2num(a, b);
})
function subtract2num(a, b) {
    let minus = ` ${a - b} `;
    display.textContent = minus;
}

// Multiplication
multiply.addEventListener("click", function () {
    let a = parseInt(input1.value);
    let b = parseInt(input2.value);
    multiply2num(a, b);
})
function multiply2num(a, b) {
    let multiplier = ` ${a * b} `;
    display.textContent = multiplier;
}

// Division
divide.addEventListener("click", function () {
    let a = parseInt(input1.value);
    let b = parseInt(input2.value);
    divide2num(a, b);
})
function divide2num(a, b) {
    let divider = ` ${a / b} `;
    display.textContent = divider;
}

//Reset
reset.addEventListener("click", function(){
    let refresh = document.querySelector(".refresh");
    refresh.click();
})