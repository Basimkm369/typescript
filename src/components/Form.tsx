import React, { ChangeEvent, useState } from 'react'

interface formProps{
valuess:(val:string)=>void

    
}

const Form = (props:formProps) => {
    const [val,setVal]=useState('')

    const inputhandleChange=(event:ChangeEvent<HTMLInputElement>)=>{
        const updatedval=event.target.value
        setVal(updatedval)
        console.log('in',event.target.value)
        props.valuess(updatedval)
    }


  return (
    <div>
        

        
<input type="text" value={val} onChange={inputhandleChange}/>

    </div>
  )
}

export default Form


