import React, { useState, useEffect } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import axios from 'axios';

export default function TimerForm(props) {
    const [activities, setActivities] = useState([]);

    useEffect(() => {
        async function getActivities() {
          const result = await axios.get('/activities/all');
          console.log(result)
          setActivities(result.data)
          return result;
        }
        getActivities();
      }, [])

    return (
        <Form>
            <Form.Group as={Row} controlId="exampleForm.ControlSelect1">
                <Form.Label column sm={2}>Activity</Form.Label>
                <Col sm={10}>
                    <Form.Control as="select">
                        {activities.map(activity => {
                            return (
                                <option id={activity.id}>{activity.activity_name}</option>)}
                            )}
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
                    <Button onClick={props.handleTimerEvent}>Create Timer</Button>
                </Col>
            </Form.Group>
        </Form>
    )

}