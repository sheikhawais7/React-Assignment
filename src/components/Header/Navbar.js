import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { useAuthContext } from '../../contexts/AuthContext'

export default function Navbar() {
    const { dispatch } = useAuthContext()

    const logout = () => {
        dispatch({ type: "SET_LOGGED_OUT" })
        localStorage.setItem("token", "false")
        localStorage.removeItem("User")
    }

    return (
        <header>
            <nav className="navbar navbar-expand-lg bg-primary navbar-dark">
                <div className="container">
                    <Link to="/" className="navbar-brand" href="#">Home</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-lg-0">
                            <li className="nav-item">
                                <Link to="dashboard/" className="nav-link active">Create Todo</Link>
                            </li>
                            <li className="nav-item dropdown">
                                <button className="nav-link dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">Setting</button>
                                <ul className="dropdown-menu">
                                    <li><Link to="/dashboard/updatepassword" className="dropdown-item" href="#">Update Password</Link></li>
                                    {/* <li><hr className="dropdown-divider" /></li> */}
                                </ul>
                            </li>
                        </ul>
                        <ul className="navbar-nav ms-auto me-2 mb-lg-0">
                            <li className="nav-item">
                                <Link to="/about" className="nav-link active">About Us</Link>
                            </li>
                        </ul>
                        <div className="d-flex">
                            <button className='btn btn-danger' onClick={logout}>Logout</button>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    )
}
