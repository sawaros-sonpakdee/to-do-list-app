import { Button, InputGroup } from 'react-bootstrap';
import '../RegisterComponent/register.css';
import { Form } from "react-bootstrap/";
import { useState } from 'react';



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
        const hasUpperCase = /[A-Z]/.test(password);
        const hasLowerCase = /a-z/.test(password);
        const hashNumber = /0-9/.test(password);
        const hasSpecialChar = /[!@#$%^&*]/.test(password);
        if (password !== confirmPwd) {
            return setError("The passwords don't match.");
        }
        else {

            if (password.length !== minLength) {
                return setError("Password must be at least 8 characters long.");

            }
            if (!hasUpperCase) {
                return setError("Password must contain at least one uppercase letter.");

            }
            if (!hasLowerCase) {
                return setError("Password must contain at least one lowercase letter.");

            }
            if (!hashNumber) {
                return setError("Password must contain at least one number.");

            }
            if (!hasSpecialChar) {
                return setError("Password must contain at least one special character.");

            } 
        }
        return setError('');


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
    const handleSubmit = (e) => {
        e.preventDefault();
        const passwordError = validatePassword(input.password, input.confirmPwd);

        setError(passwordError);
        console.log("passwordError", passwordError);
        console.log("Form submitted successfully");
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