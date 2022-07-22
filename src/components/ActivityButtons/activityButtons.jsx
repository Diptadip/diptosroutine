import React from 'react'
import './activityButtons.css'
import {classLink} from './getLink';


function activityButtons() {
  return (
    <div className='buttons_container'>
        <div className='botton'>
            <a href={classLink} target="_blank" rel="noreferrer"><button className="btn">Join Class</button></a>
        </div>
        
    </div>
  )
}

export default activityButtons