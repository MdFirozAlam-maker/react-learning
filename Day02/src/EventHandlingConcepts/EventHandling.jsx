import React from 'react'

const EventHandling = () => {
  const containerStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    backgroundColor: "#1e1e2f",
  }

  const buttonStyle = {
    padding:"1rem 2rem",
    fontSize: "1.2rem",
    borderRadius: "10px",
    cursor: "pointer",
    backgroundColor:"red",
    color: "#000",
    fontWeight: "bold",
    boxShadow: "0 4px 10px rgba(0,0,0,0.3)"
  }

  // const handleClick = function () {
  //   alert("kuch bhi krle nhi hone wla h kcuh,,, failed...?????")
  // }

  const handleClick = () => {
    alert("Hey kitna bhi padhle nhi hone wla h kuch,,, fuckkkkkkkkkkkkkkk")
  }


  return (
    <div style={containerStyle}>
      <button style={buttonStyle} onClick={handleClick}>click me</button>
    </div>
  )
}

export default EventHandling
