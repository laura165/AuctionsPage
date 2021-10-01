import userEvent from "@testing-library/user-event";
import React, { useState } from "react";
import { GiEntryDoor } from "react-icons/gi";
import ReactModal from "react-modal";
import { Design, FormHeader, CloseIconSignIn, Text } from "./SignInElements";

const SignInDesign = ({ showModal, handleCloseModal }) => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [remeberMe, setRemeberMe] = React.useState(false);
  const [logedIn, setLogedIn] = React.useState(false);
  const [user, setUser] = useState();

  const signIn = (e) => {
    e.preventDefault();
    // if (email.value == setEmail.value && password.value == setPassword.value) {
    //   alert("You have successfully logged in.");
    // }
    // else {
    //   alert("You haven't logged in")
    // }
  };

  

  return (
    <ReactModal
      className="bgAnimation"
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
        <CloseIconSignIn onClick={(e) => handleCloseModal(e)} />
        <FormHeader>Sign In</FormHeader>
        <form className="field" onSubmit={signIn}>
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
              className="remeberMe"
              name="rememberMe"
              // checked={this.state.rememberMe}
              // onChange={this.handleChange}
              type="checkbox"
              value={remeberMe}
              onChange={(e) => {
                setRemeberMe(e.target.checked);
              }}
            />
            <Text>Remember me</Text>
            <button
              className="signInBtn"
              type="submit"
              onClick={(e) => {
                if (
                  email === localStorage.getItem("userName") &&
                  password === localStorage.getItem("SignUpPassword")
                ) {
                  // showLinks(false)
                }
                if (
                  remeberMe &&
                  email === localStorage.getItem("userName") &&
                  password === localStorage.getItem("SignUpPassword")
                ) {
                  localStorage.setItem("Token", `${email}${password}`);
                }

                
              }}
            >
              Sign In
            </button>
          </Design>
        </form>
      </div>
      
    </ReactModal>

  );
};

export default SignInDesign;
