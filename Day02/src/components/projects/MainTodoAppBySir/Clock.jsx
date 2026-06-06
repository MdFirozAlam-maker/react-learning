import React, { useEffect, useState } from 'react'



const Clock = () => {

  const getCurrentDateTime = () => {
    const now = new Date();
    return `${now.toLocaleDateString()} - ${now.toLocaleTimeString()}`;
  }

  const [dateTime, setDateTime] = useState(getCurrentDateTime());

    useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const date = now.toLocaleDateString();

      const formatTime = now.toLocaleTimeString();
      setDateTime(`${date} - ${formatTime}`);
    }, 1000);

    return () => clearInterval(interval);
  }, []);
  return (
   
      <header>
        <h1>Todo List</h1>
        <h2 className="date-time">{dateTime}</h2>
      </header>
  )
}

export default Clock
