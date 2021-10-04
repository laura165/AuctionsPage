import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import ReactModal from "react-modal";
import {
  Design,
  FormHeaderSignUp,
  CloseIconSignUp,
  Text,
  ConfirmPassword,
} from "./SignUpElements";

const SignUpMain = ({ showModal, handleCloseModal }) => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [comfirmPassword, setComfirmPassword] = React.useState("");
  const [errorMessage, setErrorMessage] = React.useState("");

  return (
    <ReactModal
      className="bgAnimationSignUp"
      isOpen={showModal}
      contentLabel="onRequestClose Example"
      onRequestClose={handleCloseModal}
      style={{
        overlay: {
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: "rgba(9, 8, 37, 0.8)",
        },

        content: {
          padding: "0px",
          zIndex: "1",
          position: "absolute",
          top: "90px",
          left: "50%",
          top: "50%",
          transform: "translate(-50%, -50%)",
          bottom: "20px",
          width: "700px",
          height: "600px",
          border: "1px solid #070722",
          boxShadow:
            " rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;",
          overflow: "hidden",
          WebkitOverflowScrolling: "touch",
          outline: "none",
          transition: "all 0.2s ease-in-out",
        },
      }}
    >
      <div>
        <CloseIconSignUp onClick={(e) => handleCloseModal(e)} />
        <FormHeaderSignUp>Sign Up</FormHeaderSignUp>

        <form className="field" id="fieldYes">
          <Design>
            <input
              pattern="/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/"
              className="signINField"
              type="username"
              name="username"
              placeholder="Username"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              required
            />
            <input
              className="signINField"
              type="password"
              name="password"
              placeholder="Password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
            <input
              className="signINField"
              type="password"
              name="confirm password"
              placeholder="Confirm Password"
              value={comfirmPassword}
              onChange={(e) => {
                setComfirmPassword(e.target.value);
              }}
            />
            <div id="message">{errorMessage}</div>
            <div id="usernameError"> </div>

            <button
              className="signUpBtn"
              type="submit"
              onClick={(e) => {
                e.preventDefault();

                if (email === "" || password === "" || comfirmPassword === "") {
                  setErrorMessage("*Please fill all fields");
                  return;
                }

                if (password.length < 8) {
                  setErrorMessage("*Password too short");
                  return;
                }

                if (password !== comfirmPassword) {
                  setErrorMessage("*Password do not match");
                  return;
                }

                if (email !== "" && password !== "") {
                  alert("You have logged in successfully");
                  localStorage.setItem("isLoggedIn", true);
                }

                localStorage.setItem("userName", email);
                localStorage.setItem("SignUpPassword", password);

                setEmail("");
                setPassword("");
                setComfirmPassword("");
                setErrorMessage("");
                handleCloseModal(e);
              }}
            >
              Sign Up
            </button>
          </Design>
        </form>
      </div>
    </ReactModal>
  );
};

export default SignUpMain;
