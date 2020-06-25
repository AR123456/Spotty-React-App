const express = require("express");
// TODO backend storage Mulder- more complicated, cloud storage, AWS, Cloudanary- just need end point to hit to send files to
// for now directing to public folder
// submit with Axios from front end
const fileUpload = require("express-fileupload");
//initialize express
const app = express();
//initialize file upload
app.use(fileUpload());

// Upload Endpoint - sending request to here from react, this is where the file is going
app.post("/upload", (req, res) => {
  // check if the req.files is null
  if (req.files === null) {
    // send user message no file
    return res.status(400).json({ msg: "No file uploaded" });
  }
  // if there is a file  pull it from the request
  // and asign it to the file const - file will be defined in react
  const file = req.files.file;
  // use the mv method on the file object(move it ), pass in the path
  // use back tickes for the double underscore dirname to get to the
  // react client folder
  file.mv(`${__dirname}/client/public/uploads/${file.name}`, (err) => {
    if (err) {
      // if there is an error do this
      console.error(err);
      return res.status(500).send(err);
    }
    // no error so send the file name and the file path with file to react
    res.json({ fileName: file.name, filePath: `/uploads/${file.name}` });
  });
});

app.listen(5000, () => console.log("Server Started..."));
