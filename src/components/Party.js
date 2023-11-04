import React, { useEffect, useState } from "react";
import Party_1 from "../images/party_1.jpg";
import axios from "axios";

function Party() {
  const [parties, setParties] = useState([]);

  useEffect(() => {
    loadParties();
  }, []);

  const loadParties = async () => {
    const results = await axios.get("http://localhost:8080/party/*");
    setParties(results.data);
    // console.log(results.data);
  };

  return (
    <>
      {parties.map((party, index) => (
        <div key={index} className="container-sm d-flex flex-column">
          <div className="party container-sm shadow-sm rounded-circle btn btn-outline-success px-2 py-2">
            <img
              src={Party_1}
              alt="party 01"
              className="rouned-circle img-fluid party-image"
            ></img>
          </div>
          <p className="text-center text-success fs-6 mt-2">{party.name}</p>
        </div>
      ))}
    </>
  );
}

export default Party;
