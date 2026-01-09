// ********************************************DAY-1****************************************/
   //----------------------------useReducer-----------------------------------------
// import React, { useReducer } from "react";

// const initialState = 0
// const reducer = (state, action) => {
//    switch(action) {
//     case "increment":
//         return state + 1
//     case "decrement":
//         return state - 1
//     case "reset":
//         return initialState  
//     default:
//         return state             
//    }
// };
// function CounterOne() {
//      const [count, dispatch] = useReducer(reducer, initialState);
//     return (
//         <div style={{ padding: "20px" }}>
//             <div>Count - {count}</div>
//             <button onClick={() => dispatch("increment")}>Increment</button>
//             <button onClick={() => dispatch("decrement")}>Decrement</button>
//             <button onClick={() => dispatch("reset")}>Reset</button>
//         </div>
//     ); 
// }
// export default CounterOne;


// ------------------------------useReducer Vs useState------------------------------------
// import React, { useReducer } from "react";
// const initialState = { count: 0, step: 1 };
// const reducer = (state, action) => {
//     switch(action.type) {
//         case "increment":
//             return { ...state, count: state.count + state.step };
//         case "decrement":
//             return { ...state, count: state.count - state.step };
//         case "reset":
//             return initialState;
//         case "setStep":
//             return { ...state, step: action.value };            
//         default:
//             return state;    
//     }
// };
// function CounterUseReducer() {
//     const [state, dispatch] = useReducer(reducer, initialState);
//    return (
//     <div style={{ textAlign: "center", marginTop: "50px" }}>
//         <h1>Count: {state.count}</h1>
//         <input
//            type="number"
//            value={state.step}
//            onChange={(e) => dispatch({ type: "setStep", value: Number(e.target.value) })}
//         />
//         <button onClick={() => dispatch({ type: "increment" })}>Increment</button>  
//         <button onClick={() => dispatch({ type: "decrement"})}>Decrement</button> 
//         <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
//     </div>
//    );
// }
// export default CounterUseReducer;


// import React, { useReducer } from "react";
// const initialState = 0
// const reducer = (state, action) => {
//    switch(action) {
//     case "increase":
//         return state + 1;
//      case "decrease":
//         return state - 1;
//       case "reset":
//         return initialState;
//       default:
//         return state;       
//    }
// };
// function CounterOne() {
//     console.log("rendered")
//     const [count, dispatch] = useReducer(reducer, initialState);
//     return (
//         <div>
//             <div>Count : {count}</div>
//             <button onClick={() =>dispatch("increase")}>Increase</button>
//             <button onClick={() => dispatch("decrease")}>Decrease</button>
//             <button onClick={() => dispatch("reset")}>Reset</button>
//         </div>
//     );
// }
// export default CounterOne;