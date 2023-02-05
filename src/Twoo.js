import React from 'react'
import Hoc from './Hoc'
 function Twoo(props) {
    
  return (
    <div>
        <h1>{props.cnt}</h1>
        <button onClick={props.handleClick}>Two</button>
    </div>
  )
}
export default Hoc(Twoo)
