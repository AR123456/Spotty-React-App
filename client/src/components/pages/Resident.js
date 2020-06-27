//  show the Patient / Resident page
import React from "react";

function Resident() {
  return (
    <div className="container-fluid">
      <div className="jumbotron famJumbo"></div>
      <div class="container">
        <div class="row justify-content-around">
          <div class="col-4 resident">
            {" "}
            <a class="btn btn-primary btn-block family" href="#" role="button">
              <i class="fa fa-envelope"></i>
            </a>
          </div>
          <div class="col-4 resident">
            {" "}
            <a class="btn btn-primary btn-block family" href="#" role="button">
              {" "}
              <i class="fas fa-image"></i>
            </a>
          </div>
        </div>
        <div class="row justify-content-around">
          <div class="col-4 resident">
            {" "}
            <a class="btn btn-primary btn-block family" href="#" role="button">
              <i class="fa fa-music"> </i>
            </a>{" "}
          </div>
          <div class="col-4 resident">
            {" "}
            <a class="btn btn-primary btn-block family" href="#" role="button">
              {/* <i class="fas fa-book-open"></i> */}
              <i class="far fa-edit"> </i>
            </a>
          </div>
        </div>
        <div class="row justify-content-end">
          <div class="col-4 resident">
            {" "}
            <a
              class="btn btn-primary btn-block family"
              href="https://www.alzconnected.org/discussion.aspx?g=topics&f=151"
              target="_blank"
              role="button"
            >
              <i class="fas fa-user-friends"> </i>
              <h6>Alz Connected</h6>
            </a>
          </div>
          <div class="col-4"></div>
        </div>
      </div>
      <div className="row spacer"></div>
    </div>
  );
}

export default Resident;
