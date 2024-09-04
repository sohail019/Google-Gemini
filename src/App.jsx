import { useContext, useEffect } from "react";
import { Main } from "./components/Main/Main";
import { Sidebar } from "./components/Sidebar/Sidebar";
import ThemeContext from "./context/ThemeContext";

export const App = () => {
  const {theme} = useContext(ThemeContext)
  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  return (
    <>
      <Sidebar />
      <Main />
    </>
  );
};
