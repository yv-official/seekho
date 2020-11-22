import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button, TextField } from "@material-ui/core";
import axios from "../../api";

//images
import backgroundImage from "../../images/home-background.jpg";

//component starts
const HomePage = () => {
  const [formValues, setFormValues] = useState({ username: "", password: "" });
  const [randomData, setRandomData] = useState({});
  useEffect(async () => {
    const data = await axios.get("/api");
    setRandomData(data);
  }, []);

  //function to handle form values changes
  const handleFormValues = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    //pass field values to the state
    setFormValues({ ...formValues, [name]: value });
  };

  //function to handle form submit
  const handleFormSubmit = () => {
    console.log(formValues);
  };

  return (
    <div className="body-container homepage">
      <div className="randData">{JSON.stringify(randomData)}</div>
      {/* background image: cover */}
      <img class="homepage__img" src={backgroundImage} alt="background" />
      {/* backgrund overlay */}
      <div className="homepage__overlay"></div>
      {/* homepage left part */}
      <div className="homepage__left">
        {/* <div className=""> */}
        <span className="homepage__left-main-logo flex margin-bottom-2">
          SEEKHO
        </span>
        {/* </div> */}
        <span className="flex size-1-8 font-white margin-bottom-1">
          Register
        </span>
        <div className="button-container">
          <Link className="link" to="/register/student">
            <Button
              className="btn margin-right-2"
              variant="contained"
              color="primary"
            >
              Student
            </Button>
          </Link>
          <Link className="link" to="/register/institute">
            <Button className="btn" variant="contained" color="primary">
              Institute
            </Button>
          </Link>
        </div>
      </div>

      {/* home page right part */}
      <div className="homepage__right">
        <div className="form_container">
          <form>
            <span className="form-heading flex margin-bottom-2 center">
              Login
            </span>
            <TextField
              name="username"
              className="margin-bottom-2"
              type="text"
              variant="outlined"
              label="User Name"
              value={formValues.username}
              onChange={(event) => handleFormValues(event)}
            />

            <TextField
              name="password"
              className="margin-bottom-2"
              type="password"
              variant="outlined"
              label="Password"
              value={formValues.password}
              onChange={(event) => handleFormValues(event)}
            />

            <Button
              variant="contained"
              color="primary"
              onClick={handleFormSubmit}
            >
              Login
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
