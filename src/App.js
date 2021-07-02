import "./App.css";
import React from "react";
import { connect } from "react-redux";
import { clearLiked, clearSearch, clearUser } from "./redux/actions";
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

function App() {
  return <div></div>;
}

export default App;
