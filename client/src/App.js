import React from 'react';
import './App.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Timer from './components/Timer/Timer.js';

function App() {

    return (
        <div>
            <Container fluid={true}>
                <Row id="content-container">
                    <Col md={{ span: 6, offset: 3 }}>
                        <Timer />
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default App;
