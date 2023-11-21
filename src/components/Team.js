import React from "react";
import "../css/Team.css";
import Himesh from "../images/himesh.jpg";
import Fahma from "../images/fahma.jpg";
import Dinesha from "../images/dinesha.jpg";
import Shashikala from "../images/shashi.jpg";

function Team() {
  return (
    <>
      <div
        id="team"
        className="container-fluid d-flex mt-5 justify-content-center"
      >
        <div className="team-container container-fluid d-flex justify-content-center align-items-center row px-3 py-3">
          <div className="row container text-white justify-content-center">
            <h2 className="text-center">Our Team</h2>
            <div className="container-sm mt-3 text-center">
              Meet our hardworking team. they are the one who worked sleeplessly
              <br />
              to make this dream come true.
            </div>
          </div>
          <div className="row team-container container my-5 column-gap-4 row-gap-3 text-white justify-content-center">
            <div className="col flex-column d-flex px-2 py-2 team-member">
              <div class="main">
                <img
                  src={Himesh}
                  alt="lead-programmer"
                  className="img-fluid img-member"
                ></img>
                <h4 className="mt-3 mb-1">Kavinda Himesh</h4>
                <p className="p-2 text-center">
                  Lead programmer / Back-end developer
                </p>
              </div>
            </div>

            <div className="col flex-column d-flex px-2 py-2 team-member">
              <div class="main">
                <img
                  src={Dinesha}
                  alt="lead-programmer"
                  className="img-fluid img-member"
                ></img>
                <h4 className="mt-3 mb-1">Dinesha Dulakshi</h4>
                <p className="p-2 text-center">
                  Project manager / Front-end developer
                </p>
              </div>
            </div>

            <div className="col flex-column d-flex px-2 py-2 team-member">
              <div class="main">
                <img
                  src={Fahma}
                  alt="lead-programmer"
                  className="img-fluid img-member"
                ></img>
                <h4 className="mt-3 mb-1">Fahma Rasik</h4>
                <p className="p-2 text-center">
                  Business Analyst / Front-end developer
                </p>
              </div>
            </div>

            <div className="col flex-column d-flex px-2 py-2 team-member">
              <div class="main">
                <img
                  src={Shashikala}
                  alt="lead-programmer"
                  className="img-fluid img-member"
                ></img>
                <h4 className="mt-3 mb-1">Shashikala Dilrukshi</h4>
                <p className="p-2 text-center">
                  Quality Analyst / Back-end developer
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Team;
