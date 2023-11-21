import "../css/Vote.css";
import Candidate from "./Candidate.js";
import Party from "../images/all_party.jpg";
import Party_1 from "../images/party_1.jpg";
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
        <div className="container-xxl rounded py-5 my-3 d-flex flex-column container-vote">
          <div className="container-fluid row row-cols-2">
            <div className="container-fluid  d-flex flex-column justify-content-start mb-5">
              <h1 className="h1 text-success">Welcome, {props.name} !</h1>
              <p className="text-light-emphasis fs-4 mb-5">
                Identity card number : {props.idNumber}
              </p>
              <p className="text-secondary text-hint">
                * This is your voting area. make sure to use all your votes
                before you leave.
              </p>
              <p className="text-secondary text-hint">
                * You have 3 votes which can use to vote to your candidates.
              </p>
              <p className="text-secondary text-hint">
                * Votes can be used to vote for 3 candidates from the same party
                or different parties.
              </p>
            </div>

            <div className="container-fluid mb-5 flex-column"></div>
          </div>

          <div className="container-fluid d-flex flex-row">
            <div className="column-left container d-flex flex-column me-5 mt-2">
              <h5 className="col h5 text-light">Parties</h5>
              <div className="col party-container rounded-pill shadow d-flex flex-row py-5">
                <div className="container-fluid d-flex flex-column row-gap-3 party-holder">
                  <div className="container-sm d-flex flex-column">
                    <div className="party container-sm shadow-sm rounded-circle btn btn-outline-success px-2 py-2">
                      <img
                        src={Party}
                        alt="party 01"
                        className="rouned-circle img-fluid party-image"
                        onClick={(e) => setParty("All")}
                      ></img>
                    </div>
                    <p className="text-center text-success fs-6 mt-2">All</p>
                  </div>
                  {parties.map((party, index) => (
                    <div
                      key={index}
                      className="container-sm d-flex flex-column"
                    >
                      <div className="party container-sm shadow-sm rounded-circle btn btn-outline-success px-2 py-2">
                        <img
                          src={Party_1}
                          alt="party 01"
                          className="rouned-circle img-fluid party-image"
                          onClick={(e) => setParty(party.name)}
                        ></img>
                      </div>
                      <p className="text-center text-success fs-6 mt-2">
                        {party.name}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="column-right px-3 container d-flex flex-column mt-2">
              <h5 className="h5 text-center text-light">Candidates</h5>
              <div className="candidates-holder d-flex py-3 row row-cols-3 shadow rounded container-fluid">
                {list.map((candidate, index) => {
                  return (
                    <div
                      key={index}
                      className="container btn btn-outline-success d-flex flex-column rounded shadow-sm col mx-2 my-2 candidate py-3 px-3"
                    >
                      <img
                        src={
                          "http://localhost:8080/image/database/" +
                          candidate.image
                        }
                        className="img-fluid img-candidate rounded-circle"
                      ></img>
                      <h1 className="fs-5 mt-3">{candidate.name}</h1>
                      <h4 className="h4">No : {candidate.no}</h4>

                      <input
                        type="checkbox"
                        className="btn-check"
                        id={candidate.name}
                        autoComplete="off"
                        onChange={(event) => handleVote(event, index)}
                      ></input>
                      <label
                        className="btn btn-outline-primary px-5 mt-3"
                        htmlFor={candidate.name}
                      >
                        Vote
                      </label>
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
