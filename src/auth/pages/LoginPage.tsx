import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context';

export const LoginPage = () => {
  //Para hacer el login, debo hacer un dispatch al authcontext
  //eso se logra con el useContext
  const { login } = useContext(AuthContext);
  const navigate = useNavigate(); 

  const onLogin=()=>{
    login('Fernando Herrera');
    const lastPath = localStorage.getItem('lastPath') || '/';
    //No regresar al Login si fue exitoso
    navigate(lastPath, {replace:true});
  }

  return (
        <section className="vh-100">
          <div className="container-fluid">
            <div className="row">
              <div className="col-sm-6 text-black">
          
                <div className="px-5 ms-xl-4">
                  <i className="fas fa-crow fa-2x me-3 pt-5 mt-xl-4" style={{color:' #709085'}}></i>
                  <span className="h1 fw-bold mb-0">Logo </span>
                </div>
          
                <div className="d-flex align-items-center h-custom-2 px-5 ms-xl-4 mt-5 pt-5 pt-xl-0 mt-xl-n5">
          
                  <form style ={{width: 23 + 'rem' }}>
          
                    <h3 className="fw-normal mb-3 pb-3" style={{ letterSpacing: '1px' }}>
                      Login
                      </h3>
          
                    <div data-mdb-input-init className="form-outline mb-4">
                      <input type="email" id="form2Example18" className="form-control form-control-lg" />
                      <label className="form-label" >Correo electronico</label>
                    </div>
          
                    <div data-mdb-input-init className="form-outline mb-4">
                      <input type="password" id="form2Example28" className="form-control form-control-lg" />
                      <label className="form-label" >Password</label>
                    </div>
          
                    <div className="pt-1 mb-4">
                      <button data-mdb-button-init data-mdb-ripple-init className="btn btn-info btn-lg btn-block" type="button"
                      onClick={onLogin}>
                        Login
                        </button>
                    </div>
          
                    <p className="small mb-5 pb-lg-2"><a className="text-muted" href="#!">Forgot password?</a></p>
                    <p>No tienes una cuenta? <a href="#!" className="link-info">Register here</a></p>
          
                  </form>
          
                </div>
          
              </div>
              <div className="col-sm-6 px-0 d-none d-sm-block">
                <img src="http://localhost:5173/src/assets/heroes/dc-batman.jpg"
                  alt="Login image" className="w-100 vh-100" style={{objectFit: 'cover', objectPosition: 'left'}} />
              </div>
            </div>
          </div>
      </section>
  )
}
