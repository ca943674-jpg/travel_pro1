import React from "react";
import Card from "react-bootstrap/Card";
import "./Travelpro.css";
import Service from "./Service";

function Travelpro() {
  return (
    <div>
      <div className="travel_heading">
        <h1>Why Choose TravelPro?</h1>
        <h5>We provide exceptional travel experiences</h5>
      </div>
      <div className="column w-100 mt-5 h-30 d-flex flex-lg-row flex-md-column flex-column justify-content-center align-items-center  gap-4">
        <Card className="border border-0">
          <Card.Body className="bg-white text-black rounded shadow" id="card_travel">
            <Card.Title className="d-flex justify-content-center">
              <i className="fa-solid fa-book-atlas text-primary fs-2"></i>
            </Card.Title>
            <Card.Subtitle className="mb-2 text-muted text-center">
              Expert Guides
            </Card.Subtitle>
            <Card.Text className="text-center">
              Professional local guides
              with deep knowledge
            </Card.Text>
          </Card.Body>
        </Card>
        <Card className="border border-0">
          <Card.Body className="bg-white text-black rounded shadow" id="card_travel">
            <Card.Title className="d-flex justify-content-center">
              <i className="fa-solid fa-anchor-circle-check text-primary fs-2"></i>
            </Card.Title>
            <Card.Subtitle className="mb-2 text-muted text-center">
              Safe & Secure
            </Card.Subtitle>
            <Card.Text className="text-center">
              Your safety is our top  priority
            </Card.Text>
          </Card.Body>
        </Card>
        <Card className="border border-0">
          <Card.Body className="bg-white text-black  rounded shadow" id="card_travel">
            <Card.Title className="d-flex justify-content-center ">
              <i className="fa-regular fa-clock text-primary fs-2"></i>
            </Card.Title>
            <Card.Subtitle className="mb-2 text-muted text-center">
              24/7 Support
            </Card.Subtitle>
            <Card.Text className="text-center">
              Round-the-clock customer assistance
            </Card.Text>
          </Card.Body>
        </Card>
        <Card className="border border-0">
          <Card.Body className="bg-white text-black rounded shadow" id="card_travel">
            <Card.Title className="d-flex justify-content-center">
              <i className="fa-solid fa-money-bill text-primary fs-2"></i>
            </Card.Title>
            <Card.Subtitle className="mb-2 text-muted text-center">
              Best Prices
            </Card.Subtitle>
           <Card.Text className="text-center">
              Competitive rates
              with no hidden fees
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
      <br />
      <br />
      <br />
      <Service />
    </div>
  );
}

export default Travelpro;
