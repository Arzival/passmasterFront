import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Home } from 'lucide-react';
import { useLanguage } from '../hooks/useLanguage';
import { LanguageToggle } from '../components/LanguageToggle';

export function DashBoard() {
  const { translations: t } = useLanguage();
  const navigate = useNavigate();

  // Function to handle logout
  const handleLogout = () => {
    // Here you would clear any session or token data, if applicable
    navigate('/'); // Redirect to root ("/") after logout
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-gray-50 to-gray-100">
      <nav className="bg-white shadow-md px-6 py-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <Link to="/dashboard" className="flex items-center space-x-2 text-indigo-600 hover:text-indigo-700 transition-colors">
            <Home className="w-5 h-5" />
            <span className="font-semibold">PassMaster</span>
          </Link>
          <div className="flex items-center space-x-4">
            <LanguageToggle />
            <button
              onClick={handleLogout}
              className="text-gray-600 hover:text-gray-800 px-4 py-2 rounded-lg transition-colors"
            >
              {t.nav.logout} {/* Make sure this key exists in your translations */}
            </button>
          </div>
        </div>
      </nav>

      <main className="flex-grow max-w-7xl mx-auto px-6 py-16 flex justify-center items-center">
        <h1 className="text-4xl font-bold text-gray-900">Hello World from the Dashboard</h1>
      </main>
    </div>
  );
}

export default DashBoard;
