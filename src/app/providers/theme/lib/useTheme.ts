import { useContext } from 'react'
import { LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext } from './ThemeContext'

interface IUseThemeResult {
    toggleTheme: () => void
    theme: Theme
}

export const useTheme = (): IUseThemeResult => {
    const { setTheme, theme } = useContext(ThemeContext) 

    const toggleTheme = () => {
        const newTheme = theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT
        setTheme(newTheme)
        localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme)
    }


    return { toggleTheme, theme }
}
