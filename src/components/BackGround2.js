import '../styles/BackGround2Styles.css'

import React from 'react'

const BackGround2 = ({ heading, text }) => {
  return (
    <div className='background-2'>
        <div className='heading'>
            <h1>{ heading }</h1>
            <p>{ text }</p>
        </div>
    </div>
  )
}

export default BackGround2;