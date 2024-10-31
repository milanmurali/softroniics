import React, { useState } from 'react'
import LanguageContext from './LanguageContext'

export const LanguageProvider = ({ children }) => {
  const [Language, SetLanguage] = useState('en')

  const ChangeLanguage = (lang) => {
    SetLanguage(lang);
};
  return (
    <div>
      <LanguageContext.Provider value={{Language,ChangeLanguage}}>
        {children}
      </LanguageContext.Provider>
    </div>
  )
}
