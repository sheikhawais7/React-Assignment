import React from 'react'
import { Link } from 'react-router-dom'

export default function Topbar() {
    return (
        <header>
            <nav className="navbar navbar-expand-lg navbar-dark">
                <div className="container">
                    <Link to="/" className="navbar-brand" href="#">Home</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item dropdown">
                                <button className="nav-link dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">Authenticated</button>
                                <ul className="dropdown-menu">
                                    <li><Link to="/auth/login" className="dropdown-item" href="#">Login</Link></li>
                                    <li><Link to="/auth/signup" className="dropdown-item" href="#">SignUp</Link></li>
                                    <li><hr className="dropdown-divider" /></li>
                                    <li><Link to="/auth/forgetpassword" className="dropdown-item" href="#">Forget Password</Link></li>
                                </ul>
                            </li>
                        </ul>
                        <ul className="navbar-nav ms-auto me-2 mb-lg-0">
                            <li className="nav-item">
                                <Link to="/about" className="nav-link active">About Us</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    )
}
