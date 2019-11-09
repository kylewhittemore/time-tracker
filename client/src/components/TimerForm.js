import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function TimerForm() {

    const now = new Date();
    console.log("NOW: ", now)

    return (
        <Form>
            <Form.Group as={Row}controlId="exampleForm.ControlSelect1">
                <Form.Label column sm={2}>Activity</Form.Label>
                <Col sm={10}>
                <Form.Control as="select">
                    <option>Web Development</option>
                    <option>C# and .NET Study</option>
                    <option>C# and .NET Development</option>
                    <option>Computer Science</option>
                </Form.Control>
                </Col>
            </Form.Group>
            <Form.Group as={Row} controlId="formHorizontalPassword">
                <Form.Label column sm={2}>Notes</Form.Label>
                <Col sm={10}>
                    <Form.Control type="text" placeholder="" />
                </Col>
            </Form.Group>
            <Form.Group as={Row}>
                <Col sm={{ span: 10, offset: 2 }}>
                    <Button type="submit">Create Timer</Button>
                </Col>
            </Form.Group>
        </Form>
    )

}