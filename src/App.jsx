import { useState } from 'react'
import './App.css'
import ProfileCover from './components/ProfileCover'
import ProfileCard from './components/ProfileCard'
import ProfileStats from './components/ProfileStats'
import{ profile, profileStats } from './data/data'
import top from './images/bg-pattern-top.svg'
import bottom from './images/bg-pattern-bottom.svg'

const Profile = () => {
  return (
   <div className='card'>
    <div className='profile-main'>
      <ProfileCover />
      <ProfileCard {...profile} />
    </div>
    <hr />

    <div className='stats-container'>
      {profileStats.map((item) => (
        <ProfileStats {...item} />
      ))}
    </div>
    
   </div>
  )
}

function App() {

  return (
    <div className='app-container'>
      <div className='top-container'>
        <img src={top} alt="" className='top'/>
      </div>
      <div className='bottom-container'>
        <img src={bottom} alt="" className='bottom' />
      </div>
      
      
      <div className='App'>
        <Profile />
      </div>
    </div>
  )
}

export default App
