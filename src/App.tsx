import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Lock, Home } from 'lucide-react';
import { useLanguage } from './hooks/useLanguage';
import { LanguageToggle } from './components/LanguageToggle';
import { Footer } from './components/Footer';
import { Login } from './pages/Login';
import { Register } from './pages/Register';
import imgSecure from './assets/Secure data-bro.png';



function HomePage() {
  const { translations: t } = useLanguage();

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-gray-50 to-gray-100">
      <nav className="bg-white shadow-md px-6 py-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-2 text-indigo-600 hover:text-indigo-700 transition-colors">
            <Home className="w-5 h-5" />
            <span className="font-semibold">{t.nav.home}</span>
          </Link>
          
          <div className="flex items-center space-x-4">
            <LanguageToggle />
            <Link to="/login" className="text-gray-600 hover:text-gray-800 px-4 py-2 rounded-lg transition-colors">
              {t.nav.login}
            </Link>
            <Link to="/register" className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors">
              {t.nav.register}
            </Link>
          </div>
        </div>
      </nav>

      <main className="flex-grow max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl font-bold text-gray-900 leading-tight">
              {t.hero.title}
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed">
              {t.hero.description}
            </p>
            <div className="pt-4">
              <Link
                to="/register"
                className="bg-indigo-600 text-white px-8 py-3 rounded-lg hover:bg-indigo-700 transition-colors transform hover:scale-105 duration-200 flex items-center space-x-2"
              >
                <span>{t.hero.cta}</span>
                <Lock className="w-4 h-4" />
              </Link>
            </div>
          </div>

          <div className="flex justify-center items-center">
            <div className="relative">
              <div className="absolute inset-0 bg-indigo-100 rounded-full filter blur-3xl opacity-30 animate-pulse"></div>
              <div className="relative bg-white p-8 rounded-full shadow-lg">
              <img src={imgSecure} alt="Secure data" className="w-128 h-128" />
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
  );
}

export default App;