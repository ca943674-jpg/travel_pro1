import React from "react";
import Navbar1 from "./Navbar1";
import "./Home.css";
import Popular from "./Popular";

const Home = () => {
  return (
    <div>
      <div className="container-fluid main d-flex flex-column justify-content-center align-items-center">
        <h1 className="text-white">Discover your next adventure</h1>
        <h4 className="text-white">Explore the world with us</h4>
      </div>
      <Popular />
    </div>
  );
};
export default Home;