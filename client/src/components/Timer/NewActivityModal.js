import React from 'react'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'

export default function NewActivityModal(props) {

    return (
        <>
            <Modal show={props.show} onHide={props.handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group controlId="activityInput">
                            <Form.Label>Activity</Form.Label>
                            <Form.Control type="text" placeholder="Enter a new activity to track" />
                        </Form.Group>
                        <Button variant="primary" type="" onClick={props.handleClose}>
                            Submit
                </Button>
                    </Form>
                </Modal.Body>
            </Modal>
        </>
    )

}