import React, { useEffect, useState } from "react";

const IntroState = () => {
  const [count, setCount] = useState(() => {
    const savedCount = localStorage.getItem("count");
    return savedCount ? JSON.parse(savedCount) : 0;
  });

  const handleClick = () => {
    setCount((prev) => prev + 1);
  };

  const handleClickdecrease = () => {
    setCount((prev) => prev - 1);
  };

  useEffect(() => {
    localStorage.setItem("count", JSON.stringify(count));
  }, [count]);

  return (
    <>
      <div
        style={{
          display: "flex",
          minHeight: "100vh",
          width: "100%",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          background: "linear-gradient(135deg, #eef2f3, #8e9eab)",
          fontFamily: "Arial, sans-serif",
          padding: "20px",
        }}
      >
        {/* Counter Box */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            background: "rgba(255,255,255,0.2)",
            padding: "40px",
            borderRadius: "25px",
            backdropFilter: "blur(10px)",
            boxShadow: "0 10px 30px rgba(0,0,0,0.2)",
          }}
        >
          {/* Count display */}
          <h1
            style={{
              fontSize: "80px",
              marginBottom: "30px",
              color: "#222",
              background: "white",
              padding: "20px 60px",
              borderRadius: "20px",
              boxShadow: "0 10px 25px rgba(0,0,0,0.15)",
            }}
          >
            {count}
          </h1>

          {/* Buttons */}
          <div
            style={{
              display: "flex",
              gap: "20px",
            }}
          >
            <button
              onClick={handleClick}
              style={{
                padding: "15px 40px",
                fontSize: "20px",
                fontWeight: "bold",
                color: "white",
                background: "linear-gradient(45deg, #007BFF, #00C6FF)",
                border: "none",
                borderRadius: "12px",
                cursor: "pointer",
                boxShadow: "0 8px 20px rgba(0,123,255,0.4)",
              }}
            >
              Increment
            </button>

            <button
              onClick={handleClickdecrease}
              style={{
                padding: "15px 40px",
                fontSize: "20px",
                fontWeight: "bold",
                color: "white",
                background: "linear-gradient(45deg, #ff4b2b, #ff416c)",
                border: "none",
                borderRadius: "12px",
                cursor: "pointer",
                boxShadow: "0 8px 20px rgba(255,65,108,0.4)",
              }}
            >
              Decrement
            </button>
          </div>
        </div>

        {/* Child Component */}
        <div
          style={{
            marginTop: "40px",
            width: "320px",
          }}
        >
          <ChildComp />
        </div>
      </div>
    </>
  );
};

export default IntroState;

const ChildComp = React.memo(function ChildComp() {
  console.log("child component rendered");

  return (
    <div
      style={{
        background: "white",
        padding: "25px",
        borderRadius: "18px",
        textAlign: "center",
        boxShadow: "0 10px 25px rgba(0,0,0,0.15)",
        transition: "0.3s ease",
      }}
    >
      <h2
        style={{
          marginBottom: "10px",
          color: "#333",
        }}
      >
        Child Component
      </h2>

      <p
        style={{
          color: "#666",
          fontSize: "16px",
          lineHeight: "1.5",
        }}
      >
        This component is rendered below the counter with a clean card UI.
      </p>
    </div>
  );
})
