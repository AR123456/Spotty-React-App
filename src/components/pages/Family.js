// show the family caregiver page on Alz connected and care car give resoucesr
import React from "react";
//TODO show the Alz Connected logo on the button

function Family() {
  return (
    <div className="container-fluid">
      <div className="jumbotron famJumbo"></div>
      <div className="row">
        <div
          className="col-sm"
          style={{
            height: "15vh",
            // borderStyle: "solid",
            borderWidth: "10px",
            // borderColor: "black",
            marginLeft: "10px",
            marginRight: "10px",
          }}
        >
          {/* <div className="card">
            <div className="card-body">
              <a href="/family" className="card-link">
                <h2 className="card-text">Caregiver/Family Member</h2>
              </a>
            </div>
          </div> */}
        </div>
        <div
          className="col-sm"
          style={{
            // borderStyle: "solid",
            borderWidth: "10px",
            // borderColor: "black",
          }}
        >
          <a class="btn btn-primary btn-block family" href="#" role="button">
            Send a Message
          </a>
          <a class="btn btn-primary btn-block family" href="#" role="button">
            Upload a Photo
          </a>
          <a class="btn btn-primary btn-block family" href="#" role="button">
            Add a Playlist
          </a>
          <a
            class="btn btn-primary btn-block family"
            href="https://www.alzconnected.org/discussion.aspx?g=topics&f=151"
            target="_blank"
            role="button"
          >
            Alz Connected
          </a>
          <a
            class="btn btn-primary btn-block family"
            href="/resources"
            role="button"
          >
            Caregiver Resouces
          </a>
          <a class="btn btn-primary btn-block family" href="#" role="button">
            Patient Journal
          </a>
        </div>
        <div
          className="col-sm"
          style={{
            height: "15vh",
            // borderStyle: "solid",
            borderWidth: "10px",
            // borderColor: "black",
            marginLeft: "10px",
            marginRight: "10px",
          }}
        ></div>
      </div>
      <div className="row spacer"></div>
    </div>
  );
}

export default Family;
