// Implement Arithmetic Functions
// Addition
function add(number1, number2) {
  return number1 + number2;
}

// Subtraction
function subtract(number1, number2) {
  return number1 - number2;
}

// Multiplication
function multiply(number1, number2) {
  return number1 * number2;
}

// Division
function divide(number1, number2) {
  return number1 / number2;
}

// Add - Event Listener
document.getElementById('add').addEventListener('click', function() {
  const number1 = parseFloat(document.getElementById('number1').value) || 0;
  const number2 = parseFloat(document.getElementById('number2').value) || 0;
  const result = add(number1, number2);
  document.getElementById('calculation-result').textContent = result;
});

// Subtract - Event Listener
document.getElementById('subtract').addEventListener('click', function() {
  const number1 = parseFloat(document.getElementById('number1').value) || 0;
  const number2 = parseFloat(document.getElementById('number2').value) || 0;
  const result = subtract(number1, number2);
  document.getElementById('calculation-result').textContent = result;
});

// Multiply - Event Listener
document.getElementById('multiply').addEventListener('click', function() {
  const number1 = parseFloat(document.getElementById('number1').value) || 0;
  const number2 = parseFloat(document.getElementById('number2').value) || 0;
  const result = multiply(number1, number2);
  document.getElementById('calculation-result').textContent = result;
});

// Divide - Event Listener
document.getElementById('divide').addEventListener('click', function() {
  const number1 = parseFloat(document.getElementById('number1').value) || 0;
  const number2 = parseFloat(document.getElementById('number2').value) || 0;
  const result = divide(number1, number2);
  document.getElementById('calculation-result').textContent = result;
});

