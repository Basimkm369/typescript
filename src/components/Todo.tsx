import React, { useState } from 'react'
import { json } from 'stream/consumers'
import Lists from './Lists'

type inputValues={
onPass:(name:string,place:string)=>void
}


const Todo = (props:inputValues) => {
    const [values,setvalues]=useState({
        names:"",
        places:""
})
   

const handleChange=(event:React.ChangeEvent<HTMLInputElement>)=>{
    setvalues({ ...values, [event.target.name]: event.target.value });  
}


const onSubmit=(event:React.FormEvent<HTMLFormElement>)=>{
    event.preventDefault()
    props.onPass(values.names,values.places)
    localStorage.setItem('my',JSON.stringify(values))


}
const buttonClick=(e:React.MouseEvent<HTMLButtonElement>)=>{

}

  return (
    <div>
        <form onSubmit={onSubmit}>
<input type="text" value={values.names} name="names" onChange={handleChange}/>
<input type="text" value={values.places} name="places" onChange={handleChange}/>
<button onClick={buttonClick}>submit</button>
</form>


    </div>
  )
}

export default Todo