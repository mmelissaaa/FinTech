import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import carausel1 from "../images/carausel1.jpg";
import carausel2 from "../images/carausel2.jpg";
import carausel3 from "../images/carausel3.jpg";
import carausel4 from "../images/carausel4.jpg";
import "./Carausel.css";

const Carausel = () => {
  return (
    <>
      <div
        id="carouselExampleCaptions"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="3"
            aria-label="Slide 4"
          ></button>
        </div>
        <div className="carousel-inner" style={{ height: "400px" }}>
          <div className="carousel-item active" style={{ height: "100%" }}>
            <img
              src={carausel1}
              className="d-block w-100"
              alt="..."
              style={{
                height: "100%",
                objectFit: "cover",
              }}
            />
            <div className="carousel-caption d-none d-md-block">
              <h5 style={{ color: "black" }}>Investment & Wealth Management</h5>
              {/* <p>
                Some representative placeholder content for the first slide.
              </p> */}
            </div>
          </div>
          <div className="carousel-item" style={{ height: "100%" }}>
            <img
              src={carausel2}
              className="d-block w-100"
              alt="..."
              style={{
                height: "100%",
                objectFit: "cover",
              }}
            />
            <div className="carousel-caption d-none d-md-block">
              <h5 style={{ color: "black" }}>
                Budgeting & Personal Finance Management
              </h5>
              {/* <p>
                Some representative placeholder content for the second slide.
              </p> */}
            </div>
          </div>
          <div className="carousel-item active" style={{ height: "100%" }}>
            <img
              src={carausel3}
              className="d-block w-100"
              alt="..."
              style={{
                height: "100%",
                objectFit: "cover",
              }}
            />
            <div className="carousel-caption d-none d-md-block">
              <h5 style={{ color: "black" }}>Loans and Credit Services</h5>
              {/* <p>
                Some representative placeholder content for the first slide.
              </p> */}
            </div>
          </div>
          <div className="carousel-item active" style={{ height: "100%" }}>
            <img
              src={carausel4}
              className="d-block w-100"
              alt="..."
              style={{
                height: "100%",
                objectFit: "cover",
              }}
            />
            <div className="carousel-caption d-none d-md-block">
              <h5 style={{ color: "black" }}>Tax Services</h5>
              {/* <p>
                Some representative placeholder content for the first slide.
              </p> */}
            </div>
          </div>
          {/* Repeat for other slides... */}
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </>
  );
};

export default Carausel;
