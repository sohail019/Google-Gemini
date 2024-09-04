import {useContext} from "react";
import { assets } from "../../assets/assets";
import ThemeContext from "../../context/ThemeContext";
import { MdDarkMode, MdLightMode } from "react-icons/md";


export const NavBar = () => {
  const {theme, toggleTheme} = useContext(ThemeContext)
  const { user_icon } = assets;

  return (
    <div className="nav">
      <p>Gemini by Sohail</p>
      <div onClick={toggleTheme} className="theme-toggle">
        {theme === "light" ? <MdDarkMode /> : <MdLightMode />}
        <p>
        {theme === "light" ? "Light" : "Dark"}
        </p>
      </div>
      <img src={user_icon} alt="User Icon" />
    </div>
  );
};
