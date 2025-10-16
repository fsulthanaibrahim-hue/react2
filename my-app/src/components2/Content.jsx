import React, { useContext } from "react";
import { ThemeContext } from "../ThemeContext";
function Content() {
    const { theme } = useContext(ThemeContext);     //useContext use cheythu theme value edukkunnu.
   return (                                          //Theme light aanenkil white background; dark aanenkil gray background.
    <div style={{
        padding: "20px",
        backgroundColor: theme === "light" ? "#fff" : "#555",
        color: theme === "light" ? "#000" : "#fff"
    }}>
        <p>This is content area in {theme} mode.</p>
    </div>
   );
}
export default Content;




