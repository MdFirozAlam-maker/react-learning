import React, { useState } from "react";

const LiftingStateUp = () => {
  const [inputValue, setIputValue] = useState("");
  return (
    <div>
      <InputComponent inputValue={inputValue} setIputValue = {setIputValue}/>
      <DisplayComponent inputValue={inputValue} />
    </div>
  );
};

export default LiftingStateUp;

const InputComponent = ({inputValue , setIputValue}) => {
  
  return (
    <>
      <input
        type="text"
        placeholder="Type Here..."
        value={inputValue}
        onChange={(e) => setIputValue(e.target.value)}
      />
    </>
  );
};


const DisplayComponent = ({inputValue}) => {
  return <p>The current input value is: {inputValue}</p>
}