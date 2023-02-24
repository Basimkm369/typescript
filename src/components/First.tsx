
export type firstptops={
    name : string
    digit : number
 }
 
 export const First = (props:firstptops) => {
  return (
    <div>my name is {props.name} {props.digit}</div>
  )
}

export default First