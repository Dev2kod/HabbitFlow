import React from 'react'
import Searchbar from '../Searchbar'
import { useState } from 'react'

const Todos = (props) => {
    const [todos, settodos] = useState([])
    const handleclick=()=>{
        settodos([...todos,])
    }
    const onchange = () =>{
     settask("")
    }
  return (<>
  <Searchbar text={props.text} click={onclick} change={onchange}/>
  </>
  )
}

export default Todos