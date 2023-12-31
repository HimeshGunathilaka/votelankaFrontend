import "../css/Vote.css";
import Candidate from "./Candidate.js";
import Party from "../images/all_party.jpg";
import Party_1 from "../images/party_1.jpg";
import Party_2 from "../images/party_2.jpg";
import Id_Icon from "../images/id-card.png";
import Fingerprint from "../images/fingerprint.png";
import Shashi from "../images/shashi.jpg";
import toast, { Toaster } from "react-hot-toast";
import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck, faTimes } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";

let voteCount = 0;
let indexes = [];
function Vote(props) {
  const [parties, setParties] = useState([]);
  let [party, setParty] = useState("all");
  let [candidates, setCandidates] = useState([]);
  const [candidate, setCandidate] = useState("");
  const [submit, setSubmit] = useState("d-none");
  const [submitAlert, setSubmitAlert] = useState("d-none");
  const [submitForm, setSubmitForm] = useState("d-none");

  let list = candidates.filter((candidate) => {
    if (party === "UNP") {
      return candidate.party === party && candidate.area === props.area;
    } else if (party === "HNF") {
      return candidate.party === party && candidate.area === props.area;
    } else if (party === "UPUF") {
      return candidate.party === party && candidate.area === props.area;
    } else if (party === "JVP") {
      return candidate.party === party && candidate.area === props.area;
    } else {
      return candidate.area === props.area;
    }
  });

  useEffect(() => {
    loadParties();
  }, [parties]);

  useEffect(() => {}, [candidate]);

  useEffect(() => {
    loadCandidates();
  }, [candidates]);

  const loadParties = async () => {
    try {
      const results = await axios.get("http://localhost:8080/party/*");
      setParties(results.data);
    } catch (error) {
      console.log(error);
    }
  };

  const loadCandidates = async () => {
    try {
      const candidateResults = await axios.get(
        "http://localhost:8080/candidate/*"
      );
      setCandidates(candidateResults.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleClose = () => {
    setSubmitAlert("d-none");
  };

  const handleVote = (event, position) => {
    if (event.target.checked) {
      voteCount = voteCount + 1;
      if (voteCount === 3) {
        indexes.push(position);
        console.log(indexes.length);
        toast.error("You can only use 3 votes !");
      } else {
        indexes.push(position);
        console.log(indexes.length);
      }
    } else {
      indexes.splice(indexes.indexOf(position), 1);
      console.log(indexes.length);
      voteCount = voteCount - 1;
    }
  };
  return (
    <>
      <Toaster duration={4000} />
      <div
        id="vote"
        className="container-fluid mt-3 justify-content-center align-items-center d-flex flex-column"
      >
        <h2 className="mb-5 text-white">Voting form</h2>
        <div className="container-fluid rounded py-5 my-3 d-flex align-items-center flex-column container-vote shadow">
          <div className="container-fluid d-flex flex-row">
            <div className="container-sm d-flex flex-column justify-content-start mb-2">
              <h4 className="h4 text-white mb-3">Welcome, {props.name} !</h4>
              <div className="d-flex container-sm flex-row align-items-start m-0 p-0 container-info">
                <img src={Id_Icon} className="img-fluid me-2" />
                <p className="fs-6 mb-5 text-start">
                  Identity card number :{" "}
                  <span className="ms-3">{props.idNumber}</span>
                </p>
              </div>
            </div>
            <div className="container-sm d-flex flex-column justify-content-start mb-2">
              <p className="text-white">text info</p>
            </div>
          </div>

          <div className="container-fluid d-flex flex-wrap row-cols-1 row-cols-md-3 g-4 justify-content-around align-items-center">
            <div className="col column-left container d-flex flex-column mt-2">
              <h5 className="col h5 text-light">Parties</h5>
              <div className="col party-container rounded-pill d-flex flex-row py-4">
                <div className="container-sm d-flex flex-column row-gap-3 party-holder py-2">
                  <div className="container-sm d-flex flex-column justify-content-center align-items-center">
                    <div className="party container-sm d-flex">
                      <div className="party-background container-sm px-2 py-2 d-flex">
                        <img
                          src={Party}
                          alt="party 01"
                          className="rouned-circle img-fluid party-image"
                          onClick={(e) => setParty("All")}
                        ></img>
                      </div>
                    </div>
                    <p className="text-center fs-6 mt-2">All</p>
                  </div>
                  {parties.map((party, index) => (
                    <div
                      key={index}
                      className="container-sm d-flex flex-column justify-content-center align-items-center"
                    >
                      <div className="party container-sm d-flex">
                        <div className="party-background container-sm px-2 py-2 d-flex">
                          <img
                            src={Party_2}
                            alt="party 01"
                            className="rouned-circle img-fluid party-image"
                            onClick={(e) => setParty(party.name)}
                          ></img>
                        </div>
                      </div>
                      <p className="text-center fs-6 mt-2">{party.name}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="col column-right container d-flex flex-column mt-2 align-items-center">
              <h5 className="h5 text-center text-light">Candidates</h5>
              <div className="candidates-holder d-flex py-3 row row-cols-3 rounded container-fluid justify-content-around align-items-center">
                {list.map((candidate, index) => {
                  return (
                    <div
                      key={index}
                      className="justify-content-center align-items-center container-sm d-flex flex-column rounded col mx-2 my-3 candidate py-3 px-3"
                    >
                      <img
                        src={
                          "http://localhost:8080/image/database/" +
                          candidate.image
                        }
                        className="img-fluid img-candidate rounded-circle"
                      ></img>
                      <h4 className="fs-5 mt-4">{candidate.name}</h4>
                      <h4 className="fs-5">No : {candidate.no}</h4>

                      <div className="checkbox-wrapper-10 mt-3">
                        <input
                          className="tgl tgl-flip"
                          id={candidate.name}
                          type="checkbox"
                          onChange={(event) => handleVote(event, index)}
                        />
                        <label
                          className="tgl-btn"
                          data-tg-off="Vote"
                          data-tg-on="Voted"
                          htmlFor={candidate.name}
                        ></label>
                      </div>

                      {/* <input
                        type="checkbox"
                        className="btn-check"
                        id={candidate.name}
                        autoComplete="off"
                        onChange={(event) => handleVote(event, index)}
                      ></input> */}
                      {/* <label
                        className="btn btn-outline-primary px-5 mt-3"
                        htmlFor={candidate.name}
                      >
                        Vote
                      </label> */}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          <div
            className={`container-fluid ${submit} container-submit justify-content-center align-items-center`}
          >
            <div
              className={`submit-form container-sm ${submitForm} justify-content-center align-items-center`}
            >
              <form className="container-sm gap-3 shadow-lg bg-white rounded pb-2 px-5 pt-2 shadow">
                <div className="mb-3 d-flex flex-column">
                  <h3 className="h4 my-4">Submit Vote</h3>
                  <div className="checkbox-wrapper-46">
                    <input className="inp-cbx" id="cbx-46" type="checkbox" />
                    <label className="cbx" for="cbx-46">
                      <span>
                        <svg width="12px" height="10px" viewbox="0 0 12 10">
                          <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                        </svg>
                      </span>
                      <span>I agree to terms and conditions.</span>
                    </label>
                  </div>

                  <button
                    className="button-80 mt-3"
                    type="button"
                    role="button"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>

            <div className={`wrapper-success ${submitAlert}`}>
              <div className="card">
                <div className="icon">
                  <FontAwesomeIcon icon={faCircleCheck} />
                </div>
                <div className="subject ms-3 mt-3">
                  <h3 className="h5">Vote submitted</h3>
                  <p className="fs-5">
                    <small>Thank you for using our service</small>
                  </p>
                </div>
                <div
                  className="icon-times"
                  onClick={(e) => {
                    handleClose();
                  }}
                >
                  <FontAwesomeIcon icon={faTimes} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Vote;
