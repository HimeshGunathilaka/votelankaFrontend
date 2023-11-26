import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "../css/Header.css";
import { useState, useRef, useEffect } from "react";
import { NavLink } from "react-router-dom";

const green = { color: "#198754" };
const white = { color: "white" };
export default function Header() {
  let dec = null;

  const handleMouseEvent = (event) => {
    dec = document.getElementById(event.target.id);
    dec.style.backgroundColor = green.color;
    dec.style.color = white.color;
  };

  return (
    <>
      <nav class="navbar navbar-expand-lg shadow">
        <div className="container-fluid container-navbar">
          <a
            href="#"
            className="ms-3 heading navbar-brand text-white text-start"
          >
            VOTE<span className="text-success">LANKA</span>
          </a>
          <button
            className="navbar-toggler custom-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div id="navbarSupportedContent" className="collapse navbar-collapse">
            <ul className="navbar-nav ms-auto me-5 mb-2 mb-lg-0 column-gap-5">
              <li className="nav-item">
                <a id="header-team" href="#team">
                  Team
                </a>
              </li>
              <li className="nav-item">
                <a id="header-vote" href="#login">
                  Vote
                </a>
              </li>
              <li className="nav-item">
                <a id="header-about" href="#">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a id="header-admin" href="#admin">
                  Admin
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
