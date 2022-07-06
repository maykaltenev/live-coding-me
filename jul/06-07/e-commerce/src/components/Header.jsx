import React, { useState } from "react";
import { MdLightMode, MdNightlight } from "react-icons/md";
import DropDown from "./DropDown";
export default function Header() {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [toggleTheme, setToggleTheme] = useState(false);
  return (
    <div
      style={{
        height: "70px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-evenly",
        cursor: "pointer",
      }}
      className={toggleTheme ? "light" : "dark"}
    >
      <div onClick={() => setToggleMenu(!toggleMenu)}>
        menu {toggleMenu ? "🔺" : "🔻"}
      </div>
      <div onClick={() => setToggleTheme(!toggleTheme)}>
        Theme {toggleTheme ? <MdLightMode /> : <MdNightlight />}
      </div>
      {toggleMenu && <DropDown />}
    </div>
  );
}
