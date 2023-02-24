import React from "react"
import First, { firstptops } from "../components/First"


type namesAll={
  component:React.ComponentType<firstptops>
  
    names:{
        first : string
        last : string
        

    }

}
const AllObjects = (props:namesAll) => {
  return (
    <div>{props.names.first}{props.names.last} 
    
    </div>
  )
}

export default AllObjects



