import React from "react";
import { connect } from "react-redux";

const Result = () => {
  return (
    <>
      <div>Result</div>
    </>
  );
};
function mapStateToProps(state) {
  return {};
}
const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Result);
