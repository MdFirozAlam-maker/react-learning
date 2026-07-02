// import React, { useEffect, useState } from 'react'



// const EffectChallenge = () => {
//   const [count, setCount] = useState(0);
//   const [name, setName] = useState("");
//   const [text, setText] = useState("");


//   useEffect(() => {
//     document.title = `Characters: ${text.length}`;
//   },[text])

//   useEffect(() => {
//     console.log("Count : ", count);
//   },[count]);


//   useEffect(() => {
//     console.log("Hello", name);
//     console.log("Name changed", name)
//   },[name]);


//   // useEffect(() => {
//   //   document.title = `Count: ${count}`;
//   // },[count]);


//   return (
//     <div className='container effect-container'>
//       <h1>useEffect Challenge</h1>
//       <p>
//         Count: <span>{count}</span>
//       </p>

//       <button onClick={() => setCount((prev) => prev+1)}>Increment</button>

//       <p>
//        Hello, <span>{name || "Guest"}</span>
//       </p>
//       <input type="text"
//         value={name}
//         onChange={(e) => setName(e.target.value)}
//        />

//        <textarea type="text" value={text} onChange={(e) => setText(e.target.value)}/>

//        <p>Characters {text.length}</p>
      
//     </div>
//   )
// }

// export default EffectChallenge



import React, { useEffect, useState } from 'react'

const EffectChallenge = () => {
  const [time, setTime] = useState(0);

  useEffect(() => {
   const intervalid = setInterval(() => {
    setTime((prev) => prev + 1)
   },1000)

   return () => clearInterval(intervalid);

  },[])
  return (
    <div>
      <p>Seconds: {time}</p>
    </div>
  )
}

export default EffectChallenge

