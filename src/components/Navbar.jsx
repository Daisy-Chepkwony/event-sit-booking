import { Link, NavLink } from "react-router-dom"

const Navbar = ()=> {

    return(
        <nav className="navbar navbar-expand-lg bg-light  ">
            <div className="container-fluid p-7">
                <h1>EVENT-SEAT-BOOK</h1>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0 text-uppercase">
                    <li className="nav-item">
                        <NavLink className="nav-link fw-bolder p-3 m-2 " aria-current="page" to="/">Home</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link fw-bolder p-3 m-2" to="/events">EVENTS</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link fw-bolder p-3 m-2" to="/addevents">ADDEVENTS</NavLink>
                    </li>
                    
                </ul>
                
                </div>
            </div>
        </nav>
    )
}
export default Navbar