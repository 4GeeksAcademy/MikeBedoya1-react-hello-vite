import React from "react";

function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg bg-black">
      <div className="container-fluid">
        <a className="navbar-brand text-light" href="#">Start Bootstrap</a>

        <div className="collapse navbar-collapse justify-content-end" id="navbarText">
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