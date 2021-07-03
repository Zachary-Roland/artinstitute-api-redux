import React, { useState } from "react";
import { connect } from "react-redux";

const Search = ({ setSearch }) => {
  const [searchInput, setSearchInput] = useState("");

  return (
    <>
      <form>
        <div>
          <label htmlFor="searchInput">Search: </label>
          <input
            id="searchInput"
            placeholder="Search Artwork!"
            value={searchInput}
            onChange={(e) => {
              setSearchInput(e.target.value);
            }}
          ></input>
        </div>
        <button
          id="searchButton"
          onClick={(e) => {
            e.preventDefault;
            setSearch(searchInput);
          }}
        >
          Search!
        </button>
      </form>
    </>
  );
};
function mapStateToProps(state) {
  return {};
}
const mapDispatchToProps = {
  setSearch,
};

export default connect(mapStateToProps, mapDispatchToProps)(Search);
