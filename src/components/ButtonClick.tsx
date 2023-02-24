import React from "react"

type clicks={

        onpass:(id:number)=>void
  
    }

const ButtonClick = (props:clicks) => {


  const clickid=(event:React.MouseEvent<HTMLButtonElement>)=>{
    alert("hi")
    props.onpass(4)
  
  
  }
  return (
    <div>

        <button onClick={clickid} >click</button>
    </div>
  )
}
export default ButtonClick