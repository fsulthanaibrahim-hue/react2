import { createContext } from "react";


export const Context = createContext()
function ContextProvider({children}) {
    const name = "sulthana";
    return (
      <Context.Provider
       value= {{name}}
      >
        {children}
      </Context.Provider>
    );
}
export default ContextProvider;
