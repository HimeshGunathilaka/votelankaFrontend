import React from "react";
import "../css/Candidate.css";
import Himesh from "../images/himesh.jpg";
import Dinesha from "../images/dinesha.jpg";
import Fahma from "../images/fahma.jpg";
import Shashi from "../images/shashi.jpg";
import { useState } from "react";

// *** candidate was removed from vote
let voteCount = 0;
let indexes = [];
function Candidate(party) {
  const list = [
    { id: "1", name: "Clark Kent", image: Himesh },
    { id: "2", name: "Diana", image: Dinesha },
    { id: "3", name: "Stargirl", image: Fahma },
    { id: "4", name: "Cat Woman", image: Shashi },
  ];

  // const [checkedState, setCheckedState] = useState(
  //   new Array(list.length).fill(false)
  // );

  // const disable = false;

  const handleVote = (event, position) => {
    // const updatedCheckedState = checkedState.map((item, index) =>
    //   index === position ? !item : item
    // );

    // setCheckedState(updatedCheckedState);
    // console.log(updatedCheckedState);

    if (event.target.checked) {
      // indexes.forEach((i) => console.log("indexes :" + i));
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

    // setChecked(!checked);
  };

  return (
    <>
      {list.map((props, index) => (
        <div
          key={props.id}
          className="container btn btn-outline-success d-flex flex-column rounded shadow-sm col mx-2 my-2 candidate py-3 px-3"
        >
          <img
            src={props.image}
            className="img-fluid img-candidate rounded-circle"
          ></img>
          <h1 className="fs-5 mt-3">{props.name}</h1>
          <h4 className="h4">No : 52</h4>

          <input
            type="checkbox"
            className="btn-check"
            id={props.name}
            autoComplete="off"
            // disabled={disable}
            // checked={!checkedState}
            onChange={(event) => handleVote(event, index)}
          ></input>
          <label
            className="btn btn-outline-primary px-5 mt-3"
            htmlFor={props.name}
          >
            Vote
          </label>
        </div>
      ))}
    </>
  );
}

export default Candidate;
