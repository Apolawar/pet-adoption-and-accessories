import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import Swal from 'sweetalert2';

function Signup() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const onSubmit = async (data) => {
   const userInfo={
    name:data.name,
    email:data.email,
    password:data.password
   }
   await axios.post("http://localhost:4000/user/signup",userInfo)
   .then((res)=>{
    console.log(res.data)
    if(res.data){
     Swal.fire({
  title: "Welcome",
  text: "SignUp Successfully!",
  icon: "success"
});
    }
    localStorage.setItem("Users",JSON.stringify(res.data.user));
   }).catch((err)=>{
console.log(err)
alert(err.response.data.message);
   })

  };

  return (
    <>

      <div show={show} onHide={handleClose}>
        <div className="signupstyle">
          <div className="modal-box">
            <Modal.Header>
              <Modal.Title>SignUp</Modal.Title>
            </Modal.Header>
            <hr />
            <Modal.Body>
              <Form onSubmit={handleSubmit(onSubmit)}>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                  <Form.Label>Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter your name"
                    autoFocus
                    {...register("name", { required: true })}
                  />
                  {errors.name && <p className="error-text">*Name is required</p>}
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Enter your email"
                    {...register("email", { required: true })}
                  />
                  {errors.email && <p className="error-text">*Email is required</p>}
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    {...register("password", { required: true })}
                  />
                  {errors.password && <p className="error-text">*Password is required</p>}
                </Form.Group>
                <Modal.Footer className="modal-footer-custom">
                  <Button type="submit" className="login-button">SignUp</Button>
                </Modal.Footer>
              </Form>
            </Modal.Body>
            <hr />
            <Modal.Footer className="modal-footer-custom">
              <p className="signup-text">
                Already have an account? <Link to="/">Login</Link>
              </p>
            </Modal.Footer>
          </div>
        </div>
      </div>
    </>
  );
}

export default Signup;
