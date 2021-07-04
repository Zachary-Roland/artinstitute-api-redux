import React, { useState, useEffect, useMemo } from "react";
import { connect } from "react-redux";
import { setSearch, addLiked, deleteLiked } from "../redux/actions";
import useFetch from "../hooks/useFetch";
import Result from "./result";
import { Paper } from "@material-ui/core";

const Search = ({
  setSearch,
  username,
  search,
  liked,
  addLiked,
  deleteLiked,
}) => {
  const [searchInput, setSearchInput] = useState("");
  const [query, setQuery] = useState("");
  const { data, loading, error } = useFetch(query);
  const fieldsParam =
    "&fields=thumbnail,id,title,image_id,artist_title,is_on_view,date_display";
  const likedIds = useMemo(() => {
    return liked.map((val) => val.id);
  }, [liked]);
  useEffect(() => {
    if (data) {
      setSearch(data.data);
    }
  }, [data]);

  return (
    <Paper>
      <h3>
        Hello, {username}! Search the Art Institue of Chicago's Collection!
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
          {/* {console.log(search)} */}
          {search.map((val) => (
            <Result
              key={val.id}
              id={val.id}
              result={val}
              liked={liked}
              date={val.date_display}
              view={val.is_on_view}
              altText={val.thumbnail.alt_text}
              img={val.image_id}
              title={val.title}
              artist={val.artist_title}
              isLiked={likedIds.includes(val.id)}
              addLiked={addLiked}
              deleteLiked={deleteLiked}
            />
          ))}
        </div>
      )}
    </Paper>
  );
};
function mapStateToProps(state) {
  return {
    username: state.user.username,
    search: state.search,
    liked: state.liked,
  };
}
const mapDispatchToProps = {
  setSearch,
  addLiked,
  deleteLiked,
};

export default connect(mapStateToProps, mapDispatchToProps)(Search);
