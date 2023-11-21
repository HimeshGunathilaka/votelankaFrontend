import React from "react";
import "../css/Navigator.css";
import Image from "../images/top.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";

function Navigator() {
  return (
    <>
      <a href="#">
        <button
          type="button"
          className="button-30 rounded-circle navigator-button"
          role="button"
        >
          {/* <FontAwesomeIcon icon={faArrowUp} style={{ color: "#ffffff" }} /> */}
          <FontAwesomeIcon icon={faHouse} style={{ color: "#ffffff" }} />
        </button>
      </a>
    </>
  );
}

export default Navigator;
