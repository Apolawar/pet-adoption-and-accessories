import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import Swal from 'sweetalert2';
import { useAuth } from '../../context/AuthProvider';

function Login() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [show, setShow] = useState(false);
  const { setAuthUser } = useAuth();

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const onSubmit = async (data) => {
    const userInfo = {
      email: data.email,
      password: data.password
    };

    await axios.post('http://localhost:4000/user/login', userInfo)
      .then((res) => {
        if (res.data) {
          Swal.fire({
            title: 'Welcome',
            text: 'You Logged in Successfully!',
            icon: 'success'
          });
          localStorage.setItem('Users', JSON.stringify(res.data.user));
          setAuthUser(res.data.user); // Update authUser state
          handleClose(); // Close the modal on successful login
        }
      }).catch((err) => {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Invalid password or username',
        });
      });
  };

  return (
    <>
      <button className="Navbar-button" onClick={handleShow}>
        Login
      </button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Login</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter your email"
                autoFocus
                {...register('email', { required: true })}
              />
              {errors.email && <p className="error-text">*Email is required</p>}
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                {...register('password', { required: true })}
              />
              {errors.password && <p className="error-text">*Password is required</p>}
            </Form.Group>
            <Modal.Footer className="modal-footer-custom">
              <button type="submit" className="login-button">Login</button>
              <p className="signup-text">
                Not Registered? <Link to="/signup">Signup</Link>
              </p>
            </Modal.Footer>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default Login;
