import React, { useState, useEffect, useMemo } from "react";
import { connect } from "react-redux";
import { setSearch, setLiked, deleteLiked } from "../redux/actions";
import useFetch from "../hooks/useFetch";
import Result from "./result";

const Search = ({ setSearch, username, search }) => {
  const [searchInput, setSearchInput] = useState("");
  const [query, setQuery] = useState("");
  const { data, loading, error } = useFetch(query);
  const fieldsParam =
    "&fields=thumbnail,id,title,image_id,artist_title,is_on_view";
  useEffect(() => {
    if (data) {
      setSearch(data.data);
    }
  }, [data]);

  return (
    <>
      <h3>
        Hello, {username}! Search the Art Institue of Chicago's Collection!{" "}
      </h3>
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
            e.preventDefault();
            setQuery(searchInput + fieldsParam);
          }}
        >
          Search!
        </button>
      </form>
      {loading && <div>Loading Results!</div>}
      {error && <div>{error}</div>}
      {search && (
        <div>
          {console.log(search)}
          {search.map((val) => (
            <Result
              key={val.id}
              id={val.id}
              data={val}
              setLiked={setLiked}
              deleteLiked={deleteLiked}
            />
          ))}
        </div>
      )}
    </>
  );
};
function mapStateToProps(state) {
  return {
    username: state.user.username,
    search: state.search,
  };
}
const mapDispatchToProps = {
  setSearch,
};

export default connect(mapStateToProps, mapDispatchToProps)(Search);
