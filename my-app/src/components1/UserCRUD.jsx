//********************************************DAY-1****************************************/
//---------------------------JSON-server setup & CRUD operations--------------------------
// import React, { useEffect, useState } from "react";
// function UserCRUD() {
//     const [users, setUsers] = useState([]);
//     const [newUser, setNewUser] = useState({ name: "", email: "" });
//    // READ
//    useEffect(() => {
//     fetch("https://jsonplaceholder.typicode.com/users")
//       .then((res) => res.json())
//       .then((data) => setUsers(data));
//    }, []);
//    // CREATE
//    const handleAdd = () => {
//     fetch("https://jsonplaceholder.typicode.com/users", {
//        method: "POST",
//        headers: { "Content-Type": "application/json" },
//        body: JSON.stringify(newUser),
//     })
//        .then((res) => res.json())
//        .then((data) => setUsers([...users, data]));
//    };
//    return (
//     <div>
//         <h2>User List</h2>
//         {users.map((u) => (
//             <div key={u.id}>
//                 {u.name} - {u.email}
//             </div>    
//         ))}
//         <h3>Add User</h3>
//         <input
//            placeholder="Name"
//            value={newUser.name}
//            onChange={(e) =>setNewUser({ ...newUser, name: e.target.value })}
//         />
//         <input 
//            placeholder="Email"
//            value={newUser.email}
//            onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}   
//         />
//         <button onClick={handleAdd}>Add</button>   
//     </div>
//    );          
// }
// export default UserCRUD;







