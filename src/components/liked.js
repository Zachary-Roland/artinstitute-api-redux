import React from "react";
import { connect } from "react-redux";
import { deleteLiked } from "../redux/actions";
import Result from "./result";

const Liked = ({ liked, search, deleteLiked, username }) => {
  return <>{liked.length > 0 && <Result isLiked={true} />}</>;
};
function mapStateToProps(state) {
  return {
    liked: state.liked,
    username: state.user.username,
    search: state.search,
  };
}
const mapDispatchToProps = {
  deleteLiked,
};

export default connect(mapStateToProps, mapDispatchToProps)(Liked);
