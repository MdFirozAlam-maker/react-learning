import React from "react";
import { useState } from "react";

const Index = () => {
  const [count, setCount] = useState(0);

  return (
    <div style={{ textAlign: "center", margin: "10px 10px" }}>
      <h1>useState Hooks!</h1>
      <br />
      <p style={{ marginBottom: "20px" }}>Count : {count}</p>
      <button
        style={{
          backgroundColor: "black",
          color: "white",
          borderRadius: "10px",
          padding: "10px",
        }}
        onClick={() => setCount((count) => count + 1)}
      >
        Increment
      </button>
    </div>
  );
};

export default Index;
