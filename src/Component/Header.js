import React,{useState} from "react";
import { Button, Modal} from "react-bootstrap";

export const Header = () => {
  const [show,setShow]=useState(false)

  
  return (
    <div className="header">
      <div className="header-logo">
        <p>Anshul home's</p>
        <p>ESTATE</p>
      </div>
      <div className="header-button">
        <button  onClick={()=>setShow(true)}>
          <b>ENQUIRE NOW</b>
        </button>
        <Modal show={show}>
               <Modal.Header>
                    Login
               </Modal.Header>
               <Modal.Body>
                    <label htmlFor="email_id">Email</label>
                    <input  type="email" id="email_id" placeholder="abc@gmail.com" /><br></br><br></br>
                    <label htmlFor="Password_id">Password</label>
                    <input  type="pass" id="Password_id" placeholder="********" />
               </Modal.Body>
               <Modal.Footer>
                    <Button>Login</Button>
                    <Button>SingUp</Button>
               </Modal.Footer>
          </Modal>
      </div>
    </div>
  );
};
