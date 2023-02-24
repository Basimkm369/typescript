import React, { useState } from 'react'


type countType={
    initialState?:number
}
const Counter = ({initialState=0}:countType) => {

const[count,setCount]=useState<number>(0)

const onIncrement=(e:React.MouseEvent<HTMLButtonElement>)=>{
    setCount(count+1)
}

const decrement=(e:React.MouseEvent<HTMLButtonElement>)=>{
    setCount(count-1)

}

  return (
    <div>
        
<button onClick={onIncrement}> + </button>

<button onClick={decrement}> - </button>
{count}

    </div>
  )
}

export default Counter