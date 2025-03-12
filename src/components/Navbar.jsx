import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Bootstrap CSS
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // Bootstrap JavaScript (with Popper.js)

/**
 * Navigation Component
 */
function Nav() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light" style={{ backgroundColor: '#e3f2fd' }}>
            <a className="navbar-brand" href="#" style={{color:'red', fontFamily:'fantasy'}}>Text Toolbox</a>
            <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse" // Bootstrap 5 requires `data-bs-*` instead of `data-*`
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        <a className="nav-link active" href="#">Home</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link active" href="#">About</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link active" href="#">Contact Us</a>
                    </li>
                </ul>
                <form className="d-flex">
                    <button className="btn btn-outline-danger " type="submit">Login</button>
                </form>
            </div>
        </nav>
    );
}

export default Nav;
