// src/components/Calculator/CalculatorButton.jsx
export default function CalculatorButton({ value, onClick, darkMode }) {
  return (
    <button
      onClick={onClick}
      className={`p-4 rounded font-bold ${
        darkMode ? 'bg-gray-700 text-white hover:bg-gray-600' : 'bg-gray-300 text-black hover:bg-gray-200'
      }`}
    >
      {value}
    </button>
  );
}
