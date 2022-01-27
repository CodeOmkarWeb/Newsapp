import React from 'react'
import {
    Link
  } from "react-router-dom";
const Navbar = () => {
        return (
            <div>
                <nav className="navbar fixed-top navbar-expand-lg navbar-light bg-light">
                    <div className="container-fluid">
                        <Link className="navbar-brand" to="#">NewsMonkey</Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item"><Link className="nav-link active" aria-current="page" to="/">Top Headlines</Link></li>
                                <li className="nav-item"><Link className="nav-link active" aria-current="page" to="/business" style={{textTransform:"capitalize"}}>business</Link></li>
                                <li className="nav-item"><Link className="nav-link active" aria-current="page" to="/science" style={{textTransform:"capitalize"}}>science</Link></li>
                                <li className="nav-item"><Link className="nav-link active" aria-current="page" to="/entertainment" style={{textTransform:"capitalize"}}>entertainment</Link></li>
                                <li className="nav-item"><Link className="nav-link active" aria-current="page" to="/sports" style={{textTransform:"capitalize"}}>sports</Link></li>
                                <li className="nav-item"><Link className="nav-link active" aria-current="page" to="/health" style={{textTransform:"capitalize"}}>health</Link></li>
                                <li className="nav-item"><Link className="nav-link active" aria-current="page" to="/technology" style={{textTransform:"capitalize"}}>technology</Link></li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        )
}
export default Navbar;
