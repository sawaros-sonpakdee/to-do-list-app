import { Button, InputGroup } from 'react-bootstrap';
import '../RegisterComponent/register.css';
import { Form } from "react-bootstrap/";
import { useState } from 'react';
import api from '../../services/api';



function RegisterComponent() {
    const [error, setError] = useState();
    const [showPassword, setShowPassword] = useState(false);
    const [showCFPassword, setShowCFPassword] = useState(false);
    const [input, setInput] = useState({
        username: '',
        password: '',
        confirmPwd: ''
    });
    const validatePassword = (password, confirmPwd) => {
        // const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
        const minLength = 8;
        const maxLength = 15;
        const hasUpperCase = /[A-Z]/.test(password);
        const hasLowerCase = /[a-z]/.test(password);
        const hashNumber = /[0-9]/.test(password);
        const hasSpecialChar = /[!@#$%^&*_-]/.test(password);
        if (password !== confirmPwd) {
            setError("The passwords don't match.");
            return false
        }
        else {
            if (password.length >= maxLength) {
                setError("Password must be at least 15 characters long.");
                return false;
            }
            if (password.length <= minLength) {
                setError("Password must be at over  8 characters long.");
                return false
            }
            if (!hasUpperCase) {
                setError("Password must contain at least one uppercase letter.");
                return false;
            }
            if (!hasLowerCase) {
                setError("Password must contain at least one lowercase letter.");
                return false;
            }
            if (!hashNumber) {
                setError("Password must contain at least one number.");
                return false;
            }
            if (!hasSpecialChar) {
                setError("Password must contain at least one special character.");
                return false;
            }
            setError('');
            return true
        }

    }

    const handleInputChange = (e) => {
        if (error) {
            setError('');
        }
        const { id, value } = e.target;
        setInput((prev) => ({
            ...prev,
            [id]: value
        }));
    }
    const handleSubmit = async(e) => {
        e.preventDefault();
        const passwordError = validatePassword(input.password, input.confirmPwd);
        console.log("passwordError :",passwordError);
        if (passwordError !== false) {
            try{
                const response = await api.post("/createAccount",{
                    username: input.username,
                    password: input.password,
                });
                console.log("Response:", response.data);
            }
            catch (error) {
                console.error("Error :", error.response?.data || error.message);
                setError('The username is unavailable.');
                console.log("false");
            }   
        }
    }
    return (
        <div>
            <div className="brown-bear-register">
                <div className='form-signup'>
                    <div className="form-bg-color-signup">
                        <div className='center topic-title'>
                            <h1>Sign Up</h1>
                        </div>
                        <Form onSubmit={handleSubmit}>
                            <InputGroup className="input-username">
                                <Form.Control
                                    id="username"
                                    type="text"
                                    placeholder="Username"
                                    onChange={handleInputChange}
                                    required />
                            </InputGroup>
                            <InputGroup className="input-password">
                                <Form.Control
                                    id="password"
                                    type={showPassword ? "text" : "password"}
                                    placeholder="Password"
                                    onChange={handleInputChange}
                                    required
                                />
                                <Button className='icon-eye'
                                    onClick={() => setShowPassword(!showPassword)}
                                >
                                    {showPassword ? <img className='eye-crossed' src={require('../../assets/icons/eye.png')} alt="Password Icon" /> : <img className='eye-crossed' src={require('../../assets/icons/eye-crossed.png')} alt="Password Icon" />}
                                </Button>
                            </InputGroup>
                            <InputGroup className="input-password">
                                <Form.Control
                                    id='confirmPwd'
                                    type={showCFPassword ? "text" : "password"}
                                    placeholder="Confirm Password"
                                    onChange={handleInputChange}
                                    required />
                                <Button className='icon-eye '
                                    onClick={() => setShowCFPassword(!showCFPassword)}
                                >
                                    {showCFPassword ? <img className='eye-crossed' src={require('../../assets/icons/eye.png')} alt="Password Icon" /> : <img className='eye-crossed' src={require('../../assets/icons/eye-crossed.png')} alt="Password Icon" />}
                                </Button>
                            </InputGroup>
                            <div className='warning-text' style={{ display: error ? 'block' : 'none' }}>{error}</div>
                            <Button type="submit" className='submit-btn'>Signup</Button>
                        </Form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RegisterComponent;