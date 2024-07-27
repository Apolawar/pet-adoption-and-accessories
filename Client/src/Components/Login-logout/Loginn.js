import { useState } from "react";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import Swal from "sweetalert2";
import { useAuth } from "../../context/AuthProvider";
import "./Loginlogout.css";

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [show, setShow] = useState(false);
  const { setAuthUser } = useAuth();

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const onSubmit = async (data) => {
    const userInfo = {
      email: data.email,
      password: data.password,
    };

    await axios
      .post(`${process.env.BACKEND_URI}/user/login`, userInfo)
      .then((res) => {
        if (res.data) {
          Swal.fire({
            title: "Welcome",
            text: "You Logged in Successfully!",
            icon: "success",
          });
          localStorage.setItem("Users", JSON.stringify(res.data.user));
          setAuthUser(res.data.user); // Update authUser state
          handleClose(); // Close the modal on successful login
        }
      })
      .catch((err) => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Invalid password or username",
        });
      });
  };

  return (
    <>
      <button className="Navbar-button " onClick={handleShow}>
        Login
      </button>

      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>
            <h3>Login</h3>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit(onSubmit)} className="form-custom">
            <Form.Group className="mb-3" controlId="formEmail">
              <Form.Label className="form-label-large">
                Email address
              </Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter your email"
                autoFocus
                {...register("email", { required: true })}
                className={`form-control-large ${
                  errors.email ? "is-invalid" : ""
                }`}
              />
              {errors.email && (
                <div className="invalid-feedback">*Email is required</div>
              )}
            </Form.Group>
            <Form.Group className="mb-3" controlId="formPassword">
              <Form.Label className="form-label-large">Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Enter your password"
                {...register("password", { required: true })}
                className={`form-control-large ${
                  errors.password ? "is-invalid" : ""
                }`}
              />
              {errors.password && (
                <div className="invalid-feedback">*Password is required</div>
              )}
            </Form.Group>
            <Modal.Footer className="modal-footer-custom">
              <button type="submit" className="login-button">
                Login
              </button>
              <p className="signup-text mt-3">
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
