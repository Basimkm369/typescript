import React from 'react'
import { Link, useNavigate } from 'react-router-dom';


export type lists={
    tasks: { names: string; places: string;  }[]
    deleteTask: (index: number) => void
    passId:(index:number)=>void

}

const Lists = ({tasks,deleteTask,passId}:lists) => {
  const navigate=useNavigate()

    const viewButton=(e:React.MouseEvent<HTMLButtonElement>,index:number
      )=>{
        navigate(`/view/${index}`)
        console.log('id',index)
        passId(index)

    }

  return (
    <div className='counter'>
        {tasks.map((e,index)=>
        (
            
        <div className="card" key={index} style={{width: '12rem'}} >
  <div className="card-body">
    <h5 className="card-title">{e.names}</h5>
    <p className="card-text">{e.places}</p>
    
  </div>
  <button onClick={(e)=>viewButton(e,index)} >view</button>
  <button onClick={(e) => deleteTask(index)}>delete</button>
  
</div>
          

))}
   


    </div>
  )
}

export default Lists