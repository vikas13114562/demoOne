import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Pegination() {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(0);
  const [no, setNo] = useState([])

  useEffect(() => {
    async function getData() {
      let temp = await axios.get("https://api.github.com/users");
      let t = await temp.data;
      setData(t);
    }
    getData();
  }, []);

  useEffect(()=>{
    if(data) {
      let temp = [];
      for(let i=0; i<parseInt(data.length/4); i++) {
        temp.push(i);
      }
      
      setNo([...temp])
    }
   
  },[])
  

  function handlePrev() {
    if(page != 0) {
      setPage(page-1);
    }
  }

  function handleNext() {
    if(data && page <parseInt(data.length/4)) {
      
      setPage(page+1);
    }
  }

  return (
    <div>
      <div style={{ display: "flex", flexDirection: "column" }}>
        {data && data.slice(page*4, page*4+4).map((ele) => <h1 key={ele.id}>{ele.login}</h1>)}
      </div>
      <div>
        <button onClick={handlePrev}>Prev</button>
        {/* {no && no.map(ele=>(<h1>{ele}</h1>))} */}
        <button onClick={handleNext}>Next</button>
      </div>
    </div>
  );
}
