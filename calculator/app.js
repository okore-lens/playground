const usrInput = document.getElementById("input-number");
const addBtn = document.getElementById("btn-add");
const subtractBtn = document.getElementById("btn-subtract");
const multiplyBtn = document.getElementById("btn-multiply");
const divideBtn = document.getElementById("btn-divide");

const currentResultOutput = document.getElementById("current-result");
const currentCalculationOutput = document.getElementById("current-calculation");

const outputResult = (result, text) => {
	currentResultOutput.textContent = result;
	currentCalculationOutput.textContent = text;
};

const insertAfter = (newNode, existingNode) => {
	existingNode.parentNode.insertBefore(newNode, existingNode.nextSibling);
};

const outputLog = () => {
	console.log(logEntries);
	const log = document.getElementById("log");
	const operation = logEntries.pop();
	const li = document.createElement("li");
	li.textContent = `${operation.prevResult} ${operation.operation} ${operation.number} = ${operation.result}`;
	insertAfter(li, log.lastElementChild);
};

const defaultResult = 0;
let currentResult = defaultResult;
let logEntries = [];

// Gets input from input field
const getUserNumberInput = () => {
	return parseInt(usrInput.value);
};

// Generates and writes calculation log
const createAndWriteOutput = (operator, resultBeforeCalc, calcNumber) => {
	const calcDescription = `${resultBeforeCalc} ${operator} ${calcNumber}`;
	outputResult(currentResult, calcDescription); // from vendor file
};

const writeToLog = (
	operationIdentifier,
	prevResult,
	operationNumber,
	newResult
) => {
	const logEntry = {
		operation: operationIdentifier,
		prevResult: prevResult,
		number: operationNumber,
		result: newResult,
	};
	logEntries.push(logEntry);
	outputLog();
};

const add = () => {
	const enteredNumber = getUserNumberInput();
	const initialResult = currentResult;
	currentResult += enteredNumber;
	createAndWriteOutput("+", initialResult, enteredNumber);
	writeToLog("+", initialResult, enteredNumber, currentResult);
};

const subtract = () => {
	const enteredNumber = getUserNumberInput();
	const initialResult = currentResult;
	currentResult -= enteredNumber;
	createAndWriteOutput("-", initialResult, enteredNumber);
	writeToLog("-", initialResult, enteredNumber, currentResult);
};

const multiply = () => {
	const enteredNumber = getUserNumberInput();
	const initialResult = currentResult;
	currentResult *= enteredNumber; // currentResult = enteredNumber * currentResult
	createAndWriteOutput("*", initialResult, enteredNumber);
	writeToLog("*", initialResult, enteredNumber, currentResult);
};

const divide = () => {
	const enteredNumber = getUserNumberInput();
	const initialResult = currentResult;
	currentResult /= enteredNumber;
	createAndWriteOutput("/", initialResult, enteredNumber);
	writeToLog("/", initialResult, enteredNumber, currentResult);
};

addBtn.addEventListener("click", add);
subtractBtn.addEventListener("click", subtract);
multiplyBtn.addEventListener("click", multiply);
divideBtn.addEventListener("click", divide);

b += c;
