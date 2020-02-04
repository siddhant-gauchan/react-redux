import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => (
  <div className="jumbotron">
    <h1>Test</h1>
    <p>React test Redux test</p>
    <Link to="about" className="btn btn-Primary">
      learn more
    </Link>
  </div>
);
export default HomePage;
