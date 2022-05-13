import React from 'react'

import './style.css';
import { Button, Form } from 'react-bootstrap';
import {useNavigate} from 'react-router-dom';


const SignIn = () => {
    const navigate = useNavigate();

    const onSubmitHandler = (e) => {
        e.preventDefault();
        let user = {};
        const fields = ['username', 'password'];
        for (const key in fields) {
            user = {
                ...user,
                [fields[key]]: e.target[key].value,
            };
        }
        const name = localStorage.getItem('username');
        const pswrd = localStorage.getItem('password');
        if(user.username === name && pswrd === user.password) {
            navigate('/dashboard');
          }
    };
    return (
        <div className='container'>
            <div className='signIn-container'>
                <Form onSubmit={onSubmitHandler}>
                    <Form.Group className="mb-3" controlId="username">
                        <Form.Label>Username</Form.Label>
                        <Form.Control type="text" placeholder="Enter Username" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="password">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>

                    <p>Create new account? <a href='/signup'>Click Here</a></p>
                    <Button variant='primary' type='submit'>
                        Submit
                    </Button>
                </Form>
            </div>
        </div>
    )
}

export default SignIn