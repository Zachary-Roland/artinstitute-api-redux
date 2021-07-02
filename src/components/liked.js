import React from "react";
import { connect } from "react-redux";

const Liked = () => {
  return (
    <>
      <div>Liked</div>
    </>
  );
};
function mapStateToProps(state) {
  return {};
}
const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Liked);
