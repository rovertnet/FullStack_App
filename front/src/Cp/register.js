import react from 'react'
import { Col, Container, Row,Card } from 'react-bootstrap'

function Register() {
  return (
    <Container>
        <Row>
              <Col md={1} ></Col>
              <Col md={10} >
                  <Card className=" mt-5">
                      <Card.Header className='text-center'>Inscrivez-vous</Card.Header>
                      <Card.Body>
                          <form  >
                              <Row>
                                <Col md={6} >
                                    <div className='form-group' >
                                        <label htmlFor='nom'>Nom</label>
                                        <input   type='text' className='form-control' />
                                    </div>
                                </Col>
                                <Col md={6} >
                                    <div className='form-group' >
                                        <label htmlFor='email'>E-mail</label>
                                        <input  type='email' className='form-control' />
                                    </div>
                                </Col>
                                <Col md={12} >
                                    <div className='form-group' >
                                        <label htmlFor='pwd'>Mot de passe</label>
                                        <input   type='password' className='form-control' />
                                    </div>
                                </Col>
                              </Row>
                              <button  typeof='submit' className='btn btn-primary mt-2' >S'inscrire</button>
                          </form>
                      </Card.Body>
                      <Card.Footer className="text-muted text-center">Inscrivez-vous à e-Roro Shop</Card.Footer>
                  </Card>
              </Col>
              <Col md={1} ></Col>
        </Row>
    </Container>
  )
}

export default Register