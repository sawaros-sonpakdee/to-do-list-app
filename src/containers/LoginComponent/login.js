import React, { useState, useContext, Component } from 'react';
import './login.css';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { Button, Form, InputGroup } from "react-bootstrap/";
import { useNavigate } from 'react-router-dom';
import api from '../../api';

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
            } );
            console.log("Response:", response.data);

            if (response.data === 'success') {
                console.log(response.status);
                setError('');
                setIsLoggedIn(true);
                navigate("/Home");
            }
            else {
                setError("Login failed, Please check you credentials.");
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
                <img className="lover-moon" src={require('../../assets/images/Untitled_Artwork\ 8.png')} />
                <img className="yellow-star" src={require('../../assets/images/Yellow_st.png')} />
                <div className="form-signin">
                    <div className='center topic-title'>
                        <h2>Sign In</h2>
                    </div>
                    <Form onSubmit={handleSubmit}>
                        <InputGroup className="mb-3 input-username">
                            <InputGroup.Text id="username" ><img src={require('../../assets/images/User.png')} alt="Person Icon" /></InputGroup.Text>
                            <Form.Control
                                type='text'
                                name='username'
                                onChange={handleInput}
                            />
                        </InputGroup>
                        <InputGroup className='input-password'>
                            <InputGroup.Text id="password"><img src={require('../../assets/images/Key.png')} alt="Password Icon" /></InputGroup.Text>
                            <Form.Control
                                type={showpassword ? "text" : "password"}
                                name='password'
                                onChange={handleInput}
                            />
                            <Button className='icon-eye'
                                onClick={() => setShowpassword(!showpassword)}>
                                {showpassword ? <FaEye /> : <FaEyeSlash />}
                            </Button>
                        </InputGroup>
                        <span className='warning-text' style={{ color: 'white', display: error ? 'block' : 'none' }}>{error}</span>
                        <Button className='submit-btn' variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>
                </div>
                <img className="blue-star" src={require('../../assets/images/blue_st.png')} />
            </div>
            {/* </div> */}
        </div>

    );
}
export default LoginComponent;