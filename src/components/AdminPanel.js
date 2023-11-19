import React, { useEffect, useState } from "react";
import axios from "axios";
import "../css/Admin.css";
import toast, { Toaster } from "react-hot-toast";

function AdminPanel() {
  const [image, setImage] = useState("");
  const [mobileNo, setPhone] = useState("");
  const [name, setName] = useState("");
  const [no, setVoteNumber] = useState("");
  const [area, setArea] = useState("");
  const [party, setParty] = useState("");
  const [candidate, setCandidate] = useState("");
  const [candidates, setCandidates] = useState([]);
  const [areas, setAreas] = useState([]);
  const [parties, setParties] = useState([]);
  const [admin, setAdmin] = useState(false);
  const [adminUsername, setUsername] = useState("");
  const [adminPassword, setPassword] = useState("");
  const [users, setUsers] = useState([]);
  const [warningPassword, setWarningPassword] = useState("");
  const [warningUsername, setWarningUsername] = useState("");
  const [warningPasswordState, setWarningPasswordState] = useState(false);
  const [warningUsernameState, setWarningUsernameState] = useState(false);

  useEffect(() => {
    loadUsers();
  }, [users]);

  useEffect(() => {
    loadCandidates();
  }, [candidates]);

  useEffect(() => {
    loadParties();
  }, [parties]);

  useEffect(() => {
    loadAreas();
  }, [areas]);

  // useEffect(() => {}, [adminUsername]);

  // useEffect(() => {}, [adminPassword]);

  const loadCandidates = async () => {
    try {
      const results = await axios.get("http://localhost:8080/candidate/*");
      setCandidates(results.data);
    } catch (error) {
      console.log(error);
    }
  };

  const loadUsers = async () => {
    try {
      const userResults = await axios.get("http://localhost:8080/user/*");
      setUsers(userResults.data);
    } catch (error) {
      console.log(error);
    }
  };

  const convertToBase64 = (e) => {
    var reader = new FileReader();
    reader.readAsDataURL(e.target.files[0]);
    reader.onload = () => {
      // console.log(reader.result);
      setImage(reader.result);
    };
    reader.onerror = (error) => {
      console.log("error :", error);
    };
  };

  const onAdminSubmit = () => {
    if (adminUsername === "" && adminPassword === "") {
      setWarningUsernameState("d-flex");
      setWarningUsername("Username is empty");
      setWarningPasswordState("d-flex");
      setWarningPassword("Password is empty");
    } else if (adminUsername === "") {
      setWarningUsernameState("d-flex");
      setWarningPasswordState("d-none");
      setWarningUsername("Username is empty");
    } else if (adminPassword === "") {
      setWarningPasswordState("d-flex");
      setWarningUsernameState("d-none");
      setWarningPassword("Password is empty");
    } else {
      setWarningUsernameState("d-none");
      setWarningPasswordState("d-none");
      for (var user in users) {
        if (
          users[user].name === adminUsername &&
          users[user].idNumber === adminPassword
        ) {
          setAdmin(true);
          break;
        }
      }
    }
  };

  const loadParties = async () => {
    try {
      const partyResult = await axios.get("http://localhost:8080/party/*");
      setParties(partyResult.data);
    } catch (error) {
      console.log(error);
    }
  };

  const loadAreas = async () => {
    try {
      const areaResults = await axios.get("http://localhost:8080/area/*");
      setAreas(areaResults.data);
    } catch (error) {
      console.log(error);
    }
  };

  const onSubmit = () => {
    // for (var item in candidates) {
    //   if (
    //     candidates[item].name === name &&
    //     candidates[item].party === party &&
    //     candidates[item].area === area &&
    //     candidates[item].no === no &&
    //     candidates[item].mobileNo === mobileNo
    //   ) {
    //     //voter's identity confirmed
    //     //sets voter by calling setVoter function
    //     setCandidate({
    //       name: candidates[item].name,
    //       image: candidates[item].image,
    //       party: candidates[item].party,
    //       no: candidates[item].no,
    //       mobileNo: candidates[item].mobileNo,
    //       area: candidates[item].area,
    //     });
    //     break;
    //   }
    // }
    // if (candidate.name === undefined) {
    //   const formData = new FormData();
    //   formData.append();
    //   toast.success("Data sumbited !");
    // } else {
    //   toast.error("Duplicate found !");
    //   console.log(
    //     "Name :" +
    //       candidate.name +
    //       " ,Phone :" +
    //       candidate.mobileNo +
    //       " ,Area :" +
    //       candidate.area +
    //       " ,Vote no. :" +
    //       candidate.no +
    //       " ,Party :" +
    //       candidate.party +
    //       " ,Image :" +
    //       candidate.image
    //   );
    // }
  };

  return (
    <>
      <Toaster duration={4000} />
      {admin == false ? (
        <div
          id="admin"
          className="container-fluid d-flex flex-column mt-5 justify-content-center align-items-center"
        >
          <h2 className="text-white mb-5">Admin Login</h2>
          <div className="container-sm admin-container my-3">
            <form className="container-sm gap-3 shadow-lg bg-white rounded px-5 py-5">
              <div className="mb-3">
                <label htmlFor="admin_username" className="form-label">
                  Admin Username
                </label>
                <div className="input-group">
                  <span className="input-group-text" id="basic-addon3">
                    @
                  </span>
                  <input
                    type="text"
                    className="form-control"
                    id="admin_username"
                    name="admin_username"
                    required
                    onChange={(e) => setUsername(e.target.value)}
                    aria-describedby="basic-addon3 basic-addon4"
                  />
                </div>
                <div className="form-text" id="basic-addon4">
                  <p className={`text-danger ${warningUsernameState}`}>
                    {warningUsername}
                  </p>
                </div>
              </div>
              <div className="mb-3">
                <label htmlFor="admin_password" className="form-label">
                  Admin Password
                </label>
                <div className="input-group">
                  <span className="input-group-text" id="basic-addon3">
                    #
                  </span>
                  <input
                    type="text"
                    className="form-control"
                    id="admin_password"
                    name="admin_password"
                    required
                    onChange={(e) => setPassword(e.target.value)}
                    aria-describedby="basic-addon3 basic-addon4"
                  />
                </div>
                <div className="form-text" id="basic-addon4">
                  <p className={`text-danger ${warningPasswordState}`}>
                    {warningPassword}
                  </p>
                </div>
              </div>
              <button
                type="button"
                onClick={onAdminSubmit}
                className="btn btn-success"
              >
                login as admin
              </button>
            </form>
          </div>
        </div>
      ) : (
        <div
          id="admin_panel"
          className="container-fluid d-flex flex-column mt-5 justify-content-center align-items-center"
        >
          <h2 className="text-white mb-5">Admin Panel</h2>
          <div className="container-sm admin-container my-5">
            <form className="container-sm gap-3 shadow-lg bg-white rounded px-5 py-5">
              <div className="mb-3">
                <label htmlFor="image" className="form-label">
                  Candidate Image
                </label>
                <div className="input-group">
                  <span className="input-group-text" id="basic-addon3">
                    @
                  </span>
                  <input
                    type="file"
                    accept="image/*"
                    className="form-control"
                    id="image"
                    name="image"
                    required
                    // onChange={(e) => setImage(e.target.files[0])}
                    onChange={(e) => convertToBase64(e)}
                    aria-describedby="basic-addon3 basic-addon4"
                  />
                </div>
                {image == "" || image == null ? (
                  ""
                ) : (
                  <img
                    className="mx-3 my-3"
                    width={100}
                    height={100}
                    src={image}
                  />
                )}
              </div>

              <div className="mb-3">
                <label htmlFor="name" className="form-label">
                  Candidate Name
                </label>
                <div className="input-group">
                  <span className="input-group-text" id="basic-addon3">
                    Mr / Mrs / Ms
                  </span>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    name="name"
                    required
                    onChange={(e) => setName(e.target.value)}
                    aria-describedby="basic-addon3 basic-addon4"
                  />
                </div>
              </div>

              <div className="mb-3">
                <label htmlFor="phone" className="form-label">
                  Candidate Phone
                </label>
                <div className="input-group">
                  <span className="input-group-text" id="basic-addon3">
                    +94
                  </span>
                  <input
                    type="text"
                    className="form-control"
                    id="phone"
                    name="phone"
                    required
                    onChange={(e) => setPhone(e.target.value)}
                    aria-describedby="basic-addon3 basic-addon4"
                  />
                </div>
              </div>

              <div className="mb-3">
                <label htmlFor="area" className="form-label">
                  Candidate Area
                </label>
                <div className="input-group">
                  <span className="input-group-text" id="basic-addon3">
                    Area
                  </span>
                  <select
                    className="form-select"
                    aria-label="Default select example"
                    onChange={(e) => setArea(e.target.value)}
                  >
                    <option defaultValue value={-1}>
                      -- select an area --
                    </option>
                    {areas.map((area, index) => {
                      return (
                        <option key={index} value={area.id}>
                          {area.name}
                        </option>
                      );
                    })}
                  </select>
                </div>
              </div>

              <div className="mb-3">
                <label htmlFor="vote_no" className="form-label">
                  Candidate Vote No.
                </label>
                <div className="input-group">
                  <span className="input-group-text" id="basic-addon3">
                    No.
                  </span>
                  <input
                    type="text"
                    className="form-control"
                    id="vote_no"
                    name="vote_no"
                    required
                    onChange={(e) => setVoteNumber(e.target.value)}
                    aria-describedby="basic-addon3 basic-addon4"
                  />
                </div>
              </div>

              <div className="mb-3">
                <label htmlFor="party" className="form-label">
                  Candidate Party
                </label>
                <div className="input-group">
                  <span className="input-group-text" id="basic-addon3">
                    Party
                  </span>
                  <select
                    className="form-select"
                    aria-label="Default select example"
                  >
                    <option
                      defaultValue
                      value={-1}
                      onChange={(e) => setParty(e.target.value)}
                    >
                      -- select a party --
                    </option>
                    {parties.map((party, index) => {
                      return (
                        <option key={index} value={party.id}>
                          {party.name}
                        </option>
                      );
                    })}
                  </select>
                </div>
              </div>

              <button
                type="button"
                onClick={onSubmit}
                className="btn btn-success"
              >
                Submit data
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
export default AdminPanel;
