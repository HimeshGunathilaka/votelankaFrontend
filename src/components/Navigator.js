import React from "react";
import "../css/Navigator.css";
import Image from "../images/top.png";

function Navigator() {
  return (
    <>
      <button
        type="button"
        className="z-3 btn btn-secondary rounded-circle shadow-lg position-fixed bottom-1 end-0 me-5"
      >
        <img src={Image} alt="To top" className="navigator-image"></img>
      </button>
    </>
  );
}

export default Navigator;
