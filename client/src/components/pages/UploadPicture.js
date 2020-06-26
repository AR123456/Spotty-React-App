import React from "react";
import FileUpload from "../photo/FileUpload";

function UploadPicture() {
  return (
    <div className="container-fluid">
      <div className="jumbotron famJumbo"></div>
      <div className="container mt-4">
        <FileUpload></FileUpload>
        <h4 className="display-4 text-center mb-4">
          <i className="fas fa-image">
            <h4>File Upload</h4>
          </i>
        </h4>
      </div>
    </div>
  );
}

export default UploadPicture;
