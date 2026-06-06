// const users = [
//   { name: "Alice", age: 25 },
//   { name: "Bob", age: 30 },
//   { name: "Charlie", age: 35 },
//   { name: "Angels", age: 45 },
// ];

// import React from 'react'

// const DerivedState = () => {
//   return (
//     <div>
//       <h1>Users Lists</h1>

//           {users.map((user) => {
//             <div>
//               <p>{user.name}</p>
//               <p>{user.age}</p>
//             </div>

//      })}
//     </div>
//   )
// }

// export default DerivedState

import React, { useState } from "react";

const CrudExample = () => {
  const [users, setUsers] = useState([
    { id: 1, name: "Alice", age: 25 },
    { id: 2, name: "Bob", age: 30 },
    { id: 3, name: "Charlie", age: 35 },
  ]);

  const [editUser, setEditUser] = useState(null);
  const [name, setName] = useState("");

  // DELETE
  const deleteUser = (id) => {
    setUsers((prev) => prev.filter((user) => user.id !== id));
  };

  // EDIT click
  const handleEdit = (user) => {
    setEditUser(user);
    setName(user.name);
  };

  // UPDATE
  const updateUser = () => {
    setUsers((prev) =>
      prev.map((user) => (user.id === editUser.id ? { ...user, name } : user)),
    );

    setEditUser(null);
    setName("");
  };

  return (
    <div>
      <h1>CRUD USERS</h1>

      {users.map((user) => (
        <div key={user.id}>
          <p>{user.name}</p>
          <p>{user.age}</p>

          <button onClick={() => handleEdit(user)}>Edit</button>

          <button onClick={() => deleteUser(user.id)}>Delete</button>
        </div>
      ))}

      {/* EDIT FORM */}
      {editUser && (
        <div>
          <h3>Edit User</h3>

          <input value={name} onChange={(e) => setName(e.target.value)} />

          <button onClick={updateUser}>Save</button>
        </div>
      )}
    </div>
  );
};

export default CrudExample;
