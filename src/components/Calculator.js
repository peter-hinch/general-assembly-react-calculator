import { useState } from 'react';

const Calculator = () => {
  const [firstInput, setFirstInput] = useState(0);
  const [secondInput, setSecondInput] = useState(0);
  const [result, setResult] = useState(0);

  const calculateResult = (event) => {
    event.preventDefault();
    setResult(parseInt(firstInput) + parseInt(secondInput));
  }

  return (
    <div className="container">
      <h1>Add with React!</h1>

      <div className="add">
        <input type="text"
          value={firstInput}
          onFocus={() => setFirstInput('')}
          onChange={(event) => setFirstInput(event.target.value)}
        />
        <span> + </span>
        <input type="text"
          value={secondInput}
          onFocus={() => setSecondInput('')}
          onChange={(event) => setSecondInput(event.target.value)}
        />
        <button onClick={calculateResult}> =</button>
        <h3>{result}</h3>
      </div>
    </div>
  );
}

export default Calculator;
