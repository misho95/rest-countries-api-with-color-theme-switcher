import { useEffect, useLayoutEffect, useState } from "react";
import { MdOutlineDarkMode, MdDarkMode } from "react-icons/md";

const Header = () => {
  const [dark, setDark] = useState("light");

  useLayoutEffect(() => {
    const localTheme = localStorage.getItem("theme");
    if (localTheme) {
      setDark(localTheme);
    }
  }, []);

  useEffect(() => {
    if (
      dark === "light" &&
      document.documentElement.classList.contains("dark")
    ) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      return;
    }

    if (dark === "dark") {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    }
  }, [dark]);

  return (
    <header className="w-full h-[80px] bg-white text-black dark:bg-[#2B3844] dark:text-white shadow-sm shadow-black/10 relative flex justify-center items-center">
      <div
        role="center-header-content"
        className="flex justify-between items-center w-customWidth"
      >
        <h1 className="text-[24px] select-none">Where in the world?</h1>
        <button
          onClick={() => setDark(dark === "light" ? "dark" : "light")}
          className="flex items-center justify-center gap-[10px]"
        >
          {!dark && (
            <>
              <MdOutlineDarkMode />
              <span>Dark Mode</span>
            </>
          )}
          {dark && (
            <>
              <MdDarkMode />
              <span>Light Mode</span>
            </>
          )}
        </button>
      </div>
    </header>
  );
};

export default Header;
