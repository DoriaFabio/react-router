import { NavLink } from "react-router-dom"

function HeaderComponent() {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <NavLink to={"/"} className="navbar-brand">Il mio blog</NavLink>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <NavLink to={"/"} className="nav-link active" aria-current="page">Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to={"/about"} className="nav-link">About Us</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to={"/contact"} className="nav-link">Contact</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to={"posts"} className="nav-link" >Elenco Post</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default HeaderComponent;