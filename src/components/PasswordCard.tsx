import React, { useState } from 'react';
import { Eye, EyeOff, Clipboard } from 'lucide-react';
import { getPasswords } from '../requests/dashboard.request';

interface PasswordCardProps {
  system: string;
  username: string;
  translations: {
    enterSecretWord: string;
    viewPassword: string;
    hidePassword: string;
    copyToClipboard: string;
  };
  systemId: number;
}

export function PasswordCard({ system, username, translations, systemId }: PasswordCardProps) {
  const [secretWord, setSecretWord] = useState('');
  const [password, setPassword] = useState<string | null>(null);
  const [copyMessage, setCopyMessage] = useState<boolean>(false);

  const handleTogglePassword = async () => {
    if (password) {
      // Oculta la contraseña y limpia el input de la palabra secreta
      setPassword(null);
      setSecretWord('');
    } else {
      try {
        const response = await getPasswords(secretWord, systemId);
        setPassword(response.password); // Muestra la contraseña
      } catch (error) {
        console.error("Error fetching password:", error);
      }
    }
  };

  const handleCopyToClipboard = () => {
    if (password) {
      navigator.clipboard.writeText(password);
      setCopyMessage(true);
      setTimeout(() => setCopyMessage(false), 2000);
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-4 space-y-4 transition-transform transform hover:scale-105 hover:shadow-lg">
      <div className="space-y-2">
        <h3 className="font-semibold text-lg text-gray-900">{system}</h3>
        <p className="text-gray-600">{username}</p>
        <div className="h-6 flex items-center space-x-2">
          <span className="text-gray-400">{password || '••••••••'}</span>
          {password && (
            <div onClick={handleCopyToClipboard} title={translations.copyToClipboard}>
              <Clipboard className="w-4 h-4 text-gray-500 cursor-pointer hover:text-gray-700" />
            </div>
          )}
        </div>
        {copyMessage && (
          <p className="text-green-500 text-xs mt-1 transition-opacity duration-300 ease-in-out">
            {translations.copyToClipboard}
          </p>
        )}
      </div>

      <div className="space-y-2">
        <input
          type="password"
          placeholder={translations.enterSecretWord}
          value={secretWord}
          onChange={(e) => setSecretWord(e.target.value)}
          className="w-full rounded-lg border-gray-300 focus:ring-indigo-500 focus:border-indigo-500 text-sm"
        />
        <button
          onClick={handleTogglePassword}
          disabled={!secretWord && !password}
          className={`w-full flex items-center justify-center space-x-2 px-3 py-2 rounded-lg text-sm ${
            secretWord || password
              ? 'bg-indigo-600 text-white hover:bg-indigo-700'
              : 'bg-gray-100 text-gray-400 cursor-not-allowed'
          } transition-colors`}
        >
          {password ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
          <span>{password ? translations.hidePassword : translations.viewPassword}</span>
        </button>
      </div>
    </div>
  );
}
