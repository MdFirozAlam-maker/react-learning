import React, { useEffect, useState } from "react";

const Pokemon = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((error) => console.log(error));
  }, []);
  return (
    <div className="container effect-container">
      <ul>Data : </ul>
      {data.map((currData) => {
        return <li key={currData.id}>{currData.title}</li>;
      })}
    </div>
  );
};

export default Pokemon;
