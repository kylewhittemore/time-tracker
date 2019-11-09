import React from 'react';
import './App.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import TimerForm from './components/TimerForm';
import TimerDisplay from './components/TimerDisplay';

function App() {
  return (
    <div className="App">
        <Container fluid={true}>
          <Row id="content-container">
            <Col md={{ span: 6, offset: 3 }}>
              <TimerDisplay />
            </Col>
          </Row>
        </Container>
    </div>
  );
}

export default App;
