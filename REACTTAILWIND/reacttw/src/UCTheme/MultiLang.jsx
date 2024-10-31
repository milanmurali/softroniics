import React, { useContext } from 'react'
import LanguageContext from './LanguageContext'

export const MultiLang = () => {
  const { Language, ChangeLanguage } = useContext(LanguageContext);
  console.log(Language);

  const handleChange = (event) => {
    ChangeLanguage(event.target.value);
  };
  let translations = {
    en: 'Hi Hello',
    fr: 'Bonjour'


  }
  return (
    <div className="bg-gray-50 min-h-screen flex flex-col items-center justify-center p-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Multi Language Support</h1>

      <div className="flex items-center space-x-4">
        <label htmlFor="language-select" className="text-lg font-medium text-gray-700">
          Choose Language:
        </label>
        <select
          id="language-select"
          value={Language}
          onChange={handleChange}
          className="bg-white border border-gray-300 text-gray-700 py-2 px-4 rounded-lg shadow focus:outline-none focus:border-blue-500"
        >
          <option value="en">English</option>
          <option value="fr">French</option>
        </select>
      </div>

      <h2 className="mt-8 text-2xl font-semibold text-blue-600">
        {translations[Language]}
      </h2>
    </div>

  )
}
