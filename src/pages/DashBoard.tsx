import React, { useState } from 'react';
import { useLanguage } from '../hooks/useLanguage';
import { Footer } from '../components/Footer';
import { LanguageToggle } from '../components/LanguageToggle';
import { Home, Eye, EyeOff, Key } from 'lucide-react';
import { Link } from 'react-router-dom';
import { SecretWordModal } from '../components/SecretWordModal';
import { PasswordCard } from '../components/PasswordCard';
import { getPassSuggestion, savePassword } from '../requests/dashboard.request';

export function Dashboard() {
  const { translations: t } = useLanguage();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    system: '',
    username: '',
    password: ''
  });

  // Mock data for cards - in a real app, this would come from a database
  const mockPasswords = [
    { id: 1, system: 'Gmail', username: 'user@gmail.com' },
    { id: 2, system: 'Facebook', username: 'user.name' },
    { id: 3, system: 'Twitter', username: 'username123' },
    { id: 4, system: 'Instagram', username: 'user.gram' },
    { id: 5, system: 'LinkedIn', username: 'professional.user' },
  ];

  const handleGeneratePassword = async () => {
    try {
      const response = await getPassSuggestion();
      setFormData((prevData) => ({
        ...prevData,
        password: response.password // Actualiza el campo de password con la respuesta
      }));
    } catch (error) {
      console.error("Error generating password:", error);
    }
  };

  const handleSave = async () => {
    try {
      // Llamar a savePassword pasando los valores de formData
      const response = await savePassword(formData.password, formData.system, formData.username);
      console.log('Password saved:', response);
      // Aquí puedes manejar lo que suceda después de guardar, como limpiar el formulario o mostrar una notificación
      setFormData({ system: '', username: '', password: '' });
    } catch (error) {
      console.error("Error saving password:", error);
    }
  };

  if (!t || !t.dashboard) {
    return null; // Or a loading spinner
  }

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

      <main className="flex-grow p-6">
        <div className="max-w-7xl mx-auto space-y-8">
          {/* Secret Word Button */}
          <button
            onClick={() => setIsModalOpen(true)}
            className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-6 py-3 rounded-lg shadow-lg hover:from-purple-700 hover:to-indigo-700 transform hover:scale-105 transition-all duration-200 flex items-center space-x-2"
          >
            <Key className="w-5 h-5" />
            <span>{t.dashboard.secretWordButton}</span>
          </button>

          {/* Password Form */}
          <div className="bg-white p-6 rounded-lg shadow-md space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <input
                type="text"
                placeholder={t.dashboard.system}
                value={formData.system}
                onChange={(e) => setFormData({ ...formData, system: e.target.value })}
                className="rounded-lg border-gray-300 focus:ring-indigo-500 focus:border-indigo-500"
              />
              <input
                type="text"
                placeholder={t.dashboard.username}
                value={formData.username}
                onChange={(e) => setFormData({ ...formData, username: e.target.value })}
                className="rounded-lg border-gray-300 focus:ring-indigo-500 focus:border-indigo-500"
              />
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  placeholder={t.dashboard.password}
                  value={formData.password}
                  onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                  className="rounded-lg border-gray-300 focus:ring-indigo-500 focus:border-indigo-500 w-full pr-10"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
            </div>

            <div className="flex space-x-4">
              <button
                onClick={handleGeneratePassword}
                className="bg-gray-600 text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition-colors"
              >
                {t.dashboard.generatePassword}
              </button>
              <button
                onClick={handleSave}
                className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors"
              >
                {t.dashboard.save}
              </button>
            </div>
          </div>

          {/* Password Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {mockPasswords.map((password) => (
              <PasswordCard 
                key={password.id} 
                {...password}
                translations={t.dashboard}
              />
            ))}
          </div>
        </div>
      </main>

      <Footer />
      
      <SecretWordModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)}
        translations={t.dashboard}
      />
    </div>
  );
}
