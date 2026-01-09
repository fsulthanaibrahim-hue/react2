// import React from "react";
// import Btn from "./Btn";
// export default function Nav() {
//     return (
//         <div className="nav">
//             <Btn />
//         </div>
//     );  
// }

// import React, { useContext, useState } from "react";
// import { Context } from "./App";
// export default  function Btn() {
//     const [signedIn, setSignedIn] = useContext(Context);
//     return (
//         <button onClick={() => setSignedIn(!signedIn)}>
//             {signedIn ? 'Sign out' : 'Sign in' }
//         </button>
//     );
// }



// import React, { useState } from "react";
// import Nav from './Nav';
// export const Context = React.createContext();
// function App() {
//     const [signedIn, setSignedIn] = useState(false)
//     return (
//         <Context.Provider value={[signedIn, setSignedIn]}>
//           <Nav />
//           <h1>{signedIn ? "Signed in" : "Sign out"}</h1>
//         </Context.Provider>
//     );
// }
// export default App;
