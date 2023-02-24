

type allValues={
    values:{
        first : string
        last : string
    }[]  
    
}
const ArrayObjects = (props:allValues) => {
  return (
    <div className="container">{props.values.map((val)=>(
        <div key={val.first}>{val.first}{val.last}</div>

    ))}</div>
  )
}
export default ArrayObjects