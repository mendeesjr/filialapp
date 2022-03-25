
import { useContext } from "react"
import { Link } from "react-router-dom";
import { AuthContext } from "../contexts/auth"

export const CabecalhoComp = () => {
  const {logout,authenticated} : any = useContext(AuthContext);

  const handleLogout = () => {
    logout();
  }

  return (
    <section className="pt-5 pb-5 bg-dark inner-header">
      <div className="container">
        <div className="row">
          <div className="col-md-12 text-center">
            <h1 className="mt-0 mb-3 text-white">Filial App</h1>
            <div className="breadcrumbs">
              <p className="mb-0 text-white">
                <Link className="text-white" to="/home" >Home</Link> / 
                <Link className="text-white" to="/filial" > Filiais </Link> / 
                <a className="text-white" href="#" onClick={handleLogout}> Sair </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}