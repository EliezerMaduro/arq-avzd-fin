import { useEffect, useState } from "react";
import {
  FloatingLabel,
  Button,
  Card,
  Col,
  Container,
  Form,
  Row,
} from "react-bootstrap";
import { useForm, useFieldArray, set } from "react-hook-form";

function Purchase() {
  /*const mockClients = [
    {
      id: "1",
      name: "David",
      lastname: "Tibaduiza",
      email: "davidet9412@gmail.com",
      phone: "3012740485",
      address: "Carrera 66 # 38 - 27",
    },
  ];*/
  const [customers, setCustomers] = useState([]);
  const { control, resetField, register, setValue, getValues, handleSubmit } =
    useForm();
  const { fields, append, remove } = useFieldArray({
    control,
    name: "products",
  });
  const onSubmit = (data) => {
    delete data.product;
    console.log(data);
  };

  const onHandleChange = (e) => {
    const name = e.target.value;
    const customer = customers.find((customer) => customer.name === name);
    setValue("customer_id",customer.customer_id);
    setValue("lastname", customer.last_name);
    setValue("email", customer.email);
    setValue("phone_number", customer.phone_number);
    setValue("address", customer.address);
  };

  const onAddProduct = (product) => {
    append(product);
    resetField("product.name");
    resetField("product.quantity");
    resetField("product.value");
  };

  useEffect(() => {
    setCustomers(customers);
  }, []);
  return (
    <Container
      fluid
      className="d-flex align-items-center justify-content-center bg-image"
      style={{ height: "100%" }}
    >
      <Card className="m-5" style={{ maxWidth: "600px" }}>
        <Card.Body className="px-5">
          <h2 className="text-uppercase text-center mb-5">
            Create a purchase order
          </h2>
          <h4 className="text text mb-5">Your information</h4>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Form.Group>
              <FloatingLabel controlId="name" label="Name" className="mb-3">
                <Form.Select
                  className="mb-4"
                  {...register("name")}
                  onChange={onHandleChange}
                  defaultValue={"default"}
                >
                  <option value="default" disabled>Select a customer</option>
                  {customers.map((customer) => (
                    <option key={customer.id}>{customer.name}</option>
                  ))}
                </Form.Select>
              </FloatingLabel>
            </Form.Group>
            <Form.Group>
              <FloatingLabel
                controlId="lastname"
                label="Lastname"
                className="mb-3"
              >
                <Form.Control
                  className="mb-4"
                  {...register("lastname")}
                  type="text"
                  disabled
                />
              </FloatingLabel>
            </Form.Group>
            <Form.Group>
              <FloatingLabel controlId="email" label="Email" className="mb-3">
                <Form.Control
                  className="mb-4"
                  {...register("email")}
                  type="email"
                  disabled
                />
              </FloatingLabel>
            </Form.Group>
            <Form.Group>
              <FloatingLabel
                controlId="address"
                label="Address"
                className="mb-3"
              >
                <Form.Control
                  className="mb-4"
                  {...register("address")}
                  type="text"
                  disabled
                />
              </FloatingLabel>
            </Form.Group>
            <Form.Group>
              <FloatingLabel
                controlId="phone"
                label="Phone Number"
                className="mb-3"
              >
                <Form.Control
                  className="mb-4"
                  {...register("phone")}
                  type="number"
                  disabled
                />
              </FloatingLabel>
            </Form.Group>
            <h4 className="text text mb-5">Invoice Items</h4>
            {fields.length !== 0 && (
              <>
                <Row className="mb-3">
                  <Col className="font-weight-bold" lg={4}>
                    Product
                  </Col>
                  <Col className="font-weight-bold" lg={3}>
                    Quantity
                  </Col>
                  <Col className="font-weight-bold" lg={3}>
                    Unit Price
                  </Col>
                  <Col lg={1}></Col>
                </Row>
                {fields.map((field, index) => (
                  <Row className="mb-3" key={field.id}>
                    <Col lg={4}>{field.name}</Col>
                    <Col lg={3}>{field.quantity}</Col>
                    <Col lg={3}>{field.value}</Col>
                    <Col lg={1}>
                      <Button variant="danger" onClick={() => remove(index)}>
                        x
                      </Button>
                    </Col>
                  </Row>
                ))}
              </>
            )}
            <Row className="mb-3">
              <Col lg={4}>
                <Form.Group>
                  <FloatingLabel controlId="floatingInput" label="Product Name">
                    <Form.Control
                      placeholder="name"
                      {...register("product.name")}
                      type="text"
                    />
                  </FloatingLabel>
                </Form.Group>
              </Col>
              <Col lg={3}>
                <Form.Group>
                  <FloatingLabel
                    controlId="quantity"
                    label="Qty"
                    htmlFor="product-quantity"
                    className="mb-3"
                  >
                    <Form.Control
                      placeholder="1"
                      {...register("product.quantity")} 
                      type="number"
                    />
                  </FloatingLabel>
                </Form.Group>
              </Col>
              <Col lg={3}>
                <Form.Group>
                  <FloatingLabel
                    controlId="product-value"
                    label="Price"
                    className="mb-3"
                  >
                    <Form.Control
                      placeholder="0"
                      {...register("product.value")}
                      type="number"
                    />
                  </FloatingLabel>
                </Form.Group>
              </Col>
              <Col lg={1}>
                <Button className="gradient-custom-4" onClick={() => onAddProduct(getValues("product"))}>
                  +
                </Button>
              </Col>
            </Row>
            <Button
              className="mb-4 w-100 gradient-custom-4"
              size="lg"
              type="submit"
            >
              Submit
            </Button>
          </form>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default Purchase;