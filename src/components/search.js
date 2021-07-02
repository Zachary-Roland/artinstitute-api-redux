import React from "react";
import { connect } from "react-redux";

const Search = () => {
  return (
    <>
      <div>Search</div>
    </>
  );
};
function mapStateToProps(state) {
  return {};
}
const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Search);
