import React from "react";

function Jumbotron() {
  return (
    <div className="container-flex mt-3 ms-2 me-2">
      <div>
        <div className="p-5 mb-4 bg-body-tertiary rounded-2">
          <div className="container-fluid py-5">
            <h1 className="display-5 fw-bold">A Warm Wellcome!</h1>
            <p className="col-md-8 fs-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi provident ea nesciunt voluptate minima velit molestiae voluptates officiis ad vitae.</p>
            <button className="btn btn-primary btn-lg" type="button">Call to action!</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Jumbotron