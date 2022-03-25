import React,{ useState, FC, useContext } from "react";
import {BrowserRouter as Router,Routes,Route,Link,Navigate} from "react-router-dom";
import Login from "../pages/Login";
import {Home} from "../pages/Home";
import {AuthProvider,AuthContext} from '../contexts/auth';
import Filial from "../pages/Filial";
import FilialProvider from "../contexts/filial";

const AppRoutes = () => {

  const Private = ({children} : any) => {
    const {authenticated,loading} : any = useContext(AuthContext);

    if(loading){
      return <div className="loading">Carregando...</div>
    }

    if(!authenticated){
      return <Navigate to="/" />
    }

    return children;
  }

  return(
    <Router>
      <AuthProvider>
          <FilialProvider>
            <Routes>
              <Route path="/" element={<Login/>} />
              <Route path="/home" element={<Private><Home/></Private>} />
                <Route path="/filial" element={<Private><Filial/></Private>} />
            </Routes>
          </FilialProvider>
      </AuthProvider>
    </Router>
  )
}

export default AppRoutes;