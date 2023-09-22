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
          
        </MDBCardBody>
      </MDBCard>
    </MDBContainer>
  );
}

export default FinancialStatement;