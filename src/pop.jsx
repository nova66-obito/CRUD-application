import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
export default function Popup(yyy){
  console.log(yyy.reval,"pop")
  const changedata=()=>{
    fetch(`https://67d7ed129d5e3a10152c9ada.mockapi.io/user/users${yyy.reval.id}`, {
      method: 'PUT', // or PATCH
      headers: {'content-type':'application/json'},
      body: JSON.stringify(yyy.reval)
    }).then(res => {
      if (res.ok) {
          return res.json();
      }
      // handle error
    }).then(task => {
      alert("success")
    }).catch(error => {
      // handle error
    });
    yyy.close()
  }
  return(
    <>
       <Button variant="primary" onClick={yyy.open}>
        Launch demo modal
      </Button>
      <Modal show={yyy.do} onHide={yyy.close}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>name</Form.Label>
              <Form.Control
                type="text"
                placeholder="enter your name"
                autoFocus
                defaultValue={yyy.reval.name}
                onChange={(e)=>yyy.setreval({...yyy.reval,name:e.target.value})}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="enter your email"
                autoFocus
                defaultValue={yyy.reval.emailid}
                onChange={(e)=>yyy.setreval({...yyy.reval,emailid:e.target.value})}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>phone no</Form.Label>
              <Form.Control
                type="number"
                placeholder="enter your mobile num"
                autoFocus
                defaultValue={yyy.reval.phonenum}
                onChange={(e)=>yyy.setreval({...yyy.reval,phonenum:e.target.value})}

              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>location</Form.Label>
              <Form.Control
                type="text"
                placeholder="enter your location"
                autoFocus
                defaultValue={yyy.reval.location}
                onChange={(e)=>yyy.setreval({...yyy.reval,location:e.target.value})}

              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={yyy.close}>
            Close
          </Button>
          <Button variant="primary" onClick={changedata}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}