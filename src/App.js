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
  MDBCheckbox,
  MDBCarousel, 
  MDBCarouselItem 
}
from 'mdb-react-ui-kit';

function App() {
  return (
    <MDBContainer className='my-5'>
      <MDBCard>

        <MDBRow className='g-0 d-flex align-items-center'>

          <MDBCol md='4'>
            
            <MDBCarousel showControls showIndicators>
              <MDBCarouselItem itemId={1}>
                <MDBCardImage src='./img/image.png' alt='phone' className='rounded-t-5 rounded-tr-lg-0' fluid />
              </MDBCarouselItem>
              <MDBCarouselItem itemId={2}>
                <MDBCardImage src='./img/image2.png' alt='phone' className='rounded-t-5 rounded-tr-lg-0' fluid />
              </MDBCarouselItem>
              <MDBCarouselItem itemId={3}>
                <MDBCardImage src='./img/image3.png' alt='phone' className='rounded-t-5 rounded-tr-lg-0' fluid />
              </MDBCarouselItem>
            </MDBCarousel>
          </MDBCol>

          <MDBCol md='8'>

            <MDBCardBody>

              <MDBInput wrapperClass='mb-4' label='E-mail' id='form1' type='E-mail'/>
              <MDBInput wrapperClass='mb-4' label='Senha' id='form2' type='Senha'/>

              <div className="d-flex justify-content-between mx-4 mb-4">
                <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Lembra-me' />
                <a href="!#">Esqueceu a Senha?</a>
              </div>

              <MDBBtn className="mb-4 w-100">Entrar</MDBBtn>
              
              <div class="text-center">
                <p>Não é um membro? <a href="#!">Cadastre AQUI</a></p>
                <p>Siga-nos nas rede sociais</p>
                <button  data-mdb-ripple-init type="button" class="btn btn-secondary btn-floating mx-1">
                  <i class="fab fa-facebook-f"></i>
                </button>

                <button  data-mdb-ripple-init type="button" class="btn btn-secondary btn-floating mx-1">
                  <i class="fab fa-google"></i>
                </button>

                <button  data-mdb-ripple-init type="button" class="btn btn-secondary btn-floating mx-1">
                  <i class="fab fa-twitter"></i>
                </button>

                <button  data-mdb-ripple-init type="button" class="btn btn-secondary btn-floating mx-1">
                  <i class="fab fa-github"></i>
                </button>
              </div>

            </MDBCardBody>

          </MDBCol>

        </MDBRow>

      </MDBCard>
    </MDBContainer>
  );
}

export default App;