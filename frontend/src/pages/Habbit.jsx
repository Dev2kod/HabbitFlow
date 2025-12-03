import React from 'react'
import Todos from '../components/habits/Todos'

const Habbit = () => {
  return (
    <div style={{minHeight: '100vh', padding: '32px', backgroundColor: '#030303'}}>
      <div>
        <Todos text="Add a todo"/>
      </div>
    </div>
  )
}

export default Habbit