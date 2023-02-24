import React, { useState } from 'react'



const Checking = () => {

    const[checked,setChecked]=useState(false)


    const checkValid=(e:React.MouseEvent<HTMLButtonElement>)=>{
        setChecked(true)
        

    }
  return (
    <div>
        <div><button onClick={checkValid}>check</button></div>
        
{checked ? 'v' :'f'}

    </div>
  )
}

export default Checking