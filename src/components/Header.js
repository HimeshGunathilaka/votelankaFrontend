import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "../css/Header.css";
import { useState, useRef, useEffect } from "react";

const green = { color: "#198754" };
const white = { color: "white" };
export default function Header() {
  let dec = null;

  const handleHover = (event) => {
    dec = document.getElementById(event.target.id);
    if (dec !== null) {
      if (event.type === "mouseenter") {
        dec.style.color = green.color;
      } else {
        dec.style.color = white.color;
      }
    } else {
      console.log("null");
    }
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
                <a
                  id="header-team"
                  className="nav-link"
                  // style={textColor}
                  onMouseEnter={(e) => handleHover(e)}
                  onMouseLeave={(e) => handleHover(e)}
                  aria-current="page"
                  href="#team"
                >
                  Team
                </a>
              </li>
              <li className="nav-item mx-4">
                <a
                  id="header-vote"
                  className="nav-link"
                  // style={textColor}
                  onMouseEnter={(e) => handleHover(e)}
                  onMouseLeave={(e) => handleHover(e)}
                  href="#vote"
                >
                  Vote
                </a>
              </li>
              <li className="nav-item mx-4">
                <a
                  id="header-about"
                  className="nav-link"
                  // style={textColor}
                  onMouseEnter={(e) => handleHover(e)}
                  onMouseLeave={(e) => handleHover(e)}
                  href="#about"
                >
                  About
                </a>
              </li>
              <li className="nav-item mx-4">
                <a
                  id="header-admin"
                  className="nav-link"
                  // style={textColor}
                  onMouseEnter={(e) => handleHover(e)}
                  onMouseLeave={(e) => handleHover(e)}
                  aria-current="page"
                  href="#admin"
                >
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
