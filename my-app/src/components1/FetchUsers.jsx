//***************************************DAY-1****************************************/
//   //--------------------------------------Task-----------------------------------
// import React, { useEffect, useState } from "react";
// import axios from "axios";
// function FetchUsers() {
//     const [users, setUsers] = useState([]);
//     useEffect(() => {
//         axios
//           .get("http://localhost:3001/users")
//           .then((response) => {
//             console.log("Fetched data:", response);
//             setUsers(response.data);  
//           })
//           .catch((error) => {
//             console.error("Error fetching data:", error);
//           });
//     }, []);
//     return (
//         <div style={{ textAlign: "center", marginTop: "20px" }}>
//             <h2>User List</h2>
//             {users.map((user) => (
//                 <div key={user.id}>
//                    {user.name} - {user.age}
//                 </div>   
//             ))}
//         </div>
//     );
// }
// export default FetchUsers;





