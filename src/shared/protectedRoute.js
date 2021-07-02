import React from "react";
import { connect } from "react-redux";
import { Route, Redirect } from "react-router-dom";

function ProtectedRoute({ username, path, reqUser, component }) {
  if ((username && reqUser) || (!username && !reqUser)) {
    return <Route path={path} component={component} />;
  } else {
    return <Redirect to={reqUser ? "/login" : "/search"} />;
  }
}

function mapStateToProps(state) {
  return {
    username: state.username,
  };
}

export default connect(mapStateToProps, {})(ProtectedRoute);
