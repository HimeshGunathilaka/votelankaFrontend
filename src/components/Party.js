import React from "react";
import Party_1 from "../images/party_1.jpg";

function Party() {
  return (
    <>
      <div className="container-sm d-flex flex-column">
        <div className="party container-sm shadow-sm rounded-circle btn btn-outline-success px-2 py-2">
          <img
            src={Party_1}
            alt="party 01"
            className="rouned-circle img-fluid party-image"
          ></img>
        </div>
        <p className="text-center text-success fs-6 mt-2">UPFA</p>
      </div>
    </>
  );
}

export default Party;
