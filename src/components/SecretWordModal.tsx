import React, { useState } from 'react';
import { saveSecretWord } from '../requests/dashboard.request';

interface SecretWordModalProps {
  isOpen: boolean;
  onClose: () => void;
  translations: {
    secretWord: string;
    secretWordDescription: string;
    cancel: string;
    accept: string;
    enterSecretWord: string;
  };
}

export function SecretWordModal({ isOpen, onClose, translations }: SecretWordModalProps) {
  const [secretWord, setSecretWord] = useState('');

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      // Llamada a la request saveSecretWord con el valor del input
      const response = await saveSecretWord(secretWord);
      console.log('Secret word saved:', response);
      onClose(); // Cerrar el modal después de guardar
    } catch (error) {
      console.error("Error saving secret word:", error);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg shadow-xl max-w-md w-full p-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">{translations.secretWord}</h2>
        
        <p className="text-gray-600 mb-6">
          {translations.secretWordDescription}
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            value={secretWord}
            onChange={(e) => setSecretWord(e.target.value)}
            placeholder={translations.enterSecretWord}
            className="w-full rounded-lg border-gray-300 focus:ring-indigo-500 focus:border-indigo-500"
          />

          <div className="flex justify-end space-x-4">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-gray-600 hover:text-gray-800"
            >
              {translations.cancel}
            </button>
            <button
              type="submit"
              className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors"
            >
              {translations.accept}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
