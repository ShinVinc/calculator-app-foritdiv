import Calculator from '../components/Calculator/Calculator';

export default function CalculatorPage({ darkMode }) {
  return (
    <div className={`container mx-auto px-4 py-8 ${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-100 text-black'}`}>
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold mb-4">Simple Calculator</h1>
      </div>
      <Calculator darkMode={darkMode} />
    </div>
  );
}