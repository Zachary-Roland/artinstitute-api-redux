import React from "react";
import {
  Button,
  Card,
  CardContent,
  Typography,
  CardMedia,
} from "@material-ui/core";

const Result = (result, setLiked, deleteLiked, isLiked, liked) => {
  const artist = result.artist;
  const id = result.id;
  const title = result.title;
  const view = result.view;
  const altText = result.altText;
  const img = result.img;
  const date = result.date;
  console.log(altText);
  return (
    <div>
      <h3>
        {title} by {artist} ({date})
      </h3>
      <img
        src={`https://www.artic.edu/iiif/2/${img}/full/843,/0/default.jpg`}
        alt={altText}
        title={title}
      ></img>
      {view && <h6>(Currently on Display at AIC)</h6>}
      {!view && <h6>(Not currently on Display at AIC)</h6>}
      {isLiked && (
        <button onChange={() => deleteLiked(id)}>
          Remove from Your Gallery
        </button>
      )}
      {!isLiked && (
        <button
          onChange={() =>
            setLiked({ artist, id, title, view, altText, img, date })
          }
        >
          Add to Your Gallery
        </button>
      )}
    </div>
  );
};

export default Result;
