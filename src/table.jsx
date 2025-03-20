import { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
export default function Cell(xxx){
  console.log(xxx,"th")
  let[count,setCount] = useState(0);
  let [over,setover] = useState(null)
  
  useEffect(function(){
    let data = fetch('https://67d7ed129d5e3a10152c9ada.mockapi.io/user/users', {
      method: 'GET',
      headers: {'content-type':'application/json'},
    }).then(res => {
      if (res.ok) {
          return res.json();
      }
      // handle error
    }).then(tasks => {
      setover(tasks)
      // Do something with the list of tasks
    }).catch(error => {
      // handle error
    })},[])
  console.log(over)
  return(
    <>
      <Table striped bordered hover variant="dark">
      <thead>
        <tr>
          <th>id</th>
          <th>Name</th>
          <th>email</th>
          <th>phone</th>
          <th>location</th>
          <th>action</th>
        </tr>
      </thead>
      <tbody>
       {over&&over.map((val,j)=>{
        return(
          <>
          <tr>
              <td>{count+=1}</td>
              <td>{over[j].name}</td>
              <td>{over[j].emailid}</td>
              <td>{over[j].phonenum}</td>       
              <td>{over[j].location}</td>
              <td><button onClick={()=>xxx.open(val)} className='btn bg-success text-light'>Edit</button><button  className='btn text-light m-2 bg-danger'>delete</button></td>
          </tr>
          </>
        )
       })}
      </tbody>
    </Table>
    </>
  )
}