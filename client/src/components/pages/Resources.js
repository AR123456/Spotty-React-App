import React from "react";
// TODO add the associations image icon to the buttons
function Resources() {
  return (
    <div className="container-fluid">
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
        ></div>
        <div
          className="col-sm"
          style={{
            // borderStyle: "solid",
            borderWidth: "10px",
            // borderColor: "black",
          }}
        >
          {" "}
          <h1>US Resources</h1>
          <a
            class="btn btn-primary btn-block family"
            href="https://alz.org/help-support/caregiving"
            target="_blank"
            role="button"
          >
            Alzheimer's Association
          </a>
          <a
            class="btn btn-primary btn-block family"
            href="https://www.mayoclinic.org/diseases-conditions/alzheimers-disease/symptoms-causes/syc-20350447?_ga=2.75483026.1626112720.1592862932-13776468.1592862932"
            target="_blank"
            role="button"
          >
            Mayo Clinic
          </a>
          <a
            class="btn btn-primary btn-block family"
            href="https://alzfdn.org/caregiving-resources/"
            target="_blank"
            role="button"
          >
            Alzheimer's Foundation of America
          </a>
          <h1>International Resources</h1>
          <a
            class="btn btn-primary btn-block family"
            href="https://www.alz.co.uk/caring-for-a-person-with-dementia"
            target="_blank"
            role="button"
          >
            {" "}
            Alzheimer's Disease International
          </a>
        </div>
        <div
          className="col-sm"
          style={{
            height: "15vh",

            borderWidth: "10px",
            // borderColor: "black",
            marginLeft: "10px",
            marginRight: "10px",
          }}
        ></div>
      </div>
      <div className="row spacer"></div>
      <div className="row spacer"></div>
    </div>
  );
}

export default Resources;
