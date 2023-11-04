import React from "react";
import "../css/Intro.css";
import Lady from "../images/black_lady.png";
import Vote from "../images/vote.png";

function Intro() {
  // const btn_text = "Let's vote"
  return (
    <>
      <div id="about" className="conatiner pt-1">
        <div className="row container-fluid py-5">
          <div className="col d-flex grid-item container-fluid justify-content-center align-items-center">
            <div className="d-flex flex-column mb-2">
              <h1 className="h1 text-white text-start">
                We simplyfied voting <br />
                process like never
                <br /> before
              </h1>
              <p className="text-start text-white my-4">
                Once a dream is not a dream anymore. now you can
                <br /> post your vote from wherever you are.
              </p>
              <a href="#vote">
                <button
                  type="button"
                  className="btn btn-success btn-vote text-white rounded"
                >
                  Let's vote
                </button>
              </a>
            </div>
          </div>
          <div className="col rounded d-flex grid-item">
            <div className="position-absolute rounded d-flex flex-row">
              <img
                className="img-icon position-absolute"
                src={Vote}
                alt=""
              ></img>
              <img
                src={Lady}
                className="img-intro position-relative rounded"
                alt=""
              ></img>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Intro;
