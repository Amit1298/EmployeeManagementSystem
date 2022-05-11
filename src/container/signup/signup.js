import React from 'react'
// import './style.css';

import { Button, Form } from 'react-bootstrap';


function SignUp() {
  const onSubmitHandler = (e) => {
    e.preventDefault();
    let user = {};
    const fields = ['firstName','lastName', 'password','confirmPassword'];
    for (const key in fields) {
      user = {
        ...user,
        [fields[key]]: e.target[key].value,
      };
    }
    const username = `${user.firstName}_${user.lastName}`;
    localStorage.getItem('username',username);
    localStorage.getItem('password',user.password);
    console.log(user);
  };


  return (
    <div className='container'>

      <div className='signIn-container'>
        <Form onSubmit={onSubmitHandler}>

          <Form.Group className="mb-3" controlId="firstName">
            <Form.Control type="text" placeholder="Enter First Name" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="lastName">
            <Form.Control type="text" placeholder="Enter Last Name" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="username">
            <Form.Control type="text" placeholder="Enter Username" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="password">
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="confirmPassword">
            <Form.Control type="password" placeholder="Confirm Password" />
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