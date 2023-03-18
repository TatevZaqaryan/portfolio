import { useEffect } from "react";
import detectDarkMode from "../../utils/detectDarkMode";
import { useLocalStorage } from "../../utils/useLocalStorege";
import moon from "./moon.svg";
import "./style.css";
import sun from "./sun.svg";
const BtnDarkMode = () => {
  const [darKMode, setDarkMode] = useLocalStorage("darKMode", detectDarkMode());

  useEffect(() => {
    if (darKMode === "dark") {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [darKMode]);

  useEffect(() => {
    window
      .matchMedia("(prefers-color-scheme: dark)")
      .addEventListener("change", (event) => {
        const newColorScheme = event.matches ? "dark" : "light";
        setDarkMode(newColorScheme);
      });
  }, [setDarkMode]);

  const toggleDarkMode = () => {
    setDarkMode((currentValue) => {
      return currentValue === "light" ? "dark" : "light";
    });
  };

  const btnNormal = "dark-mode-btn";
  const btnActive = "dark-mode-btn--active";
  return (
    <button
      className={darKMode === "dark" ? btnActive : btnNormal}
      onClick={toggleDarkMode}
    >
      <img src={sun} alt="Light mode" className="dark-mode-btn__icon" />
      <img src={moon} alt="Dark mode" className="dark-mode-btn__icon" />
    </button>
  );
};

export default BtnDarkMode;
