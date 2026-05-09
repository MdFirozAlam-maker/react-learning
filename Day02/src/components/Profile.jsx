import React from 'react'
import ProfileCard from './ProfileCard'
const Profile = () => {
  return (
    <div>
      <h1>Profile Card Challenge</h1>
      <ProfileCard 
      name="Alice"
      age={30}
      greetings={
        <div>
          <strong>Hi Alice, have a wonderful day !</strong>
        </div>
      }
      ><p>Hobbies: Reading, Hiking</p>
      <button>Contact</button>
      
      </ProfileCard>

      <ProfileCard
        name="Bob"
        age={25}
        greetings={
          <div>
            <strong>Hello Bob, keep up the great work!</strong>
          </div>
        }
      ><p>Hobbies: Reading, Hiking</p>
      <button>Contact</button>

      </ProfileCard>
    </div>
  )
}

export default Profile
