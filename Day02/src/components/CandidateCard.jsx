import React, { useState } from 'react'

const CandidateCard = ({name,role,experience,isAvailable,skills}) => {
  const [available, setAvailabe] = useState(isAvailable);
  const [showSkills, setShowSkills]  = useState(false);
  return (
    <div style={{ border: "1px solid balck", padding: "10px", margin:"10px"}}>
      <h2>{name}</h2>
      <h4>{experience === 0 ? `${role} (Fresher)` : `${role} with ${experience} years of experience `}</h4>
      <p style={{color:available ? "green" : "red"}}>Status: {available ? "Available" : "Not Available"}</p>
      <button onClick={() => setAvailabe(!available)}>Toggle Availability</button>
   <h4>Skills:</h4>
     <button onClick={() => setShowSkills(!showSkills)}>
      {showSkills ? "Hide Skills" : "Show Skills"}
    </button>
   {showSkills && (
   <ul>
    {skills.map((skill,index) => (
      <li key={index}>{skill}</li>
    ))}
   </ul>
   )}
    </div>
  )
}

export default CandidateCard
