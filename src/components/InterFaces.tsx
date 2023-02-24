import React from 'react'


interface names{
    a:string
    b:number
}
const InterFaces = ({a,b}:names) => {
  return (
    <div>
        {a}, {b}

    </div>
  )
}

export default InterFaces