import React, { useState } from "react";
import { connect } from "react-redux";
import { setUser } from "../redux/actions";

const Login = ({ setUser }) => {
  return (
    <>
      <div>Login</div>
    </>
  );
};

function mapStateToProps(state) {
  return {};
}
const mapDispatchToProps = {
  setUser,
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
