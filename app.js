/*-------------------------------- Constants --------------------------------*/


/*-------------------------------- Variables --------------------------------*/
let firstValue = null;
let secondValue = null;
let operation = null;

/*------------------------ Cached Element References ------------------------*/
const numberButtons = document.querySelectorAll('.number');
const operatorButtons = document.querySelectorAll('.operator');

const equalsButton = document.querySelector('#equals');
const clearButton = document.querySelector('#clear');

const calculator = document.querySelector('#calculator');
const display = document.querySelector('.display');
display.innerText = 0; //initially display should display 0

/*-------------------------------- Functions --------------------------------*/
const handleEqualsReaction = (event) => {
  /* 
  1- when equals is being clicked, the value displayed on screen should be stored as the second value 
  2- calculate the value
  */
  secondValue = parseFloat(display.innerText);
  calculate();
};

const handleOperationReaction = (event) => {
  /*
  1- when any of the operation buttons are clicked, the value displayed on the screen should be stored as the first value
  2- store the operation '+', '-', '*', or '/'
  3- reset the display to view 0
  */
  firstValue = parseFloat(display.innerText); 
  operation = event.target.innerText;
  display.innerText = 0;

};

const calculate = () => {  //calculate + display value based on selected operation
  let totalValue = 0;

  if (operation === '+') {
    totalValue = firstValue + secondValue;
  } 
  if (operation === '-') {
    totalValue = firstValue - secondValue;

  }
  if (operation === '*') {
    totalValue = firstValue * secondValue;

  }
  if (operation === '/') {
    totalValue = firstValue / secondValue;
  }

  display.innerText = totalValue;
};
const clear = () => { //reset all values
  display.innerText = 0;
  firstValue = null;
  secondValue = null;
  operation = null;
};

/*----------------------------- Event Listeners -----------------------------*/
clearButton.addEventListener('click', clear);
equalsButton.addEventListener('click', handleEqualsReaction);

operatorButtons.forEach((operator) => {
  operator.addEventListener('click', handleOperationReaction);
});

numberButtons.forEach((number) => {
  number.addEventListener('click', (event) => {
    const inputValue = event.target.innerText;

    if (display.innerText === '0') { //to remove leading zeros
      display.innerText = inputValue;
    } else {
      display.innerText += inputValue;
    }

  });
}); 
