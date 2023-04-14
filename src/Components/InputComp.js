import React,{useState} from 'react'
import myStore from '../Redux/Store'

function InputComp() {
    const [state,setState]=useState("")
    const callDispatch=()=>{
        myStore.dispatch(
            {
                type:"name",
                username:state
            }
        )
    }
  return (
    <div>
        <h2>Input Component</h2>
        <input type='text' onChange={(e)=>{
            setState(e.target.value)
        }}/>
        <button onClick={callDispatch}>Send</button>
    </div>
  )
}

export default InputComp