import React, { useState } from 'react'

const Challenge = () => {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);


  const handleIncrement = () => {
    setCount((prev) => prev + step)
  }

  const handleDecrement = () => {
    setCount((prev) => prev - step);
  }

  const handleReset = () => {
    setCount(0);
  }
  return (
    <div className='container state-container'>
      <h1>useState Challenge</h1>

      <p>
        Count <span>{count}</span>
      </p>

      <div>
        <label>
          Step:
          <input type="number"
          value={step}
          onChange={(e) => setStep(Number(e.target.value))}
        />

        </label>
      </div>

      <div className='grid-three-cols'>
        <button onClick={handleIncrement} disabled = {count >= 10}>Increment</button>
        <button onClick={handleDecrement} disabled={count<= 0}>Decrement</button>
        <button onClick={handleReset}>Reset</button>
      </div>
    </div>
  )
}

export default Challenge
