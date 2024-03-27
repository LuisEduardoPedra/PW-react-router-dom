import { NavLink, Outlet } from "react-router-dom";

const MenuPublico = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-light">
                <div className="container-fluid">                    
                    <NavLink className="navbar-brand" exact="true" to="/">Atividade 4 - Publico</NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">                                
                                <NavLink className="nav-link active" exact="true" to="/">Home</NavLink>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Ações
                                </a>
                                <ul className="dropdown-menu">
                                    <li>
                                        <NavLink className="dropdown-item"
                                            exact="true" to="/login">Login</NavLink></li>
                                    <li>
                                        <NavLink className="dropdown-item"
                                            exact="true" to="/usuario">Usuario</NavLink>
                                    </li>
                                </ul>
                            </li>
                            
                        </ul>
                    </div>
                </div>
            </nav>      
            <Outlet />
        </>
    )
}

export default MenuPublico;