import React from 'react';
import {useForm} from 'react-hook-form'
import {
  MDBBtn,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBInput
}
from 'mdb-react-ui-kit';

const FinancialStatement = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = data => {
    console.log(data)
  }
  return (
    <MDBContainer fluid className='d-flex align-items-center justify-content-center bg-image' style={{height: "100%"}}>
      <MDBCard className='m-5' style={{maxWidth: '600px'}}>
        <MDBCardBody className='px-5'>
          <h2 className="text-uppercase text-center mb-5">Financial Statement</h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Form.Group>
              <FloatingLabel
                controlId="assets"
                label="assets"
                className="mb-3"
              >
                <Form.Control
                  className="mb-4"
                  {...register("assets")}
                  type="text"
                  disabled
                />
              </FloatingLabel>
            </Form.Group>
            <Form.Group>
              <FloatingLabel controlId="liabilities" label="liabilities" className="mb-3">
                <Form.Control
                  className="mb-4"
                  {...register("liabilities")}
                  type="liabilities"
                  disabled
                />
              </FloatingLabel>
            </Form.Group>
            <Form.Group>
              <FloatingLabel
                controlId="equity"
                label="Equity"
                className="mb-3"
              >
                <Form.Control
                  className="mb-4"
                  {...register("equity")}
                  type="text"
                  disabled
                />
              </FloatingLabel>
            </Form.Group>
            <Form.Group>
              <FloatingLabel
                controlId="accounting_accounts"
                label="Accounting Accounts"
                className="mb-3"
              >
                <Form.Control
                  className="mb-4"
                  {...register("accounting_accounts")}
                  type="number"
                  disabled
                />
              </FloatingLabel>
            </Form.Group>
            <Button
              className="mb-4 w-100 gradient-custom-4"
              size="lg"
              type="submit"
            >
              Submit
            </Button>
          </form>
          
        </MDBCardBody>
      </MDBCard>
    </MDBContainer>
  );
}

export default FinancialStatement;