import React, { useEffect, useState } from 'react'
import './App.css'

export default function Carousel({ImgArr}) {

  const [page, setPage] = useState(0);

  let k = null;

  useEffect(()=> {
    if(page === 4) setPage(0);
    k = setInterval(()=>{
      setPage(page+1);
    },2000)

    return ()=>clearInterval(k)
  },[page])


  return (
    <div className='container'>
      <img src={ImgArr[page]} alt = "img1" />
      <div className='circle-div'>
        {
          ImgArr.map((_,ind) =>{
            return (
              <div className='circle' style={{backgroundColor:ind===page?"red":"grey"}}></div>
            )
          })
        }
      </div>
    </div>
  )
}
