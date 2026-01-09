// ********************************************DAY-1****************************************/
//  //-----------------------JSON-server setup & CRUD operations------------------------
import React, { useEffect, useState } from "react";
import axios from "axios";
function AxiosCRUD() {
    const [users, setUsers] = useState([]);
    const [newUser, setNewUser] = useState({ name: "", age: "" });
    const api = "http://localhost:3000/users";
   useEffect(() => {
    axios.get(api)
       .then((res) => setUsers(res.data))
       .catch((err) => console.log(err));
   }, []);
   const handleAdd = () => {
    axios.post(api, newUser)
       .then((res) => setUsers([...users, res.data]))
       .catch((err) => console.log(err));
   };
   const handleUpdate = (id) => {
    axios.put(`${api}/${id}`, { name: "Updated Name", age: 30 })
      .then((res) =>
          setUsers(users.map((u) => (u.id === id ? res.data : u)))
    )
      .catch((err) => console.log(err));
   };
   const handleDelete = (id) => {
    axios.delete(`${api}/${id}`)
      .then(() => setUsers(users.filter((u) => u.id !== id)))
      .catch((err) => console.log(err));
   };
   return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
        <h2>Axios CRUD Example</h2>
        {users.map((u) => (
            <div key={u.id}>
              {u.name} - {u.age}
              <button onClick={() => handleUpdate(u.id)}>Update</button>
              <button onClick={() => handleDelete(u.id)}>Delete</button>
            </div>  
        ))}
        <h3>Add New User</h3>
        <input 
          placeholder="Name"
          value={newUser.name}
          onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}
        />
        <input 
          placeholder="Age"
          value={newUser.age}
          onChange={(e) => setNewUser({ ...newUser, age: e.target.value })}
        />
        <button onClick={handleAdd}>Add</button>
    </div>
   );          
}
export default AxiosCRUD;


