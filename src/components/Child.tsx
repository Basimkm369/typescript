import React from "react"

type childProps={
    children :React.ReactNode
}

const Child = (props:childProps) => {
  return (
    <div>{props.children}</div>
  )
}
export default Child