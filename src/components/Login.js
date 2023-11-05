import React, { useEffect, useState } from "react";
import OtpInput from "otp-input-react";
import "../css/Login.css";
import Vote from "./Vote";
import { auth } from "./Firebase";
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import { Toast } from "bootstrap";
import toast, { Toaster } from "react-hot-toast";
import axios from "axios";
import { loadState, setState } from "../storage/sessions.js";

function Login() {
  //don't forget to set user to 'null' or '1' before using it for final design
  const [otp, setOtp] = useState("");
  const [loading, setLoading] = useState(false);
  const [phone, setPhone] = useState("");
  const [idNumber, setIdNumber] = useState("");
  const [otpHide, setOtpHide] = useState("d-none");
  const [loginHide, setLoginHide] = useState("d-flex");
  const [user, setUser] = useState(null);
  const [otpSent, setOtpSent] = useState(false);
  const [warningId, setWarningId] = useState("");
  const [warningPhone, setWarningPhone] = useState("");
  const [warningIdState, setWarningIdState] = useState("d-none");
  const [warningPhoneState, setWarningPhoneState] = useState("d-none");
  const [voters, setVoters] = useState([]);
  const [voter, setVoter] = useState("");

  useEffect(() => {
    loadVoters();
  }, []);

  const sendOtp = () => {
    const appVerifier = window.recaptchaVerifier;
    // const formatPh = "+94" + phone.target.value;
    const formatPh = "+94" + phone;
    console.log("+94" + phone);

    signInWithPhoneNumber(auth, formatPh, appVerifier)
      .then((confirmationResult) => {
        // SMS sent. Prompt user to type the code from the message, then sign the
        // user in with confirmationResult.confirm(code).
        window.confirmationResult = confirmationResult;
        setLoginHide("d-none");
        setOtpHide("d-flex");
        toast.success("OTP sent successfully !");
        // ...
      })
      .catch((error) => {
        toast.error("OTP sent failed !");
        console.log(error);
        // Error; SMS not sent
        // ...
      });
  };

  const onCaptchaVerify = () => {
    if (!window.recaptchaVerifier) {
      window.recaptchaVerifier = new RecaptchaVerifier(
        auth,
        "recaptcha-container",
        {
          size: "invisible",
          callback: (response) => {
            onSignup();
            // reCAPTCHA solved, allow signInWithPhoneNumber.
            // ...
          },
          "expired-callback": () => {
            // Response expired. Ask user to solve reCAPTCHA again.
            // ...
          },
        }
      );
    }
  };

  const loadVoters = async () => {
    const results = await axios.get("http://localhost:8080/user/*");
    setVoters(results.data);
  };

  const onSignup = () => {
    if (phone === "" && idNumber === "") {
      setWarningPhoneState("d-flex");
      setWarningPhone("Phone number is empty");
      setWarningIdState("d-flex");
      setWarningId("Id number is empty");
    } else if (phone === "") {
      setWarningPhoneState("d-flex");
      setWarningIdState("d-none");
      setWarningPhone("Phone number is empty");
    } else if (idNumber === "") {
      setWarningIdState("d-flex");
      setWarningPhoneState("d-none");
      setWarningId("Id number is empty");
    } else {
      setWarningPhoneState("d-none");
      setWarningIdState("d-none");
      //empty check validation is done from here
      // if(!/\S+@\S+\.\S+/.test(email)){} you can check for email type string using this regular expression
      for (var item in voters) {
        if (
          voters[item].idNumber === idNumber &&
          voters[item].phone === phone
        ) {
          setVoter({
            id: voters[item].id,
            name: voters[item].name,
            idNumber: voters[item].idNumber,
            phone: voters[item].phone,
            area: voters[item].area,
          });
          break;
        }
      }

      if (voter.name === undefined) {
        toast.error("Sorry, we couldn't find your account !");
      } else {
        toast.success("You have logged in successfully !");
        onCaptchaVerify();
        sendOtp();
        // setUser(1);
      }
    }
  };

  const onOtpVerify = () => {
    setLoading(true);
    window.confirmationResult
      .confirm(otp)
      .then(async (res) => {
        console.log(res);
        // setUser(res.user);
        setLoading(false);
        toast.success("OTP verified successfully !");
        setOtpHide("d-none");
        setUser(1);
      })
      .catch((error) => {
        // User couldn't sign in (bad verification code?)
        console.log(error);
        toast.error("OTP verification failed !");
        setLoading(false);
      });
  };

  // const handleVote = () => {
  //   setOtpHide("d-none");
  //   setUser(1);
  // };

  return (
    <>
      <Toaster duration={4000} />
      <div id="recaptcha-container"></div>
      {user ? (
        <Vote name={voter.name} />
      ) : (
        <div className="container-fluid d-flex flex-column mt-5 justify-content-center align-items-center">
          <h2 className={`text-white mb-5 ${loginHide}`}>Registration form</h2>

          <div className={`container-sm login-container my-3 ${loginHide}`}>
            <form className="container-sm gap-3 shadow-lg bg-white rounded px-5 py-5">
              <div className="mb-3">
                <label htmlFor="userid" className="form-label">
                  Your identity card number
                </label>
                <div className="input-group">
                  <span className="input-group-text" id="basic-addon3">
                    @
                  </span>
                  <input
                    type="text"
                    className="form-control"
                    id="userid"
                    name="userid"
                    required
                    onChange={(e) => setIdNumber(e.target.value)}
                    aria-describedby="basic-addon3 basic-addon4"
                  />
                </div>
                <div className="form-text" id="basic-addon4">
                  <p className={`text-danger ${warningIdState}`}>{warningId}</p>
                </div>
              </div>

              <div className="mb-3">
                <label htmlFor="usernumber" className="form-label">
                  Your phone number
                  <span className="text-secondary text-example ms-3">
                    ( Ex : +94771234567 )
                  </span>
                </label>
                <div className="input-group">
                  <span className="input-group-text" id="basic-addon3">
                    +94
                  </span>
                  <input
                    type="text"
                    className="form-control"
                    id="usernumber"
                    name="usernumber"
                    required
                    onChange={(e) => setPhone(e.target.value)}
                    // value={phone.value}
                    aria-describedby="basic-addon3 basic-addon4"
                  />
                </div>
                <div className="form-text" id="basic-addon4 ">
                  <p className={`text-danger ${warningPhoneState}`}>
                    {warningPhone}
                  </p>
                </div>
              </div>
              <button
                type="button"
                onClick={onSignup}
                className="btn btn-success"
              >
                Send code via SMS
              </button>
            </form>
            <div className="container-sm justify-content-center align-items-center my-5">
              <p className="text-light text-center">
                * You can simply enter your identity card number and the phone
                <br />
                number (exact phone number you put in the form) in certain
                areas.
                <br />
                after that click on the "Request OTP" button and enter the OTP
                code
                <br />
                you recieved from your phone to verify your identity.
              </p>
            </div>
          </div>

          <div
            className={`container-sm shadow-lg otp-container d-flex flex-column bg-white my-3 rounded px-5 py-5 ${otpHide}`}
          >
            <label htmlFor="otp-input text-dark">Enter OTP code</label>
            <OtpInput
              id="otp-input"
              name="otp-input"
              value={otp}
              onChange={setOtp}
              OTPLength={6}
              otpType="number"
              disabled={false}
              autoFocus
              className="my-4"
            ></OtpInput>
            <button
              type="button"
              className="btn btn-success px-4"
              onClick={onOtpVerify}
            >
              {loading && (
                <div
                  className="spinner-border spinner-conatiner me-2"
                  role="status"
                ></div>
              )}
              <span>Verify OTP</span>
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default Login;
