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
      <nav className="navbar navbar-expand-lg shadow">
        <div className="container-fluid">
          <a
            href="#"
            className="ms-3 my-1 heading navbar-brand text-white text-start"
          >
            VOTE<span className="text-success">LANKA</span>
          </a>
          <div className="collapse navbar-collapse d-flex justify-content-end">
            <ul id="navbar-container" className="navbar-nav mb-2 mb-lg-0 me-5">
              <li className="nav-item mx-4">
                <a id="header-team" href="#team">
                  Team
                </a>
              </li>
              <li className="nav-item mx-4">
                <a id="header-vote" href="#login">
                  Vote
                </a>
              </li>
              <li className="nav-item mx-4">
                <a id="header-about" href="#about">
                  About
                </a>
              </li>
              <li className="nav-item mx-4">
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
