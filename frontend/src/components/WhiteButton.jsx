import React from 'react'

const WhiteButton = (props) => {
  return (
    <button className='whiteButton' onClick={props.onClick} >
      <div className='top' style={{backgroundColor:"#00c9a7",fontFamily: "'Algance', sans-serif",padding:"1vh"}}> 
        {props.text}
      </div>
      <div className='bottom'>
      </div>
    </button>
  )
}

export default WhiteButton