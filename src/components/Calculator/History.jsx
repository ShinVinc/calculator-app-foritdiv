import { useCalculatorContext } from '../../context/CalculatorContext';

export default function History() {
  const { history } = useCalculatorContext();

  return (
    <div className="w-full mt-4 p-4 bg-white rounded-lg shadow max-h-60 overflow-y-auto">
      <h3 className="font-bold mb-2">History</h3>
      {history.length === 0 ? (
        <p className="text-gray-500">No calculations yet</p>
      ) : (
        <ul className="space-y-1">
          {history.map((item, index) => (
            <li key={index} className="text-gray-700">{item}</li>
          ))}
        </ul>
      )}
    </div>
  );
}