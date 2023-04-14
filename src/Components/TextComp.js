import React from 'react'
import { useSelector } from 'react-redux'

function TextComp() {
    const data=useSelector((storedata)=>{
        return storedata;
    });
  return (
        
    <div>
        <h2>Text Component</h2>
        <p>{data.name}</p>
    </div>
  )
}

export default TextComp