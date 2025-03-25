import React, { useState, useEffect } from 'react';
import './Home.css';
import { TimePicker } from 'antd';
import { Modal, Button, Container, Row, Col, InputGroup, Form } from 'react-bootstrap';
// import dayjs from 'dayjs';
const ListBody = () => {

    const [tag, setTag] = useState(null);
    const [items, setItems] = useState([]);
    const [show, setShow] = useState(false);
    const [datalist, setDatalist] = useState({
        list1: {
            data: 'work out'
        },
        list2: {
            data: 'reading book'
        },
        list3: {
            data: 'clean the room'
        },
        list4: {
            data: 'coding'
        },
        list5: {
            data: "watch the series"
        }
    });
    // const [indexs,setIndexs]  = useState(0);
    const addItem = () => { setItems([...items, items.length + 1]); };
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [validated, setValidated] = useState(false);
    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.currentTarget;// This refers to the form element
        const formData = new FormData(form);
        console.log("Form Data: ",  formData.values);
        // const firstName = form.elements.firstName.vsalue;
    };

    return (
        <div>
            <Container className='container center'>
                {/* <div className='row'>*/}
                <Button variant="info" id="add-list" onClick={addItem}>Add List</Button>
                {tag === 'p' && <p>This is a paragraph tag</p>}
                <Col className='col'>
                    <ul>
                        <li>
                            <input type='checkbox' /><span>{`${datalist.list1.data}`}</span>
                            <Button variant="primary" onClick={handleShow}>
                                edit
                            </Button>
                        </li>
                        <li>
                            <input type='checkbox' /><span>{`${datalist.list2.data}`}</span>
                            <Button variant="primary" onClick={handleShow}>
                                edit
                            </Button>
                        </li>
                        <li>
                            <input type='checkbox' /><span>{`${datalist.list3.data}`}</span>
                            <Button variant="primary" onClick={handleShow}>
                                edit
                            </Button>
                        </li>
                        <li>
                            <input type='checkbox' /><span>{`${datalist.list4.data}`}</span>
                            <Button variant="primary" onClick={handleShow}>
                                edit
                            </Button>
                        </li>
                        <li>
                            <input type='checkbox' /><span>{`${datalist.list5.data}`}</span>
                            <Button variant="primary" onClick={handleShow}>
                                edit
                            </Button>
                        </li>
                        {items.map((item, index) => (
                            <li className={`item-class item-${index}`}>
                                <input type='checkbox' />
                                <input type='text' />
                                {/* <TimePicker /> */}

                                {/* <button className='edit-list' id="edit-list" onClick={updateList}>Update</button> */}
                                <button className='remove-list btn-dangerous' id="remove-list" >Remove</button>
                            </li>
                        ))}
                    </ul>
                </Col>

                <Modal show={show} >
                    <Modal.Header closeButton onHide={handleClose}> 
                        <Modal.Title>Modal Title</Modal.Title>
                    </Modal.Header>
                    <Form noValidate validated={validated} onSubmit={handleSubmit}>
                        <Modal.Body>

                            <InputGroup>
                                <InputGroup.Checkbox></InputGroup.Checkbox>
                                <Form.Control
                                    aria-label="list to do !"
                                    aria-describedby="inputGroup-sizing-default"
                                />
                                <Button variant='danger'>delete</Button>
                            </InputGroup>

                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={handleClose}>
                                Close
                            </Button>
                            <Button type="submit" cvariant="primary" onClick={handleClose} >
                                Submit
                            </Button>

                        </Modal.Footer>
                    </Form>
                </Modal>
            </Container>
        </div>

    );
};
export default ListBody;