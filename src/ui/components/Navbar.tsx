import { useContext } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { AuthContext } from '../../auth';


export const Navbar = () => {

    const {logout, authState} = useContext(AuthContext);

    const navigate = useNavigate();

    const onLogout = () =>{

        logout();
        //Limpiar el localstorage
        //Evitar regresar al historial anterior, por el reemplazo 
         navigate('/login', { replace: true});
    }
    const logoImgUrl = `https://res.cloudinary.com/dgeig1ohh/image/upload/v1744314115/heroes/mydc_wzzbbx.png`;
    
    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark p-2">
            
            <Link 
                className="navbar-brand" 
                to="/">
                HeroesAPP
            </Link>

            <div className="navbar-collapse">
                <div className="navbar-nav">

                    <NavLink 
                        //activeClassName="active"
                        className={({isActive})=> `nav-item nav-link ${isActive ? 'active' : ''}`} 
                        //exact
                        
                        to="/marvel"
                        
                    >
                        Marvel
                    </NavLink>

                    <NavLink 
                        //activeClassName="active"
                        className={({isActive})=> `nav-item nav-link ${isActive ? 'active' : ''}`} 
                        //exact
                        to="/dc"
                    >
                        DC
                    </NavLink>

                    <NavLink 
                        //activeClassName="active"
                        className={({isActive})=> `nav-item nav-link ${isActive ? 'active' : ''}`} 
                        //exact
                        to="/search"
                    >
                        Search
                    </NavLink>

                </div>
            </div>

            <div className="navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-end">
                <ul className="navbar-nav ml-auto">
                
                    <span className='nav-item nav-link text-info'>
                    <img src={logoImgUrl} width={30} height={28}></img>
                        {authState.user?.name}
                    </span>

                    <button className="nav-item nav-link btn" 
                    onClick={ onLogout}>
                        Logout
                    </button>
                </ul>
            </div>
        </nav>
    )
}