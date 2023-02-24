
import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import AllObjects from './components/AllObjects';
import ArrayObjects from './components/ArrayObjects';
import Booleanz from './components/Booleanz';
import ButtonClick from './components/ButtonClick';
import Checking from './components/Checking';
import Child from './components/Child';
import Class from './components/Class';
import Counter from './components/Counter';
import InputField from './components/dd';
import Dummy from './components/Dummy';
import First from './components/First';
import Form from './components/Form';
import Heading from './components/Heading';
import InterFaces from './components/InterFaces';
import Lists from './components/Lists';
import TextField from './components/TextField';
import Todo from './components/Todo';
import TodoTrail from './components/TodoTrail';
import ViewDetails from './components/ViewDetails';



const App=()=> {


  const [values,setValues]=useState('')

  const studDetails={
    first : "lalu",
    last:"k"
  }
  const data=[
    {
      first : "r",
      last:"r"
    },
    {
      first : "a",
      last:"a"
    },
    {
      first : "w",
      last:"w"
    }
  ]




const handle=(val:string)=>{
  console.log("fdfddf",val)

}
const getsValue=(e:string )=>{
  alert(e)

}

const getsval=(e:string,t:string)=>{
  setValues(e)
  const todovalues={name:e,places:t}
  console.log('5',todovalues)



}
const getsIdDetails=(e:number)=>{
  console.log("appid",e)

}


  return (
    <div>
      <Router>
        <Routes>
          <Route path='/first' element={<First name='hgg' digit={10}/>} />


          <Route path='/all' element={<AllObjects names={studDetails} component={First}/>}/>
          <Route path='/array' element={<ArrayObjects values={data}/>}/>
      {/* <Heading> */}

        
      <Route path='/child' element={<Child><h1>da</h1><p>h</p> </Child>}/>

        {/* </Heading> */}

        <Route path='/button' element={<ButtonClick onpass={(e)=>console.log("my id",e)}  ></ButtonClick>}/>

        <Route path='/text' element={<TextField value={getsValue}/>}/>

        <Route path='/form' element={<Form  valuess={handle} />}/>

        <Route path='/counter' element={<Counter/>}/>

        <Route path='/check'  element={<Checking />}/>

        <Route path='/interface' element={<InterFaces a='abc' b={10}/>}/>

        <Route path='/todo' element={<Todo onPass={getsval}/>}/>
        <Route path='/t' element={<TodoTrail  idPassVal={getsIdDetails}/> }/>
        <Route path='/view' element={ <ViewDetails  />}/>
        <Route path='/class' element={ <Class  />}/>
        <Route path='/d' element={ <Dummy name='kdjj'/>}/>
        <Route path='/boo' element={ <Booleanz />}/>








        </Routes>
        </Router>
     
    </div>
   
  );
}

export default App;
