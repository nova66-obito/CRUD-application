import { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Cell from './table'
import Popup from './pop';
function App() {
  const [show, setShow] = useState(false);
  let [def,setdef] = useState({
    name:null,
    location:null,
    phonenum:null,
    emailid:null,
  })
  const handleClose = () => setShow(false);
  const handleShow = (copy) =>{
    setdef(copy)
    setShow(true);
  } 
  return (
    <>
       <div className='main'>
        <h1>curd table</h1>
        <Popup  do={show} close={handleClose} setreval={setdef} reval={def} />
         <Cell open={handleShow}/>
       </div>
    </>
  )
}

export default App
