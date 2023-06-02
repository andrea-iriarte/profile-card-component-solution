import React from 'react'

const ProfileStats = ({ statistic, category }) => {
  return (
    <div className='stat-block'>
      <h3 className='stat'>{statistic}</h3>
      <p className='category'>{category}</p>
    </div>
  )
}

export default ProfileStats