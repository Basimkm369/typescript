import React, { ChangeEvent, useState } from 'react'
import {values} from '../components/allprops'

const Dummy:React.FC<values>= ({name}) => {

const[num,setNum]=useState({
    a:1,
    b:"fdkjdf"
})
    const[values,setValues]=useState<string>()


    const inputChange=(event:ChangeEvent<HTMLInputElement>)=>{
        const data=event.target.value
        setValues(data)

    }
  return (
    <div>
        
<input type={"text"} value={values} onChange={inputChange} />
{name}

    </div>
  )
}

export default Dummy



