 // req1
 function reqOne() {
    // we can use getElementById to grab the correct input...but we are interested in the value of the input...not the input itself...so we tell it that.
    const input = document.getElementById('req1Input').value;
    // Here we want the actual element so no .value...not to mention that only input elements HAVE a .value
    const outputElement = document.getElementById('req1Output');
    //  The content for most elements (other than inputs) lives in innerHTML
    outputElement.innerHTML = 'You entered: ' + input;
  }
  // req 2
  function reqTwo() {
    const input = document.getElementById('req2Input').value;
    const outputElement = document.getElementById('req2Output');
    // make sure input is a number...we can convert it from the string we get from the input value to a number with parseInt.  If this fails it's not a number
    const inputInt = parseInt(input);
    if (inputInt !== NaN) {
      outputElement.innerHTML = 'total: ' + sum(inputInt);
    }
  }
  function sum(number) {
    let total = 0;
    for (let i = 1; i <= number; i++) {
      total += i;
    }
    return total;
  }

  // req 3
  function add() {
    const number1 = document.getElementById('req3Number1').value;
    const number2 = document.getElementById('req3Number2').value;
    const outputElement = document.getElementById('req3Output');
    //  we need to check for valid input again...this time decimals would be ok...so lets use parseFloat instead of parseInt
    const num1Float = parseFloat(number1);
    const num2Float = parseFloat(number2);
    if ((num1Float !== NaN) & (num2Float !== NaN)) {
      const total = num1Float + num2Float;
      outputElement.innerHTML = 'Total: ' + total;
    }
  }

  // stretch solution
  function getNum(numId) {
    const number = document.getElementById(numId).value;
    const numberFloat = parseFloat(number);
    if (numberFloat !== NaN) {
      return numberFloat;
    } else return 0;
  }
  function updateTotal(value) {
    const outputElement = document.getElementById('stretchOutput');
    outputElement.innerHTML = 'Total: ' + value;
  }
  // function declaration
  function add2(num1, num2) {
    return num1 + num2;
  }
  // function expression
  const sub2 = function(num1, num2) {
    return num1 - num2;
  };
  // arrow function
  const mult2 = (num1, num2) => num1 * num2;

  // example of using a callback to pull it all together
  function performOperation(operation) {
    // the argument 'operation' is a function...so when we are ready we can call that function in our code below
    const total = operation(
      getNum('stretchNumber1'),
      getNum('stretchNumber2')
    );
    updateTotal(total);
  }