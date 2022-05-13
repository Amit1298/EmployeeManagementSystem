import React, { useState } from 'react'
import {useNavigate} from 'react-router-dom';

// import './style.css';

import { Button, Form } from 'react-bootstrap';


function SignUp() {
  const [validated,setValidated] = useState(false);
  let navigate = useNavigate();


  const onSubmitHandler = (e) => {
    const form = e.currentTarget;
    if(form.checkValidity() === false){
      e.preventDefault();
      e.stopPropagation();
    }
  
    setValidated(true);

    e.preventDefault();
    let user = {};
    const fields = ['firstName', 'lastName', 'password', 'confirmPassword'];
    for (const key in fields) {
      user = {
        ...user,
        [fields[key]]: e.target[key].value,
      };
    }
    const username = `${user.firstName}_${user.lastName}`;
    localStorage.setItem('username', username);
    localStorage.setItem('password', user.password);
    if(user.password && user.firstName){
      navigate('/');
    }
  };


  return (


      <div className='container'>

        <div className='signIn-container'>
          <Form noValidate validated={validated} onSubmit={onSubmitHandler}>

            <Form.Group className="mb-3" controlId="firstName">
              <Form.Control required type="text" placeholder="Enter First Name" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="lastName">
              <Form.Control required type="text" placeholder="Enter Last Name" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="username">
              <Form.Control required type="text" placeholder="Enter Username" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="password">
              <Form.Control required type="password" placeholder="Password" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="confirmPassword">
              <Form.Control required type="password" placeholder="Confirm Password" />
            </Form.Group>

            <p>
              Already Have a account? <a href='/'>Click Here</a>
            </p>
            <Button variant='primary' type='submit'>
              Submit
            </Button>
          </Form>
        </div>
      </div>
  )
}

export default SignUp