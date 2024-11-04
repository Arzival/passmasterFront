import React, { useState } from 'react';
import { Eye } from 'lucide-react';

interface PasswordCardProps {
  system: string;
  username: string;
  translations: {
    enterSecretWord: string;
    viewPassword: string;
  };
}

export function PasswordCard({ system, username, translations }: PasswordCardProps) {
  const [secretWord, setSecretWord] = useState('');

  return (
    <div className="bg-white rounded-lg shadow-md p-4 space-y-4 transition-transform transform hover:scale-105 hover:shadow-lg">
      <div className="space-y-2">
        <h3 className="font-semibold text-lg text-gray-900">{system}</h3>
        <p className="text-gray-600">{username}</p>
        <div className="h-6">
          <span className="text-gray-400">••••••••</span>
        </div>
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
          disabled={!secretWord}
          className={`w-full flex items-center justify-center space-x-2 px-3 py-2 rounded-lg text-sm ${
            secretWord
              ? 'bg-indigo-600 text-white hover:bg-indigo-700'
              : 'bg-gray-100 text-gray-400 cursor-not-allowed'
          } transition-colors`}
        >
          <Eye className="w-4 h-4" />
          <span>{translations.viewPassword}</span>
        </button>
      </div>
    </div>
  );
}
