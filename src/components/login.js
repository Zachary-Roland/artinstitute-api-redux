import React, { useState } from "react";
import { connect } from "react-redux";
import { setUser } from "../redux/actions";
import { useHistory } from "react-router";
import { Paper } from "@material-ui/core";

const Login = ({ setUser, username }) => {
  const [userInput, setUserInput] = useState("");
  const [password, setPassword] = useState("");
  const [minCharErr, setMinCharErr] = useState(false);
  const history = useHistory();
  return (
    <Paper>
      <br></br>
      <form position="relative">
        <div>
          <label htmlFor="userInput">Username: </label>
          <input
            id="userInput"
            placeholder="Enter your username!"
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
          ></input>
        </div>
        <div>
          <label htmlFor="password">Password: </label>
          <input
            id="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></input>
        </div>
        {minCharErr ? (
          <h5>Your username and password must be at least 4 characters!</h5>
        ) : null}
        <button
          onClick={(e) => {
            e.preventDefault();
            console.log(userInput);
            console.log(password);
            if (password.length > 4 && userInput.length > 4) {
              setMinCharErr(false);
              setUser(userInput);
              setUserInput("");
              setPassword("");
              history.push("/search");
            } else {
              setMinCharErr(true);
            }
          }}
        >
          Login!
        </button>
      </form>
    </Paper>
  );
};

function mapStateToProps(state) {
  return {
    username: state.user.username,
  };
}
const mapDispatchToProps = {
  setUser,
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
