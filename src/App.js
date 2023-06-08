import React, { useState } from "react";
import Data from "./Data.json"

function App() {
  const[inputs,setinputs]=useState("")
  console.log(inputs)

  return (
    <div className="App">
      <input type="text" placeholder="enter the name"  onChange={(e)=>setinputs(e.target.value)}>
      </input>
      <table>
        <thead>
          <tr>
          <th>sl_no</th>
          <th>first_name</th>
          <th>last_name</th>
          <th>email</th>
          <th>gender</th>
          <th>Phone_number</th>
          </tr>
        </thead>
        <tbody>

        
      {
        Data.filter((item)=>{
          return inputs.toLowerCase()===""?item: item.first_name.toLowerCase().includes(inputs)

        }).map((item)=>
       <tr key={item.id}>
          <td>{item.id}</td>
          <td>{item.first_name}</td>
          <td>{item.last_name}</td>
          <td>{item.email}</td>
          <td>{item.gender}</td>
          <td>{item.Phone_number}</td>
          </tr>
        )  
      }
      </tbody>
      </table>
      
    </div>
  );
}

export default App;
