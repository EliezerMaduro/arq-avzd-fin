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

const Payment = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = data => {
    console.log(data)
  }
  return (
    <MDBContainer fluid className='d-flex align-items-center justify-content-center bg-image' style={{height: "100%"}}>
      <MDBCard className='m-5' style={{maxWidth: '600px'}}>
        <MDBCardBody className='px-5'>
          <h2 className="text-uppercase text-center mb-5">Pay your order</h2>
          <form onSubmit={handleSubmit(onSubmit)}>
          <MDBInput {...register("invoice_number")} wrapperClass='mb-4' label='Invoice number' size='lg' id='form1' type='text'/>
          <MDBInput {...register("payment_method")} wrapperClass='mb-4' label='Payment Method' size='lg' id='form1' type='text'/>
          <MDBInput {...register("currency")} wrapperClass='mb-4' label='Currency' size='lg' id='form2' type='text'/>
          <h4 className="text text mb-5">Products</h4>
          <MDBInput {...register("product")} wrapperClass='mb-4' label='Product(s)' size='lg' id='form1' type='text'/>
          <MDBInput {...register("price")} wrapperClass='mb-4' label='Unit Price' size='lg' id='form1' type='number'/>
          <MDBInput {...register("subtotal")} wrapperClass='mb-4' label='Subtotal' size='lg' id='form1' type='number'/>
          <MDBInput {...register("taxes")} wrapperClass='mb-4' label='Taxes' size='lg' id='form1' type='number'/>
          <MDBInput {...register("total")} wrapperClass='mb-4' label='Total' size='lg' id='form1' type='number'/>
          <MDBBtn type="submit" className='mb-4 w-100 gradient-custom-4' size='lg'>Pay</MDBBtn>
          </form>
        </MDBCardBody>
      </MDBCard>
    </MDBContainer>
  );
}

export default Payment;