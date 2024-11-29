// src/components/Calculator/Calculator.jsx
import { useCalculatorContext } from '../../context/CalculatorContext';
import CalculatorDisplay from './CalculatorDisplay';
import CalculatorButton from './CalculatorButton';
import History from './History';
import SupportModal from '../Support/SupportModal';  // Import SupportModal component
import { useState } from 'react';  // Import useState hook

export default function Calculator({ darkMode }) {
  const {
    firstNumber,
    setFirstNumber,
    symbol,
    setSymbol,
    secondNumber,
    setSecondNumber,
    clearAll,
    deleteLastDigit,
    calculate,
    history,
  } = useCalculatorContext();

  const [isModalOpen, setIsModalOpen] = useState(false);  
  const handleNumberClick = (num) => {
    if (!symbol) {
      setFirstNumber((prev) => (prev === '0' ? num : prev + num));
    } else {
      setSecondNumber((prev) => prev + num);
    }
  };

  const handleSymbolClick = (sym) => {
    if (firstNumber && !secondNumber) {
      setSymbol(sym);
    }
  };

 

  const handleSupportClick = () => {  
      setIsModalOpen(true);  
  };  

  const handleCloseModal = () => {  
      setIsModalOpen(false);  
  };  

  return (
    <div
      className={`flex flex-col items-center p-4 max-w-md mx-auto ${
        darkMode ? 'bg-gray-800 text-white' : 'bg-gray-100 text-black'
      }`}
    >
      {/* Calculator Display */}
      <CalculatorDisplay
        value={secondNumber || symbol || firstNumber || '0'}
        darkMode={darkMode}
        className="w-full"
      />

      {/* Buttons */}
      <div className="grid grid-cols-4 gap-2 mt-4 w-full">
        {/* Top Row */}
        <CalculatorButton
          value="C"
          onClick={clearAll}
          darkMode={darkMode}
        />
        <CalculatorButton
          value="DEL"
          onClick={deleteLastDigit}
          darkMode={darkMode}
        />
        <CalculatorButton
          value="?" // ? = Support Page
          onClick={handleSupportClick} // Redirect to Support Page
          darkMode={darkMode}
          //Modal Support
          
        />
        <SupportModal isOpen={isModalOpen} onClose={handleCloseModal} /> 
        <CalculatorButton
          value="/"
          onClick={() => handleSymbolClick('/')}
          darkMode={darkMode}
        />

        {/* Number Buttons and Operators */}
        <CalculatorButton value="7" onClick={() => handleNumberClick('7')} darkMode={darkMode} />
        <CalculatorButton value="8" onClick={() => handleNumberClick('8')} darkMode={darkMode} />
        <CalculatorButton value="9" onClick={() => handleNumberClick('9')} darkMode={darkMode} />
        <CalculatorButton value="*" onClick={() => handleSymbolClick('*')} darkMode={darkMode} />

        <CalculatorButton value="4" onClick={() => handleNumberClick('4')} darkMode={darkMode} />
        <CalculatorButton value="5" onClick={() => handleNumberClick('5')} darkMode={darkMode} />
        <CalculatorButton value="6" onClick={() => handleNumberClick('6')} darkMode={darkMode} />
        <CalculatorButton value="-" onClick={() => handleSymbolClick('-')} darkMode={darkMode} />

        <CalculatorButton value="1" onClick={() => handleNumberClick('1')} darkMode={darkMode} />
        <CalculatorButton value="2" onClick={() => handleNumberClick('2')} darkMode={darkMode} />
        <CalculatorButton value="3" onClick={() => handleNumberClick('3')} darkMode={darkMode} />
        <CalculatorButton value="+" onClick={() => handleSymbolClick('+')} darkMode={darkMode} />

        <CalculatorButton value="0" onClick={() => handleNumberClick('0')} darkMode={darkMode} />
        <CalculatorButton value="." onClick={() => handleNumberClick('.')} darkMode={darkMode} />
        <CalculatorButton value="=" onClick={calculate} darkMode={darkMode} />
        <div></div> {/* Empty cell to align */}
      </div>

      {/* History Section */}
      <div
        className={`w-full mt-4 p-4 rounded-lg ${
          darkMode ? 'bg-gray-700 text-white' : 'bg-gray-200 text-black'
        }`}
      >
        <h2 className="text-lg font-bold mb-2">History</h2>
        {history.length === 0 ? (
          <p className="text-sm italic">No calculations yet</p>
        ) : (
          <ul className="space-y-2">
            {history.map((entry, index) => (
              <li key={index} className="text-sm">
                {entry}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
