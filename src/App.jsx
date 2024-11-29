// src/App.jsx
import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { CalculatorProvider } from './context/CalculatorContext';
import CalculatorPage from './pages/CalculatorPage';
import SupportPage from './pages/SupportPage';
import './styles/index.css';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode);
  };

  return (
    <Router>
      <CalculatorProvider>
        <div className={`min-h-screen ${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-100 text-black'}`}>
          {/* Navigation Bar */}
          <nav className="flex items-center justify-between p-4 bg-gray-800 text-white">
            <div className="text-lg font-bold">
              <Link to="/">Calculator</Link>
            </div>
            <div className="flex items-center space-x-4">
              <Link to="/support" className="hover:underline">
                Support
              </Link>
              <button
                onClick={toggleDarkMode}
                className="bg-gray-700 px-4 py-2 rounded hover:bg-gray-600"
              >
                {darkMode ? 'Light Mode' : 'Dark Mode'}
              </button>
            </div>
          </nav>

          {/* Main Content */}
          <Routes>
            <Route path="/" element={<CalculatorPage darkMode={darkMode} />} />
            <Route path="/support" element={<SupportPage darkMode={darkMode} />} />
          </Routes>
        </div>
      </CalculatorProvider>
    </Router>
  );
}

export default App;
