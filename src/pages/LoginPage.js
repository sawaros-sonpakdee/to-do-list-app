import React, { useState , useContext ,Component} from 'react';
import PersonIcon from 'bootstrap-icons/icons/person.svg';
import PasswordIcon from 'bootstrap-icons/icons/key-fill.svg'
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
//import { Button, Form, InputGroup } from "react-bootstrap"; **** Not working 
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { useNavigate } from 'react-router-dom';
import LoginComponent from '../containers/LoginComponent/login';

class Login extends React.Component{
    componentDidMount(){
        document.body.className="body-component-login";
    }
    render(){
        return(
            
            <div>
                {/* <h1 className='title-text'>To-do List Application</h1> */}
                <LoginComponent/>
            </div>
        );
    }
}
export default Login;