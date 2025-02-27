import React from 'react'
import './App.css'
function Team() {
  return (
    <>
        <h1 className='team_head'>Experienced <span className='highlight'>Team Members</span></h1>

        <div className="team_con">
            <img src='./team2.jpg' alt='Director image' className='team_img'/>
            <img src='./team1.jpg' alt='CEO image' className='team_img' />
        </div>
        
    </>
  )
}

export default Team