import React, {createContext,FC, useState, useEffect} from 'react';
import {useNavigate} from 'react-router-dom'
import { CabecalhoComp } from '../components/cabecalho';

export const AuthContext = React.createContext({});

export const AuthProvider : FC = ({children}) => {
  const navigate = useNavigate();
  const [usuario, setUsuario] = useState<any | null>(null);
  const [senha, setSenha] = useState<any | null>(null);
  const [loading,setLoading] = useState(true);
  const [alerta,setAlerta] = useState(false);

  useEffect(() => {
    const recoverUser = localStorage.getItem("user");

    if(recoverUser){
      setUsuario(JSON.parse(recoverUser));
    }

    setLoading(false);
  }, [])

  const login = (usuario : string,senha : string) => {

    const loggedUser = {
      id:"123",
      usuario
    };
    console.log('login', {usuario,senha});
    if(senha === '123'){

      localStorage.setItem("user",JSON.stringify(loggedUser));
      setUsuario(loggedUser);
      setAlerta(false);
      navigate('/home');

    }else{
      setAlerta(true);
    }
  }

  const logout = () => {
    console.log('logout', {usuario,senha});
    localStorage.removeItem("user");
    setUsuario(null);
    navigate('/')
  }

  return (
    <AuthContext.Provider value={{authenticated: !!usuario,usuario,loading,alerta,login,logout}}>
      { !!usuario ? <CabecalhoComp /> : null }
      {children}
    </AuthContext.Provider>
  )
}
