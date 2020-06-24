// the home screen will show Welcome to visitFamily...... and the big log in buttons
import React from "react";

function Home() {
  return (
    <div className="container-fluid">
      <div className="jumbotron"></div>
      <h2>Welcome to VisitFamily</h2>
      <h4>I am a ...</h4>
      <div className="row">
        <div className="col-sm">
          <div className="card">
            <div className="card-body">
              <a href="/family" className="card-link">
                <h2 className="card-text">Caregiver/Family Member</h2>
              </a>
            </div>
          </div>
        </div>
        <div className="col-sm">
          <div className="card">
            <div className="card-body">
              <a href="/family" className="card-link">
                <h2 className="card-text">Patient/Resident</h2>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="row spacer"></div>
    </div>
  );
}

export default Home;
