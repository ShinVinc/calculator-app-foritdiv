import { createContext, useContext, useState } from 'react';

const CalculatorContext = createContext();

export function CalculatorProvider({ children }) {
  const [firstNumber, setFirstNumber] = useState('0');
  const [symbol, setSymbol] = useState('');
  const [secondNumber, setSecondNumber] = useState('');
  const [history, setHistory] = useState([]);
  const [error, setError] = useState('');

  const clearAll = () => {
    setFirstNumber('0');
    setSymbol('');
    setSecondNumber('');
    setError('');
  };

  const deleteLastDigit = () => {
    if (secondNumber) {
      setSecondNumber(prev => prev.slice(0, -1));
    } else if (symbol) {
      setSymbol('');
    } else if (firstNumber !== '0') {
      setFirstNumber(prev => prev.slice(0, -1) || '0');
    }
  };

  const calculate = () => {
    if (!firstNumber || !symbol || !secondNumber) return;

    const num1 = parseFloat(firstNumber);
    const num2 = parseFloat(secondNumber);
    let result;

    try {
      switch (symbol) {
        case '+':
          result = num1 + num2;
          break;
        case '-':
          result = num1 - num2;
          break;
        case '*':
          result = num1 * num2;
          break;
        case '/':
          if (num2 === 0) throw new Error('Division by zero');
          result = num1 / num2;
          break;
        default:
          throw new Error('Invalid operation');
      }

      const equation = `${firstNumber} ${symbol} ${secondNumber} = ${result}`;
      setHistory(prev => [...prev, equation]);
      setFirstNumber(result.toString());
      setSymbol('');
      setSecondNumber('');
      setError('');
    } catch (err) {
      setError(err.message);
    }
  };

  const value = {
    firstNumber,
    setFirstNumber,
    symbol,
    setSymbol,
    secondNumber,
    setSecondNumber,
    history,
    error,
    clearAll,
    deleteLastDigit,
    calculate
  };

  return (
    <CalculatorContext.Provider value={value}>
      {children}
    </CalculatorContext.Provider>
  );
}

export function useCalculatorContext() {
  return useContext(CalculatorContext);
}