import React from "react";

const Register = (props) => {
  return (
    //   TODO come back and make the input feilds not span the page
    <div className="container-fluid">
      <div className="jumbotron famJumbo"></div>
      <form>
        <h1>Family Administrator Registration</h1>

        <div class="form-group row">
          <label class="col-sm-2 col-form-label">Your Name</label>
          <div class="col-sm-10 input">
            <input
              type="text"
              name="name"
              class="form-control"
              value="Your Name"
              //   required
            />
          </div>
        </div>
        <div class="form-group row">
          <label class="col-sm-2 col-form-label">Your Email</label>
          <div class="col-sm-10 input">
            <input
              type="email"
              name="email"
              value="Your Email"
              class="form-control"
              //   id="inputEmail3"
              //   placeholder="Email"
            />
          </div>
        </div>
        <div class="form-group row">
          <label class="col-sm-2 col-form-label">Confirm Your Email</label>
          <div class="col-sm-10">
            <input
              type="email"
              name="email2"
              value="Confirm Your Email"
              class="form-control"
              //   id="inputEmail3"
              //   placeholder="Confirm Your Email"
            />
          </div>
        </div>
        <div class="form-group row">
          <label class="col-sm-2 col-form-label">Your Password</label>
          <div class="col-sm-10">
            <input
              type="password"
              name="password"
              value="Your password"
              class="form-control"
              //   placeholder="Password"
            />
          </div>
        </div>
        <div class="form-group row">
          <label for="inputPassword3" class="col-sm-2 col-form-label">
            Confirm Your Password
          </label>
          <div class="col-sm-10">
            <input
              type="password"
              name="password2"
              value="password2"
              class="form-control"
              //   id="inputPassword3"
              //   placeholder="Password"
            />
          </div>
        </div>
        <div class="form-group row">
          <label for="inputEmail3" class="col-sm-2 col-form-label">
            Your Loved Ones Email
          </label>
          <div class="col-sm-10">
            <input
              type="email"
              name="emailResident"
              value="Your Loved Ones Email"
              class="form-control"
            />
          </div>
        </div>
        <div class="form-group row">
          <label for="inputEmail3" class="col-sm-2 col-form-label">
            Confirm Your Loved ones Email
          </label>
          <div class="col-sm-10">
            <input
              type="email"
              name="emailResident2"
              value="Confirm Your Loved Ones Email"
              class="form-control"
            />
          </div>
        </div>
        <div className="row justify-content-center">
          <div class="form-group row">
            <div class="col-sm-12">
              <button
                type="submit"
                class="btn btn-primary btn-lg btn-block family"
              >
                <span>Submit Registration</span>
              </button>
            </div>
          </div>
        </div>
      </form>
      <div className="row spacer"></div>
      <div className="row spacer"></div>
    </div>
  );
};
export default Register;
