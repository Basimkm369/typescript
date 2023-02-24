

type ch={
    children:React.ReactNode
}

const Heading = (props:ch) => {
  return (
    <div>{props.children}</div>
  )
}

export default Heading