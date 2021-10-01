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
              className="signINField"
              type="username"
              name="username"
              placeholder="Username"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
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
            <div id="message"> </div>

            <button
              className="signInBtn"
              type="submit"
              onClick={(e) => {
                if (
                  email !== "" &&
                  password !== "" &&
                  comfirmPassword !== "" &&
                  password === comfirmPassword
                ) {
                  localStorage.setItem("userName", email);
                  localStorage.setItem("SignUpPassword", password);

                  setEmail("");
                  setPassword("");
                  setComfirmPassword("");
                  handleCloseModal();
                }
                e.preventDefault();
                let message = document.getElementById("message");
                let passwordVar = localStorage.getItem("SignUpPassword");
                let paswd =
                  /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,15}$/;
                if (password.length != 0 && password != comfirmPassword) {
                  return (message.textContent = "*Password do not match");
                }
                if (password.match(paswd) && password === comfirmPassword) {
                  return "";
                } else {
                  return (message.textContent = "*Password too short");
                }
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
