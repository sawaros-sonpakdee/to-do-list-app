import React, { useState, useContext, Component } from 'react';
import './login.css';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { Button, Form, InputGroup } from "react-bootstrap/";
import { useNavigate } from 'react-router-dom';
import api from '../../api';
import { Link } from 'react-router-dom';

function LoginComponent() {
    const [showpassword, setShowpassword] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const navigate = useNavigate();
    const [input, setInput] = useState({
        username: '',
        password: ''
    });
    const [error, setError] = useState();
    const [count, setCount] = useState(0);
    const [userdata, setUserData] = useState({
        user1: {
            username: 'Admin',
            password: '123456'
        },
        user2: {
            username: 'clerk',
            password: '12345'
        }
    });

    const handleSubmit = async (e) => {
        e.preventDefault()
        console.log("username :", input.username);
        console.log("pass :", input.password);
        // setInputUser(e.target.value)
        console.log("userdata.user1.username : " + userdata.user1.username);
        console.log("userdata.user1.password : " + userdata.user1.password);

        console.log("api domain:" + api.defaults.baseURL);
        try {
            const response = await api.post("/checklogin", {
                username: input.username,
                password: input.password,
            });
            console.log("Response:", response.data);
            if (response.data === 'success') {
                console.log(response.status);
                setError('');
                setIsLoggedIn(true);
                navigate("/Home");
            }
            else {
                setError("Login failed, Incorrect username or password. Please try again.");
                navigate("/Login");
            }


        } catch (error) {
            console.error("Error :", error.response?.data || error.message);
            setError('The username or password is incorrect.Please check and try again');
            console.log("false");
            setIsLoggedIn(false);
            navigate("/Login");
        }

    };
    const handleInput = (e) => {
        if (error) {
            setError('');
        }
        const { name, value } = e.target;
        setInput((prev) => ({
            ...prev,
            [name]: value
        }));
        console.log(input.username);
        console.log(input.password);
    };

    return (
        <div>
            <div className="brown-bear">
                <div className="form-bg-color">
                    <div className="form-signin">
                        <div className='center topic-title'>
                            <h1>Sign In</h1>
                        </div>

                        <Form onSubmit={handleSubmit}>
                            <InputGroup className="mb-3 input-username">
                                <InputGroup.Text id="username" ><img src={require('../../assets/icons/user.png')} alt="Person Icon" /></InputGroup.Text>
                                <Form.Control
                                    type='text'
                                    name='username'
                                    placeholder='Username'
                                    onChange={handleInput}
                                />
                            </InputGroup>
                            <InputGroup className='input-password'>
                                <InputGroup.Text id="password"><img src={require('../../assets/icons/key.png')} alt="Password Icon" /></InputGroup.Text>
                                <Form.Control
                                    type={showpassword ? "text" : "password"}
                                    name='password'
                                    placeholder='Password'
                                    onChange={handleInput}
                                />
                                <Button className='icon-eye'
                                    onClick={() => setShowpassword(!showpassword)}>
                                    {showpassword ? <img className='eye-crossed' src={require('../../assets/icons/eye-crossed.png')} alt="Password Icon" /> : <img className='eye-crossed' src={require('../../assets/icons/eye.png')} alt="Password Icon" />}
                                </Button>
                            </InputGroup>
                            <div className='register'>
                                <Link to="/Register">SignUp?</Link>
                            </div>
                            <span className='warning-text' style={{ display: error ? 'block' : 'none' }}>{error}</span>
                            <Button className='submit-btn'  type="submit">
                                SignIn
                            </Button>
                        </Form>
                    </div>
                </div>
            </div>
        </div >

    );
}
export default LoginComponent;