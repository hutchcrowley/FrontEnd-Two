import React from "react";
import Login from "../UserAuth/Login";
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <div className="landing-page">
      <h1>Droom</h1>
      <h2>Find Your Droom Job!</h2>
      <Login />
      <h4>Don't have an account? </h4>
      {/* <div className="links"> */}
      <Link to="/register">Sign Up</Link>
      {/* </div> */}
    </div>
  );
};

export default LandingPage;
