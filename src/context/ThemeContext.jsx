import { useEffect } from "react";
import { useState, createContext } from "react";

const ThemeContext = createContext()

export const ThemeProvider = ({children}) => {
    const [theme, setTheme] = useState(() => {
      // ? Check localStorage for a saved theme, default to light if none is found
      const savedTheme = localStorage.getItem("theme")
      return savedTheme ? savedTheme : "light"
    })

    // ? Update localStorage whenever theme changes
    useEffect(() => {
      localStorage.setItem("theme", theme)
    }, [theme])

    //* Function to toggle theme
    const toggleTheme = () => {
        setTheme((prevTheme) =>  (prevTheme === "light" ? "dark" : "light"))
    }

    return (
      <ThemeContext.Provider value={{ theme, toggleTheme }}>
        {children}
      </ThemeContext.Provider>
    );
}



export default ThemeContext