import React, { useContext, useState } from 'react'
import './Login.css';
import loremImg from '../../dist/img/lorem-img.png'
import {AuthContext} from '../../contexts/auth'
import 'bootstrap/dist/css/bootstrap.min.css'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const Login = () => {

  const { authenticated, login, alerta} : any = useContext(AuthContext);
  const [usuario,setUsuario] = useState("");
  const [senha,setSenha] = useState("");

    const handleSubmit = (e : any) => {
      e.preventDefault();
      console.log('submit',usuario,senha);
      login(usuario,senha);
    }

    return (
      <>
      {/* <div className="wrapper fadeInDown">
          <div id="formContent">
            <div className="fadeIn first">
              <img style={{width:"200px"}} src={loremImg} id="icon" alt="User Icon" />
            </div>
            <p>{String(authenticated)}</p>
            <form onSubmit={handleSubmit}>
              <div className="alert alert-danger" style={{display:(!alerta ? 'none' : 'block')}} role="alert">
                Usuário ou senha invalidos
              </div>

              <input type="text" id="login" 
              className="fadeIn second" 
              name="login" 
              placeholder="Usuário" 
              value={usuario} 
              onChange={(e) => setUsuario(e.target.value)} />

              <input type="password" id="password" 
              className="fadeIn third" 
              name="login" 
              placeholder="Senha"
              value={senha} 
              onChange={(e) => setSenha(e.target.value)}
              />

              <button type="submit" className="fadeIn fourth">Entrar</button>
            </form>
          </div>
      </div> */}
      <div className="container">
        <div className="row container-login">
          <div className="col-6">
            <img style={{width:"200px"}} src={loremImg} id="logo" alt="User Icon" />
            <div className="alert alert-danger" style={{display:(!alerta ? 'none' : 'block')}} role="alert">
              Usuário ou senha invalidos
            </div>

            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Usuário</Form.Label>
                <Form.Control type="text" placeholder="Usuário" value={usuario} 
                    onChange={(e) => setUsuario(e.target.value)}/>
                <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" value={senha} 
                    onChange={(e) => setSenha(e.target.value)} />
              </Form.Group>
              <Button variant="primary" type="submit">
                Entrar
              </Button>
            </Form>
          </div>
        </div>
      </div>
      
      </>
    );
  
}

export default Login;