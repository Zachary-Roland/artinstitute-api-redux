import React, { useState } from "react";
import { connect } from "react-redux";
import { setUser } from "../redux/actions";
import { useHistory } from "react-router";
import { makeStyles } from "@material-ui/styles";
import { Paper, TextField, InputAdornment } from "@material-ui/core";
import AccountCircle from "@material-ui/icons/AccountCircle";
import LockIcon from "@material-ui/icons/Lock";
const useStyles = makeStyles((theme) => ({
  margin: {
    margin: 50,
  },
}));

const Login = ({ setUser, username }) => {
  const classes = useStyles();
  const [userInput, setUserInput] = useState("");
  const [password, setPassword] = useState("");
  const [minCharErr, setMinCharErr] = useState(false);
  const history = useHistory();
  return (
    <Paper>
      <br></br>
      <form position="relative">
        <TextField
          className={classes.margin}
          id="usernameInput"
          label="Username:"
          variant="outlined"
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <AccountCircle />
              </InputAdornment>
            ),
          }}
        />
        <TextField
          className={classes.margin}
          id="passwordInput"
          label="Password:"
          variant="outlined"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <LockIcon />
              </InputAdornment>
            ),
          }}
        />
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
