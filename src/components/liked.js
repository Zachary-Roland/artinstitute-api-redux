import React from "react";
import { connect } from "react-redux";
import { deleteLiked } from "../redux/actions";
import Result from "./result";

const Liked = ({ liked, search, deleteLiked, username }) => {
  return (
    <>
      {search && (
        <div>
          {/* {console.log(search)} */}
          {liked.map((val) => (
            <Result
              key={val.id}
              id={val.id}
              result={val}
              liked={liked}
              date={val.date_display}
              view={val.is_on_view}
              altText={val.alt_text}
              img={val.img}
              title={val.title}
              artist={val.artist_title}
              isLiked={true}
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
    liked: state.liked,
    username: state.user.username,
    search: state.search,
  };
}
const mapDispatchToProps = {
  deleteLiked,
};

export default connect(mapStateToProps, mapDispatchToProps)(Liked);
