import React from 'react'
import './App.css'
function Team() {
  return (
    <>
        <h1 className='team_head'>Experienced <span className='highlight'>Team Members</span></h1>

        <div className="team_con">
            <img src='./team2.jpg' alt='SVMIRA Director image' className='team_img'/>
            <img src='./team1.jpg' alt='SVMIRA CEO image' className='team_img' />
            <img src='./team3.jpg' alt='SVMIRA Manager image' className='team_img' />
            <img src='./team4.jpg' alt='SVMIRA Agent image' className='team_img' />
        </div>
        
    </>
  )
}

export default Team