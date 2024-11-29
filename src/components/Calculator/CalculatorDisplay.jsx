// src/components/Calculator/CalculatorDisplay.jsx
export default function CalculatorDisplay({ darkMode, value = '0' }) {
    return (
      <div
        className={`w-full text-right py-4 px-6 rounded ${
          darkMode ? 'bg-gray-700 text-white' : 'bg-gray-200 text-black'
        }`}
      >
        {value}
      </div>
    );
  }
  