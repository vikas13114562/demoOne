import React,{useState} from 'react'

export default function One() {
    const [cnt, setCnt] = useState(0)
    function handleClick() {
        setCnt(cnt+1)
    }
  return (
    <div>
        <h1>{cnt}</h1>
        <button onClick={handleClick}>One</button>
    </div>
  )
}
