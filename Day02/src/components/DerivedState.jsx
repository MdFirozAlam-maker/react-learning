import React, { useState } from "react";

const DerivedState = () => {
  const [users, setUsers] = useState([
    { name: "Alice", age: 25 },
    { name: "Bob", age: 30 },
    { name: "Charlie", age: 35 },
  ]);

  const userCount = users.length;

  const totalAge = users.reduce((acc, curr) => {
     return acc + curr.age;
  }, 0);

  const averageAge = totalAge / userCount;

  return (
    <div>
      <h2>Users List</h2>
      {users.map((item, index) => (
        <div key={index}>
          <p>
            {item.name} - {item.age} years old
          </p>
        </div>
      ))}

      <p>Total Users: {userCount}</p>
      <p>Average Age: {averageAge}</p>
    </div>
  );
};

export default DerivedState;
