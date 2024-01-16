import React, { useContext } from 'react'
import { Container, Row, Col,Card } from 'react-bootstrap' 
import {useForm} from 'react-hook-form'
import axios from 'axios'
import { AuthenticateContext } from './AuthContext';
import { useNavigate } from 'react-router-dom';

const api = axios.create({
    baseURL: "http://localhost:4000/api/v1"
});
function Auth() {
    const {register, handleSubmit} = useForm()
    const [, setAuthInfo] = useContext(AuthenticateContext)
    const Navigate = useNavigate()
    const submitFormAuth = (data)=>{
        api.post('/connexion',{
            "email":data.email,
            "mdp":data.mdp
        })
        .then(res=>{
            console.log(res.data);
            setAuthInfo(() => ({ token: res.data, isAuthenticated: true }))
            Navigate('/manageProd')
        })
    }
  return (
    <Container>
        <Row>
            <Col md={3} ></Col>
            <Col md={6} >
                  <Card className=" mt-5">
                      <Card.Header className='text-center'>Authentification</Card.Header>
                      <Card.Body>
                          <form onSubmit={handleSubmit(submitFormAuth)} >
                              <div className='form-group'>
                                  <label htmlFor='email'>E-mail</label>
                                  <input {...register('email')} type="email" className='form-control' />
                              </div>
                              <div className='form-group'>
                                  <label htmlFor='email'>Mot de passe</label>
                                  <input {...register('mdp')} type="password" className='form-control' />
                              </div>
                              <button typeof='submit' className='btn btn-primary mt-2' >S'authentifiez</button>
                          </form>
                      </Card.Body>
                      <Card.Footer className="text-muted text-center">Connectez-vous à e-Roro Shop</Card.Footer>
                  </Card>
            </Col>
            <Col md={3} ></Col>
        </Row>
    </Container>
  )
}

export default Auth