import { Component_Header } from "../../Components/Header";
import { Component_Main } from "../../Components/Main";
import { ThemeBackground } from "../../Components/Theme";
import { useState } from "react";

export const Header = () => {
  const [theme, setTheme] = useState("dark");

  const background_Theme = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme('light');
    }
  };

  return (
    <>
      <ThemeBackground toggle_theme={theme}/>
      <Component_Header />
      <Component_Main  function={background_Theme} text={theme === 'dark' ? 'Claro' : 'Escuro'}/>
    </>
  );
};
