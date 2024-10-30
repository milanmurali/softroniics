import React, { useContext } from 'react'
import ThemeContext from './ThemeContext'
import { ThemeProvider } from './ThemeProvider';

export const TestTheme = () => {
    const ThemeValue = useContext(ThemeContext)
    console.log(ThemeValue);

    return (
        <div>
            <div className={ThemeValue.Theme}><h2>hello</h2>
                <button onClick={ThemeValue.ChangeTheme}>click</button>

            </div>
        </div>
    )
}
