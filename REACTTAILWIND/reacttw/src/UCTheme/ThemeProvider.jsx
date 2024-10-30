import React, { useState } from 'react'
import ThemeContext from './ThemeContext'

export const ThemeProvider = ({ children }) => {
    
    const [Theme, SetTheme] = useState('bg-blue-300')
    
    let ChangeTheme = () => {
        SetTheme(Theme === 'bg-blue-300' ? 'bg-gray-700' : 'bg-blue-300')
    }
    return (
        <div>
            <ThemeContext.Provider value={{Theme, ChangeTheme}}>
                {children}
            </ThemeContext.Provider>
        </div>
    )
}
