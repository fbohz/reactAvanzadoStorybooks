import React, {useState} from "react";
import { Form, Modal, Button, Col } from "react-bootstrap";

export const Sample = () => {
    const [userName, setName] = useState("")
    const [show, setShow] = useState(false);
    const handleSubmit = (event) => {   
        event.preventDefault()
        setShow(false)
        debugger
        setName(event.targe.value)
    }

    return (
        <React.Fragment>
         <Button variant="outline-danger" size="sm" onClick={() => setShow(true)}>Show Modal</Button>
        <Modal show={show} onHide={() => setShow(false)}>
          <Modal.Header closeButton>
            <Modal.Title>Hola</Modal.Title>
          </Modal.Header>
          <Form onSubmit={(event)=>handleSubmit(event)}>
            <Modal.Body>
              <Form.Row>
                <Form.Group as={Col} controlId="formGridEmail">
                  <Form.Label>Tu Nombre</Form.Label>
                  <Form.Control
                    name="name"
                    required
                    type="title"
                    placeholder="title"
                    defaultValue={userName}
                  />
                </Form.Group>
              </Form.Row>
            </Modal.Body>
            <Modal.Footer>
              <Button type="button" variant="secondary" onClick={() => setShow(false)}>
                Close
              </Button>
              <Button type="submit" variant="primary">
                Save Changes
              </Button>
            </Modal.Footer>
          </Form>
        </Modal>
        {/* <p>onHide</p> */}
        {userName ? userName : "null"}
        </React.Fragment>
      );
    }