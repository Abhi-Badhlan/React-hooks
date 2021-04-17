import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Button, Card, Col, Container, Form, Row } from 'react-bootstrap';

export const LoginView=()=>{
    return(
     <Container>
         <Row style={{marginTop:200}}></Row>
        <Row>
                   
           
            <Col lg={3}></Col>
        <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="holder.js/100px180" />
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
  
  
    <Form>
  <Form.Group controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" />
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>

  <Form.Group controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" />
  </Form.Group>
  <Form.Group controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Check me out" />
  </Form.Group>
  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>
   
 
 
  </Card.Body>
</Card>
</Row>
</Container>
    );
}