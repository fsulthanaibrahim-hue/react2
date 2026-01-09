//====================================components=============================================
//********************************************DAY-1****************************************/
//    //------------------------useReducer(CounterOne.jsx)----------------------------
// import React from "react";
// import "./App.css"
// import CounterOne from "./components/CounterOne";
// function App() {
//   return (
//   <div className="App">
//      <CounterOne />
//   </div>
//   );
// }
// export default App;


 //------------------------useReducer Vs useState(CounterOne.jsx)--------------------------
// import React from "react";
// import CounterUseReducer from "./components/CounterOne";
// function App() {
//   return (
//     <div className="App">
//       <CounterUseReducer />
//     </div>
//   );
// }
// export default App;


   //------------------JSON-server setup & CRUD operations(Axios.jsx, UserCrud.jsx)--------------------
// import React from "react";
// import AxiosCRUD from "./components/AxiosCRUD";
// import UserCRUD from "./components/UserCRUD";
// function App() {
//     return (
//       <div>
//         <h1>React + Axios + JSON Server</h1>
//         <AxiosCRUD />
//         {/* <UserCRUD /> */}
//       </div>
//     );
// }
// export default App;



//*********************************************DAY-2***************************************/
   //-----------------------Content.jsx, Navbar.jsx, ThemeContext.jsx-------------------
// import React from "react";
// import { ThemeProvider } from "./ThemeContext.jsx";
// import Navbar from "./components/Navbar.jsx";
// import Content from "./components/Content.jsx";
// function App() {
//     return (
//         <ThemeProvider>
//             <Navbar />
//             <Content />
//         </ThemeProvider>        
//     );
// }
// export default App;


//  //----------------------------useContext(Nav.jsx, Btn.jsx)--------------------------------
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


//----------(useFetch.jsx, useLocalStorage.jsx,FetchExample.jsx, useLocalStorage.jsx)---------
// import React from "react";
// import FetchExample from "./components/FetchExample";
// import StorageExample from "./components/StorageExample";
// function App() {
//    return (
//       <div style={{ textAlign: "center", marginTop: "30px" }}>
//          <h1>Custom Hooks Example</h1>
//          <StorageExample />
//          <hr />
//          <FetchExample />
//       </div>
//    );
// }
// export default App;


//************BrowserRouter, Routes, Route, Link, Navigate****************/
//----------------------pages(Home.jsx, About.jsx, Login.jsx)----------------------
// import React from "react";
// import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
// import Home from "./pages/Home";
// import About from "./pages/About";
// import Login from "./pages/Login";
// function App() {
//   return (
//     <BrowserRouter>
//        <nav style={{margin: "50px"}}>
//          <Link to="/"><button>Home</button></Link>
//          <Link to="/about"><button>About</button></Link>
//          <Link to="/login"><button>Login</button></Link>
//        </nav>
//        <Routes>
//          <Route path="/" element={<Home />} />
//          <Route path="/about" element={<About />} />
//          <Route path="/login" element={<Login />} />
//        </Routes>
//     </BrowserRouter>
//   );
// }
// export default App;



//---------------------------useContext(context.jsx, context1.jsx)-------------------------
   // import React from "react";
   // import Counter from "./components/context1";
   // import ContextProvider from "./components/context";
   // import CounterOne from "./components/CounterOne";
   // function App() {
   //    return (
   //       <div>
   //          <ContextProvider>
   //             {/* <Counter /> */}
   //             <CounterOne />
   //          </ContextProvider>
   //       </div>
   //    );
   // }
   // export default App;

