import React from 'react';
import {
  MDBBtn,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBRow,
  MDBCol,
  MDBInput,
  MDBCheckbox
}
from 'mdb-react-ui-kit';

function App() {
  return (
    <MDBContainer className='my-5'>
      <MDBCard>

        <MDBRow className='g-0 d-flex align-items-center'>

          <MDBCol md='4'>
            <MDBCardImage src='./img/image.png' alt='phone' className='rounded-t-5 rounded-tr-lg-0' fluid />
          </MDBCol>

          <MDBCol md='8'>

            <MDBCardBody>

              <MDBInput wrapperClass='mb-4' label='E-mail' id='form1' type='email'/>
              <MDBInput wrapperClass='mb-4' label='Senha' id='form2' type='password'/>

              <div className="d-flex justify-content-between mx-4 mb-4">
                <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Lembra-me' />
                <a href="!#">Esqueceu a Senha?</a>
              </div>

              <MDBBtn className="mb-4 w-100">Entrar</MDBBtn>

            </MDBCardBody>

          </MDBCol>

        </MDBRow>

      </MDBCard>
    </MDBContainer>
  );
}

export default App;