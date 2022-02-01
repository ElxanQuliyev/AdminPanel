import React from 'react'
import { Link } from 'react-router-dom'
import './header.scss';
function Header() {
    return (
        <header>
            <div className="container">
                <div className="d-flex align-items-center justify-content-between">
                    <div className="logo">
                        <h4>Logo</h4>
                    </div>
                    <nav className="menu">
                        <ul className='d-flex list-unstyled m-0'>
                            <li>
                                <Link to="/">Home</Link>
                            </li>
                            <li>
                                <Link to="/movie">Movie</Link>
                            </li>
                            <li>
                                <Link to="/tv-show">Tv Show</Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    )
}

export default Header
