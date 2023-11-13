import "../css/Vote.css";
import Candidate from "./Candidate.js";
import Party from "./Party.js";
import Party_1 from "../images/party_1.jpg";
import Shashi from "../images/shashi.jpg";
import React, { useEffect, useState } from "react";
import axios from "axios";

let voteCount = 0;
let indexes = [];
function Vote(props) {
  const [parties, setParties] = useState([]);
  let [party, setParty] = useState("all");
  let [candidates, setCandidates] = useState([]);
  const [candidate, setCandidate] = useState("");
  let [image, setImage] = useState("");

  let list = candidates.filter((candidate) => {
    if (party === "UNP") {
      return candidate.party === party;
    } else if (party === "HNF") {
      return candidate.party === party;
    } else if (party === "UPUF") {
      return candidate.party === party;
    } else if (party === "JVP") {
      return candidate.party === party;
    } else {
      return candidate;
    }
  });

  useEffect(() => {}, [image]);

  useEffect(() => {
    loadParties();
  }, [parties]);

  useEffect(() => {
    console.log("image is set !");
  }, [candidate]);

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

  const handleVote = (event, position) => {
    if (event.target.checked) {
      voteCount = voteCount + 1;
      if (voteCount === 3) {
        indexes.push(position);
        console.log(indexes.length);
        alert("You have reached maximum vote count !");
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
      <div
        id="vote"
        className="container-fluid mt-3 justify-content-center align-items-center d-flex flex-column"
      >
        <h2 className="mb-5 text-white">Voting form</h2>
        <div className="container-xxl rounded py-5 my-3 shadow-lg d-flex flex-column bg-dark">
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
                        src={Shashi}
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
        </div>
      </div>
    </>
  );
}

export default Vote;
