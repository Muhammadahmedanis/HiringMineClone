import { useState, useEffect } from 'react'
import './App.css'
import AppRouter from './Router';
import { Themeprovider } from './context/ThemeChangerContext';

function App() {
    const[themeMode, setThemeMode] = useState('light')
    const lightTheme = () => {
      setThemeMode('light');
    }

    const darkTheme = () => {
      setThemeMode('dark');
    }

    useEffect(() => {
      document.querySelector('html').classList.remove('light', 'dark');
      document.querySelector('html').classList.add(themeMode);
    
    }, [themeMode])

  return (
    <Themeprovider value={{themeMode, lightTheme, darkTheme}}>
      <AppRouter />
    </Themeprovider>
  )
}

export default App
