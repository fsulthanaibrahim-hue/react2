//====================================components1=============================================
//********************************************DAY-1****************************************/
//    //----------------------------useReducer-----------------------------------------
// import React from "react";
// import "./App.css"
// import CounterOne from "./components/CounterOne.jsx";

// function App() {
//   return (
//   <div className="App">
//      <CounterOne />
//   </div>
//   );
// }
// export default App;



//    //-----------------------JSON-server setup & CRUD operations------------------------
// import React from "react";
// import AxiosCRUD from "./components/Axios";
// function App() {
//     return (
//       <div>
//         <h1>React + Axios + JSON Server</h1>
//         <AxiosCRUD />
//       </div>
//     );
// }
// export default App;


//    //----------------------------------------Tasks------------------------------------------
// import React from "react";  
// import FetchUsers from "./components/FetchUsers"; 
// function App() {
//   return (
//     <div>
//         <h1>Fetch Data using Axios</h1>
//         <FetchUsers />
//     </div>
//   );
// }
// export default App;


//========================================Components2===========================================
//*********************************************DAY-2***************************************/
   //-----------------------Content.jsx, Navbar.jsx, ThemeContext.jsx-------------------
import React from "react";
import { ThemeProvider } from "./ThemeContext.jsx";
import Navbar from "./components2/Navbar.jsx";
import Content from "./components2/Content.jsx";
function App() {
    return (
        <ThemeProvider>
            <Navbar />
            <Content />
        </ThemeProvider>        
    );
}
export default App;






