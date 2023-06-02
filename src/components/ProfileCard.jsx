import React from 'react'

const ProfileCard = ({ name, age, location, profilePicture }) => {
  return (
    <div className='profile'>
      <img src={profilePicture} alt="profile-pic" className='profile-pic'/>
      <div className='profile-info'>
        <div className='profile-id'>
          <h3 className='name'>{name}</h3>
          <p className='age'>{age}</p>
        </div>
        <p className='location'>{location}</p>
      </div>
    </div>
  )
}

export default ProfileCard