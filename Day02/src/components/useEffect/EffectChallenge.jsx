import React, { useEffect, useState } from 'react'

const EffectChallenge = () => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");

  useEffect(() => {
    console.log("Count : ", count);
  },[count]);


  useEffect(() => {
    console.log("Message : ", name)
  },[name]);


  useEffect(() => {
    document.title = `Count: ${count}`;
  },[count]);


  return (
    <div className='container effect-container'>
      <h1>useEffect Challenge</h1>
      <p>
        Count: <span>{count}</span>
      </p>

      <button onClick={() => setCount((prev) => prev+1)}>Increment</button>

      <p>
        Name: <span>{name}</span>
      </p>
      <input type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
       />
      
    </div>
  )
}

export default EffectChallenge
