import "../css/Vote.css";
import Candidate from "./Candidate.js";
import Party from "./Party.js";
import Party_1 from "../images/party_1.jpg";

function Vote(props) {
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
                Identity card number : 8524562v
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
                  <Party />
                  {/* <div className="container-sm d-flex flex-column">
                    <div className="party container-sm shadow-sm rounded-circle btn btn-outline-success px-2 py-2">
                      <img
                        src={Party_1}
                        alt="party 02"
                        className="rouned-circle img-fluid party-image"
                      ></img>
                    </div>
                    <p className="text-center text-success fs-6 mt-2">UNP</p>
                  </div> */}
                </div>
              </div>
            </div>

            <div className="column-right px-3 container d-flex flex-column mt-2">
              <h5 className="h5 text-center text-light">Candidates</h5>
              <div className="candidates-holder d-flex py-3 row row-cols-3 shadow rounded container-fluid">
                <Candidate />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Vote;
