import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import Swal from 'sweetalert2';
import { useAuth } from '../../context/AuthProvider';
import './Loginlogout.css';

function Signup() {
  const { setAuthUser } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = async (data) => {
    const userInfo = {
      name: data.name,
      email: data.email,
      password: data.password
    };
    await axios.post("http://localhost:4000/user/signup", userInfo)
      .then((res) => {
        console.log(res.data);
        if (res.data) {
          Swal.fire({
            title: "Welcome",
            text: "SignUp Successfully!",
            icon: "success"
          });
          localStorage.setItem("Users", JSON.stringify(res.data.user));
          setAuthUser(res.data.user); // Update auth state
          navigate(from, { replace: true });
        }
      }).catch((err) => {
        console.log(err);
        alert(err.response.data.message);
      });
  };

  return (
    <div className="d-flex justify-content-center align-items-center min-vh-100">
      <div className="modal-box bg-light p-4 rounded shadow-sm">
        <h2 className="text-center mb-4">SignUp</h2>
        <hr />
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label className="form-label">Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter your name"
              autoFocus
              {...register("name", { required: true })}
              className="form-control"
            />
            {errors.name && <p className="error-text">*Name is required</p>}
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
            <Form.Label className="form-label">Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter your email"
              {...register("email", { required: true })}
              className="form-control"
            />
            {errors.email && <p className="error-text">*Email is required</p>}
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label className="form-label">Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Enter your password"
              {...register("password", { required: true })}
              className="form-control"
            />
            {errors.password && <p className="error-text">*Password is required</p>}
          </Form.Group>
          <hr />
          <div className="d-flex justify-content-center">
            <Button type="submit" className="login-button btn-primary">SignUp</Button>
          </div>
        </Form>
        <div className="text-center mt-3">
          <p className="signup-text">
            Already have an account? <Link to="/">Login</Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Signup;
