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
          {/* TODO if no persistent login detected  model to go to the login or register page   */}
          {/* TODO put this back to family after model/link to register is set up  */}
          <a href="/family" className="card-link">
            {/* <a href="/register" className="card-link"> */}
            <div className="card">
              <div className="card-body">
                <h2 className="card-text">Caregiver/Family Member</h2>
              </div>
            </div>
          </a>
        </div>
        <div className="col-sm">
          <a href="/resident" className="card-link">
            <div className="card">
              <div className="card-body">
                <h2 className="card-text">Patient/Resident</h2>
              </div>
            </div>
          </a>
        </div>
      </div>
      <div className="row spacer"></div>
    </div>
  );
}

export default Home;
