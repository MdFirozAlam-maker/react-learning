import React from 'react'

const Practices = () => {
  const student = [1,2,3];
  return (
    <div>
      <p>{student.length === 0 && "No Student found"}</p>
      <p>Number of Students: {student.length}</p>
    </div>
  )
}

export default Practices