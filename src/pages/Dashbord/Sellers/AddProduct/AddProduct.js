import React from 'react';
import { FloatingLabel } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


const AddProduct = () => {










    return (
        <>

    <Form>
    <Form.Group className="mb-3" controlId="formBasicEmail">
        {/* <Form.Label>Email address</Form.Label> */}
        <Form.Control type="text" placeholder="Product Name" />
        <Form.Text className="text-muted">
          {/* We'll never share your email with anyone else. */}
        </Form.Text>
      </Form.Group>

    <Form.Group className="mb-3" controlId="formBasicEmail">
        {/* <Form.Label>Email address</Form.Label> */}
        <Form.Control type="number" placeholder="Price" />
        <Form.Text className="text-muted">
          {/* We'll never share your email with anyone else. */}
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
      <FloatingLabel controlId="floatingTextarea2" label="Comments">
        <Form.Control
          as="textarea"
          placeholder="Leave a comment here"
          style={{ height: '100px' }}
        />
      </FloatingLabel>
      </Form.Group>

      {/* <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group> */}
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
        </>
    );
};

export default AddProduct;