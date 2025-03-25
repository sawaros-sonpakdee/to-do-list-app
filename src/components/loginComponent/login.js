import React, { useState , useContext } from 'react';
import './login.css';
import PersonIcon from 'bootstrap-icons/icons/person.svg';
import PasswordIcon from 'bootstrap-icons/icons/key-fill.svg'
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
//import { Button, Form, InputGroup } from "react-bootstrap"; **** Not working 
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { useNavigate } from 'react-router-dom';


function Login() {
    const [showpassword, setShowpassword] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const navigate = useNavigate();
    const [input, setInput] = useState({
        username : '',
        password : ''
    });


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
    
    const handleSubmit = (e)=>{
        e.preventDefault()
        console.log("username :",input.username);
        console.log("pass :",input.password);
        // setInputUser(e.target.value)
     
     
        if((input.username === userdata.user1.username  && input.password === userdata.user1.password ) || 
        (input.username === userdata.user2.username  && input.password === userdata.user2.password )){
            console.log("true");
            setIsLoggedIn(true);
            //Navigate ใช้ในแอพ Route ใช้หน้าบ้าน
            navigate("/Dashboard");
        }
        else{
            console.log("false");
            setIsLoggedIn(false);
            navigate("/Login");
        }
        
    };
    // const handdleChangeUser =(e)=>{
    //     setUsername(e.target.value);
    //     // console.log(username);
  
    // };
    // const handdleChangePassword =(e)=>{
    //     setPassword(e.target.value);
    //     // console.log(password);
    // };
    const handleInput = (e) =>{
        const {name,value} =e.target;
        setInput((prev)=> ({
            ...prev,
            [name] : value
        }));
        console.log(input.username);
        console.log(input.password);
    };

    return (
        <div>
            <div className="form-signin">
                <div className='center topic-title'>
                    <h2>Sign In</h2>
                </div>
                <Form onSubmit={handleSubmit}>
                    <InputGroup className="mb-3">
                        <InputGroup.Text id="username"><img src={PersonIcon} alt="Person Icon" /></InputGroup.Text>
                        <Form.Control
                            type='text'
                            name='username'
                            onChange={handleInput}
                        />
                    </InputGroup>
                    <InputGroup >
                        <InputGroup.Text id="password"><img src={PasswordIcon} alt="Password Icon" /></InputGroup.Text>
                        <Form.Control
                            type={showpassword ? "text" : "password"}
                            name='password'
                            onChange={handleInput}
                        />
                        <Button
                            onClick={() => setShowpassword(!showpassword)}>
                            {showpassword ?<FaEye />:<FaEyeSlash />}
                        </Button>
                    </InputGroup>
                    <Button className='submit-btn' variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </div>
        </div>
    );
}
export default Login;