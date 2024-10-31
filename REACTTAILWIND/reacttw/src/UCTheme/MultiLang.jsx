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
    ml: 'Bonjour'

  }
  return (
    <div>
      <h1>Multi Language Support</h1>
      <select id="language-select" value={Language} onChange={handleChange}>
        <option value="en">English</option>
        <option value="ml">Malayalam</option>
      </select>
      <h1>{translations[Language]}</h1>
    </div>
  )
}
