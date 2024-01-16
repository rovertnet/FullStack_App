import React, { useContext} from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import { AuthenticateContext } from './AuthContext'

function ManageProd() {
    const     [,setAuthInfo] = useContext(AuthenticateContext)
  return (
    <Container>
        <Row>
              <Col md={10} >Gestion des produits</Col>
              <Col md={2} >
                <Button onClick={()=>setAuthInfo(()=>(
                    {token:'',isAuthenticated:false}
                ))} className='btn btn-danger' >Logout</Button>
              </Col>
        </Row>
    </Container>
  )
}

export default ManageProd