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

const Purchase = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = data => {
    console.log(data)
  }
  return (
    <MDBContainer fluid className='d-flex align-items-center justify-content-center bg-image' style={{height: "100%"}}>
      <MDBCard className='m-5' style={{maxWidth: '600px'}}>
        <MDBCardBody className='px-5'>
          <h2 className="text-uppercase text-center mb-5">Create a purchase order</h2>
          <h4 className="text text mb-5">Your information</h4>
          <form onSubmit={handleSubmit(onSubmit)}>
          <MDBInput {...register("name")} wrapperClass='mb-4' label='Name' size='lg' id='form1' type='text'/>
          <MDBInput {...register("last_name")} wrapperClass='mb-4' label='Last name' size='lg' id='form1' type='text'/>
          <MDBInput {...register("email")} wrapperClass='mb-4' label='Your Email' size='lg' id='form2' type='email'/>
          <MDBInput {...register("adress")} wrapperClass='mb-4' label='Your Adress' size='lg' id='form3' type='text'/>
          <MDBInput {...register("phone_number")} wrapperClass='mb-4' label='Your phone number' size='lg' id='form4' type='number'/>
          <h4 className="text text mb-5">Products</h4>
          <MDBInput {...register("product")} wrapperClass='mb-4' label='Product' size='lg' id='form1' type='text'/>
          <MDBInput {...register("price")} wrapperClass='mb-4' label='Unit Price' size='lg' id='form1' type='text'/>
          <MDBBtn type="submit" className='mb-4 w-100 gradient-custom-4' size='lg'>Register</MDBBtn>
          </form>
        </MDBCardBody>
      </MDBCard>
    </MDBContainer>
  );
}

export default Purchase;