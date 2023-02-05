import React,{ useState} from "react";

export default function Count() {

    const [num, setNum] = useState("")
    

    function getId(e) {
        setNum(e.target.id)   
        
    }

 
  
  return (
    <div>
      <table>
        <tr >
          <th>Company</th>
          <th>Contact</th>
          <th>Country</th>
        </tr>
        <tr className="row1" style={{backgroundColor:Number(num)===1?"red":"white"}}>
            <button id="1" onClick={(e)=>getId(e)}>click</button>
          <td>Alfreds Futterkiste</td>
          <td>Maria Anders</td>
          <td>Germany</td>
        </tr>
        <tr className="row2" style={{backgroundColor:Number(num)===2?"red":"white"}}>
        <button id="2" onClick={(e)=>getId(e)}>click</button>
          <td>Centro comercial Moctezuma</td>
          <td>Francisco Chang</td>
          <td>Mexico</td>
        </tr>
        <tr className="row3" style={{backgroundColor:Number(num)===3?"red":"white"}}>
        <button id="3" onClick={(e)=>getId(e)}>click</button>
          <td>Centro comercial Moctezuma</td>
          <td>Francisco Chang</td>
          <td>Mexico</td>
        </tr>
      </table>
    </div>
  );
}
