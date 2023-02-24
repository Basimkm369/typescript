import React, { useState } from "react"

interface inputBox{

    value:(e:string)=>void
  
}


const TextField:React.FC<inputBox>= ({value} )=>{

    
    const [data,setdata]=useState('')
    

    const handleInputChange=(event:React.ChangeEvent<HTMLInputElement>)=>{
        const updatesData=event.target.value
        setdata(updatesData)
    
    }

   const buttonOnClick=(event:React.MouseEvent<HTMLButtonElement>)=>{
    
  value(data)
    
   }

   const onFormSubmit=(event:React.FormEvent<HTMLFormElement>)=>{
    event.preventDefault()


   }
  return (
    <div>
        <form onSubmit={onFormSubmit}>
        
<input type="text" value={data} onChange={handleInputChange}/>

<button onClick={buttonOnClick}> add</button>
</form>

    </div>
  )
}

export default TextField


