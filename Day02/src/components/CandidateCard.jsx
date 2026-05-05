import React from 'react'

const CandidateCard = ({name,role,experience,Available,skills}) => {
  return (
    <div style={{ border: "1px solid balck", padding: "10px", margin:"10px"}}>
      <h2>{name}</h2>
      <h4>{experience === 0 ? `${role} (Fresher)` : `${role} with ${experience} years of experience `}</h4>
      <p style={{color:Available ? "green" : "red"}}>Status: {Available ? "Available" : "Not Available"}</p>
   <h4>Skills:</h4>
   <ul>
    {skills.map((skill,index) => (
      <li key={index}>{skill}</li>
    ))}
   </ul>
    </div>
  )
}

export default CandidateCard
