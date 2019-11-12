import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function TimerForm(props) {

    const handleInputChange = event => {
        event.preventDefault();

        const target = event.target;
        const name = target.name;
        const value = target.value;
        
        props.setFormData({ ...props.formData, [name]: value })
    }

    const handleFormSubmit = event => {
        event.preventDefault();
        props.handleTimerEvent();
    }

    return (
        <Form onSubmit={handleFormSubmit}>
            <Form.Group as={Row} controlId="activitySelectMenu">
                <Form.Label column sm={2}>Activity</Form.Label>
                <Col sm={10}>
                    <Form.Control name="activity" as="select" onChange={handleInputChange}>
                        {props.activities.map(activity => {
                            return (<option key={activity.id}>{activity.activity_name}</option>)
                        })}
                    </Form.Control>
                </Col>
            </Form.Group>
            <Form.Group as={Row} controlId="notesTextField">
                <Form.Label column sm={2}>Notes</Form.Label>
                <Col sm={10}>
                    <Form.Control type="text" placeholder="" name="notes" onChange={handleInputChange} />
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