import "./App.css";
import React from "react";
import { connect } from "react-redux";
import { clearLiked, clearSearch, clearUser } from "./redux/actions";
import ProtectedRoute from "./shared/protectedRoute";
import {
  BrowserRouter as Router,
  NavLink,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";

import Liked from "./components";
import Login from "./components";
import Search from "./components";

function App({ username, clearLiked, clearSearch, clearUser }) {
  return (
    <Router>
      <nav>
        {/* If logged in, show search page. If not logged in, show log in page. */}
        {!username && (
          <NavLink activeClassName="active" to="/login">
            Login
          </NavLink>
        )}
        {username && (
          <>
            <NavLink activeClassName="active" to="/search">
              Search
            </NavLink>
            <NavLink activeClassName="active" to="/liked">
              Liked
            </NavLink>
            <NavLink
              activeClassName="active"
              to="/login"
              onClick={() => {
                clearLiked();
                clearSearch();
                clearUser();
              }}
            >
              Logout
            </NavLink>
          </>
        )}
      </nav>
      <main>
        <Switch>
          <ProtectedRoute path="/login" reqUser={false} component={Login} />
          <ProtectedRoute path="/search" reqUser={true} component={Search} />
          <ProtectedRoute path="/liked" reqUser={true} component={Liked} />
          <Route path="*">
            <Redirect to="/login" />
          </Route>
        </Switch>
      </main>
    </Router>
  );
}

function mapStateToProps(state) {
  return {
    username: state.username,
  };
}

const mapDispatchToProps = {
  clearLiked,
  clearUser,
  clearSearch,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
