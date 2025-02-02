import { createContext } from "react";

const ThemeContext = createContext();

const ThemeProvider = ({children})=>{
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
    }
    const data = {
      toggleTheme,
      theme
    }
  return(
    <ThemeContext.Provider value={data}>
      {children}
    </ThemeContext.Provider>
  )
}

export default ThemeProvider;