import React from "react";

function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg bg-black">
      <div className="container-fluid">
        <a className="navbar-brand text-light" href="#">Start Bootstrap</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="true" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

        <div className="navbar-collapse collapse justify-content-end" id="navbarCollapse">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link active text-light" aria-current="page" href="#">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link active text-light" aria-current="page" href="#">About</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-light" href="#">Services</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-light" href="#">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default NavBar