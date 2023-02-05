import React, { useState } from "react";
import "./App.css";

export default function Quiz() {

    const [ans, setAns] = useState()

    function handleData(e) {
        const {name, value} = e.target
        setAns(prev =>{
            return{
                ...prev,
                [name]:value
            }
        })
    }
    
    console.log(ans);
  return (
    <div>
      <h2>Hello There</h2>
      <h3> Q. 1 Current employment status</h3>
      <input
        type="radio"
        id="unemployed"
        name="employment"
        value="unemployed"
        // checked={ans.employment === "unemployed"}
        onChange={(e) => {handleData(e)}}
      />
      <label htmlFor="unemployed">Unemployed</label>
      <br />

      <input
        type="radio"
        id="part-time"
        name="employment"
        value="part-time"
        // checked={ans.employment === "part-time"}
        onChange={(e) => {handleData(e)}}
      />
      <label htmlFor="part-time">Part-time</label>
      <br />

      <input
        type="radio"
        id="full-time"
        name="employment"
        value="full-time"
        // checked={ans.employment === "full-time"}
        onChange={(e) => {handleData(e)}}
      />
      <label htmlFor="full-time">Full-time</label>
      <br />
      <input
        type="radio"
        id="full"
        name="employment"
        value="full"
        // checked={ans.employment === "full"}
        onChange={(e) => {handleData(e)}}
      />
      <label htmlFor="full-time">Full</label>
      <br />

      <br />
      <button>Previous</button>
      <button>Next</button>
    </div>
  );
}
