// import React, { createContext, useState } from "react";
//   // Step:1 Create the Context
// export const ThemeContext = createContext();   //createContext nn paranjal > oru shared data undakunnu(theme)
//   // Step:2 Create the Provider
// export function ThemeProvider({ children }) {
//     const [theme, setTheme] = useState("light");   //useState nn paranjal => starting value light mode 
//   // Step:3 Toggle function 
//     const toggleTheme = () => {             //toggleTheme nn paranjal => mode maattan
//         setTheme((prev) => (prev === "light" ? "dark" : "light"));
//     };
//   // Step:4 Provide values to all children 
//     return (
//         <ThemeContext.Provider value={{ theme, toggleTheme }}> 
//             {children}
//         </ThemeContext.Provider>      //ThemeContext.provider nn paranjal => app nne surround cheyth share cheyyunaa theme info 
//     ); 
// }





