import { useState } from 'react';
import * as s from './Calculator.styles';

const Calculator = () => {
  const [operandOne, setOperandOne] = useState(0);
  const [operandTwo, setOperandTwo] = useState(0);
  const [operator, setOperator] = useState('');
  const [step, setStep] = useState(0); // Keep track of current state of operation.
  const [value, setValue] = useState('0'); // Use strings and convert on execution.

  // Step (state of calculator logic)
  // 0. Begin
  // 1. First operand confirmed

  const handleInput = (key) => {
    // Based on the button pressed, determine how to affec the present value.
    let newValue;
    if ( value === '0') {
      // Account for '0' on screen and prevent the display of a leading zero.
      newValue = key;
    } else if (key === '+/-') {
      // Toggle between positive and negative value (convert to float and back).
      newValue = (parseFloat(value) * -1).toString();
    } else if (key === '.' && value.includes('.')) {
      // Check for an existing decimal point and prevent the input of another.
      return;
    }
    else newValue = value + key;
    setValue(newValue);

    // Depending on what state the operation is in, set either operandOne or
    // operandTwo.
    step === 0 ? setOperandOne(parseFloat(newValue)) : setOperandTwo(parseFloat(newValue));
  };

  const assignOperator = (string) => {
    setOperator(string);
    // If the first operand has not yet been set, save it and clear display.
    // This conditional allows reselection of operator if entered incorrectly.
    if (step === 0) {
      setOperandOne(parseFloat(value));
      setValue('0');
      setStep(1); // Confirm the first operand.
    }
    // If the first operand has already been set, keep the existing operandOne
    // and reset the display value ready to accept another input.
    if (step === 1) {
      setValue('0');
    }
  }

  // This function is carried out under the following circumstances:
  // - Equals button is pressed
  // - Another operator is chosen after the second operand
  const evaluateOperation = () => {
    let answer = '0';
    switch (operator) {
      case 'add' :
        answer = operandOne + operandTwo;
        break;
      case 'subtract' :
        answer = operandOne - operandTwo;
        break;
      case 'multiply' :
        answer = operandOne * operandTwo;
        break;
      case 'divide' :
        // Prevent a divide by zero operation (would return infinity).
        operandTwo !== 0 ? answer = operandOne / operandTwo : answer = 0;
        break;
      default :
    }
    setOperandOne(answer);
    setValue(answer.toString());
  }

  const clearEntry = () => {
    // Clear only the current entry and maintain the current program state
    // (which operand is due to be entered).
    setValue('0');
  }
  
  const clearAll = () => {
    // Set all states to their default values.
    setOperandOne(0);
    setOperandTwo(0);
    setOperator('');
    setStep(0);
    setValue('0');
  }

  return (
    <s.StyledCalculator>
      <s.StyledDisplay>{value}</s.StyledDisplay>
      <s.StyledButtonsContainer>
        <s.StyledButton onClick={(event) => handleInput(event.target.textContent)}>7</s.StyledButton>
        <s.StyledButton onClick={(event) => handleInput(event.target.textContent)}>8</s.StyledButton>
        <s.StyledButton onClick={(event) => handleInput(event.target.textContent)}>9</s.StyledButton>
        <s.StyledButton onClick={clearEntry}>C</s.StyledButton>
        <s.StyledButton onClick={clearAll}>AC</s.StyledButton>
        <s.StyledButton onClick={(event) => handleInput(event.target.textContent)}>4</s.StyledButton>
        <s.StyledButton onClick={(event) => handleInput(event.target.textContent)}>5</s.StyledButton>
        <s.StyledButton onClick={(event) => handleInput(event.target.textContent)}>6</s.StyledButton>
        <s.StyledButton onClick={() => assignOperator('multiply')}>&times;</s.StyledButton>
        <s.StyledButton onClick={() => assignOperator('divide')}>÷</s.StyledButton>
        <s.StyledButton onClick={(event) => handleInput(event.target.textContent)}>1</s.StyledButton>
        <s.StyledButton onClick={(event) => handleInput(event.target.textContent)}>2</s.StyledButton>
        <s.StyledButton onClick={(event) => handleInput(event.target.textContent)}>3</s.StyledButton>
        <s.StyledButton onClick={() => assignOperator('add')}>+</s.StyledButton>
        <s.StyledButton onClick={() => assignOperator('subtract')}>-</s.StyledButton>
        <s.StyledButton onClick={(event) => handleInput(event.target.textContent)}>0</s.StyledButton>
        <s.StyledButton onClick={(event) => handleInput(event.target.textContent)}>.</s.StyledButton>
        <s.StyledButton onClick={(event) => handleInput(event.target.textContent)}>+/-</s.StyledButton>
        <s.StyledButton onClick={evaluateOperation}>=</s.StyledButton>
        <s.StyledButton disabled={true}>...</s.StyledButton>
      </s.StyledButtonsContainer>
    </s.StyledCalculator>
  );
}

export default Calculator;
