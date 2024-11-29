// src/pages/SupportPage.jsx
import { Link } from 'react-router-dom';
import SupportForm from '../components/Support/SupportForm';

export default function SupportPage({ darkMode }) {
  return (
    <div
      className={`container mx-auto px-4 py-8 ${
        darkMode ? 'bg-gray-900 text-white' : 'bg-gray-100 text-black'
      }`}
    >
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold mb-4">Support</h1>
        <Link to="/">
          <button
            className={`py-2 px-4 rounded font-bold ${
              darkMode
                ? 'bg-blue-600 hover:bg-blue-500 text-white'
                : 'bg-blue-400 hover:bg-blue-300 text-black'
            }`}
          >
            Back to Calculator
          </button>
        </Link>
      </div>
      <SupportForm darkMode={darkMode} />
    </div>
  );
}
