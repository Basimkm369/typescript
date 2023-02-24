import React, { ReactNode, useState } from 'react'
import Lists from './Lists'
// import { MyContext } from '../Context'


type idpass={
    idPassVal:(i:number)=>void
}

const TodoTrail:React.FC<idpass> = ({idPassVal}) => {

const[names,setnames]=useState('')
const[places,setplaces]=useState('')
const[addtask,setaddtask]=useState<{ names: string; places: string; }[]>([])
const [details,setdetails]=useState(0)



const handleChange=(e:React.ChangeEvent<HTMLInputElement>)=>{
    if (e.target.name==="names"){
        setnames(e.target.value)

    }
    else{
        setplaces(e.target.value)

    }
}

const idDetails=(e:number)=>{
    setdetails(e)
}

const onSubmit=(event:React.FormEvent<HTMLFormElement>)=>{
    event.preventDefault()
    const all={names:names,places:places}
    setaddtask([...addtask,all])
    console.log(addtask)
    idPassVal(details)
}

const deleteTask = (index: number) => {
    const newTasks = [...addtask]
    newTasks.splice(index)
    setaddtask(newTasks)
  }


  return (
    
    <div>
        <div>

        <form onSubmit={onSubmit}>
<input type="text" value={names} name="names" onChange={handleChange}/>
<input type="text" value={places} name="places" onChange={handleChange}/>
<button >submit</button>
</form>
</div>
<div>

<Lists tasks={addtask} deleteTask={deleteTask} passId={idDetails}/>


</div>
    </div>
  )

}

export default TodoTrail