import React from "react";
import {Link} from "react-router-dom";


const Navbar = () => {

    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-success">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">Faculty Management System</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                            aria-expanded="false"
                            aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link to="/auth/authentication" className="nav-link active" aria-current="page" href="#"></Link>
                            </li>
                            <li className="nav-item me-3">
                                <Link to="/teachers" className="nav-link active" aria-current="page" name="teachers"
                                      href="#">Teachers</Link>
                            </li>
                            <li className="nav-item me-3">
                                <Link to="/students" className="nav-link active" aria-current="page" name="students"
                                      href="#">Students</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/groups" className="nav-link active" aria-current="page" name="groups"
                                      href="#">Groups</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/auth/register" className="nav-link active" aria-current="page" name="register"
                                      href="#">Register</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/auth/authenticate" className="nav-link active" aria-current="page" name="authenticate"
                                      href="#">Login</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar;