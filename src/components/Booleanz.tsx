import React, { useState } from 'react'

type passArrayprops={
  name:string,
  rollno:number
}

enum values{
  a="f",
  b=5

}




const Booleanz:React.FC = () => {

const[type,setType]=useState<boolean | string>(true)
const[data,setData]=useState<string[]>([])
const[obj,setObj]=useState({})

const handleClick=()=>{
if (type==="j") {
    setType(false)
}
else{
    setType("j")
}
}



const AllNames=[
"fd",
"fdd",
"b",
"c"
]


const addHandler=(name:string)=>{
  const p=name
  setObj(p)
  console.log("object",obj)
  // const add=[...name]
  // setData([add])
  setData((d)=>{
    return [...d,name]
  })
 }

console.log("data",data)

  return (
    <div>
      <button onClick={handleClick}>click</button>
      <div className='mt-5 container'>{type}</div>
      <div>
        {AllNames.map((name)=>(
          <div>{name}        
          <button onClick={()=>addHandler(name)}>add</button>
          </div>
          
        ))}
      </div>
    </div>
  )
}

export default Booleanz