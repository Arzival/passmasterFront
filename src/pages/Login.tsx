import React, { useState } from 'react';
import { useLanguage } from '../hooks/useLanguage';
import { Footer } from '../components/Footer';
import { LanguageToggle } from '../components/LanguageToggle';
import { Lock, Home } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { loginsend } from '../requests/login.request';

const sendDataLogin = async (email: string, password: string, navigate: any) => {
  try {
    const response = await loginsend(email, password);
    console.log(response);

    if (response.access_token && response.user_id) {
      // Guarda los datos de autenticación en localStorage
      localStorage.setItem('userdata', JSON.stringify({
        access_token: response.access_token,
        token_type: response.token_type,
        user_id: response.user_id,
      }));
      
      // Redirige al usuario a la ruta /dashboard
      navigate('/dashboard');
    }
  } catch (error) {
    console.error('Login error:', error);
    // Aquí podrías manejar el error, como mostrar un mensaje al usuario
  }
};

export function Login() {
  const { translations: t } = useLanguage();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault(); // Evita el envío del formulario
    sendDataLogin(email, password, navigate);
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-gray-50 to-gray-100">
      <nav className="bg-white shadow-md px-6 py-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-2 text-indigo-600 hover:text-indigo-700 transition-colors">
            <Home className="w-5 h-5" />
            <span className="font-semibold">{t.nav.home}</span>
          </Link>
          <LanguageToggle />
        </div>
      </nav>

      <div className="flex-grow flex items-center justify-center px-6 py-12">
        <div className="bg-white p-8 rounded-lg shadow-xl w-full max-w-md">
          <div className="flex justify-center mb-8">
            <Lock className="w-12 h-12 text-indigo-600" />
          </div>
          
          <h2 className="text-2xl font-bold text-center text-gray-900 mb-8">
            {t.auth.loginTitle}
          </h2>
          
          <form className="space-y-6" onSubmit={handleLogin}>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                {t.auth.email}
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                {t.auth.password}
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              />
            </div>

            <button
              type="submit"
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              {t.auth.loginButton}
            </button>
          </form>

          <p className="mt-4 text-center text-sm text-gray-600">
            {t.auth.noAccount}{' '}
            <Link to="/register" className="font-medium text-indigo-600 hover:text-indigo-500">
              {t.auth.registerButton}
            </Link>
          </p>
        </div>
      </div>

      <Footer />
    </div>
  );
}
