import React from 'react';
import Heading from "../layout/Heading";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./Contact.css";
import { useHistory } from 'react-router-dom';

export default function Contact() {
    let history = useHistory();

    function handleClick() {
        history.push("/");
    }

    return (
        <>
            <Heading title="Contact us" />

            <Form>
                <Form.Group controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Send us your questions!</Form.Label>
                    <Form.Control as="textarea" rows="3" />
                </Form.Group>
                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="name" placeholder="Enter full name" />
                </Form.Group>
                <Form.Group controlId="formBasicName">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>
                <Button type="button" onClick={handleClick}>
                    Submit
                </Button>
            </Form>
        </>
    );
}