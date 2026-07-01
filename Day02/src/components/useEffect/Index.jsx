import React, { useEffect, useState } from 'react'

const Index = () => {
  const [date , setDate] = useState(() => new Date().toLocaleTimeString());

  useEffect(() => {
   const intervalId =  setInterval(() => {
       const updateDate = new Date();
    setDate(updateDate.toLocaleTimeString());
    },1000);

    return () => clearInterval(intervalId);
   
  },[])
  


  return (
    <div className='container effect-container'>
      <h1>Date : {date}</h1>
    </div>
  )
}

export default Index
