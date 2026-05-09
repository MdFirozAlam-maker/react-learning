import React from 'react'


const ProfileCard = ({name,age,greetings,children}) => {
  return (
    <div>
      <h1>Name:{name}</h1>
      <h3>Age:{age}</h3>
      <div>{greetings}</div>

      <div>{children}</div>
    </div>
  )
}

export default ProfileCard
