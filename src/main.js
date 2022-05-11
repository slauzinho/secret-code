import './style.css';

const form = document.querySelector('[name="verify"]');
const inputs = document.querySelectorAll('input[type="text"]');

/***
 * When manually entering an input it should focus the next available input
 * Example:
 * I enter the number 1
 * The second input should be focused
 * I shouldn't have to touch my mouse!
 *
 * For help: https://developer.mozilla.org/en-US/docs/Web/API/Element/nextElementSibling
 */
function handleInput(e) {
  // your code goes here
}

/***
 * When I select the first input and paste a code it should fill all available inputs
 * Example:
 *
 * Select the first input
 * Ctrl + V (Paste): 123
 * Result: [1][2][3][][][]
 *
 * Select the first input
 * Ctrl + V (Paste): 12345678
 * Result: [1][2][3][4][5][6]
 *
 * For help: https://developer.mozilla.org/en-US/docs/Web/API/ClipboardEvent/clipboardData
 */
function handlePaste(e) {
  // your code here
}

inputs[0].addEventListener('paste', handlePaste);

form.addEventListener('input', handleInput);

// Extra points
// - Add backspace support (if I delete a number it should focus the previous input)
// - Auto submit the form when I paste a code that has the correct length (6 chars / all inputs have a value)
// - Show an error message if input is different then 3456789 (You can use the <div> with the id="error-message")
// - Show a success message if input is equal to 3456789 (You can use the <div> with the id="success-message")
