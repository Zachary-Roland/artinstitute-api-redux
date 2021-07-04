import React from "react";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
  CardMedia,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import { classExpression } from "@babel/types";
// import { addLiked } from "../redux/actions";

const useStyles = makeStyles({
  card: {
    maxWidth: 500,
    margin: 50,
  },
  media: {
    width: 500,
  },
});

const Result = (result, addLiked, deleteLiked, isLiked, liked) => {
  const artist = result.artist;
  const id = result.id;
  const title = result.title;
  const view = result.view;
  const altText = result.altText;
  const img = result.img;
  const date = result.date;
  const classes = useStyles();
  console.log(altText);
  return (
    <Card className={classes.card}>
      {/* <h3>
        {title} by {artist} ({date})
      </h3> */}
      <CardMedia
        className={classes.media}
        component="img"
        src={`https://www.artic.edu/iiif/2/${img}/full/843,/0/default.jpg`}
        title={title}
        alt={altText}
      />
      <CardContent>
        <Typography variant="h6" component="h2">
          {title} by {artist} ({date})
        </Typography>
        {view && (
          <Typography variant="body2" color="textSecondary" component="p">
            Currently on Display at AIC
          </Typography>
        )}
        {!view && (
          <Typography variant="body2" color="textSecondary" component="p">
            Not on Display at AIC
          </Typography>
        )}
      </CardContent>
      <CardActions>
        {isLiked && (
          <Button onClick={() => deleteLiked(id)}>
            Remove from Your Gallery
          </Button>
        )}
        {!isLiked && (
          <Button
            size="small"
            variant="contained"
            color="primary"
            onClick={() => {
              console.log("button working");
              addLiked({ artist, id, title, view, altText, img, date });
            }}
          >
            Add to Your Gallery
          </Button>
        )}
      </CardActions>
      {/* <img
        src={`https://www.artic.edu/iiif/2/${img}/full/843,/0/default.jpg`}
        alt={altText}
        title={title}
      ></img> */}
      {/* {isLiked && (
        <button onClick={() => deleteLiked(id)}>
          Remove from Your Gallery
        </button>
      )}
      {!isLiked && (
        <button
          onClick={() => {
            console.log("button working");
            addLiked({ artist, id, title, view, altText, img, date });
          }}
        >
          Add to Your Gallery
        </button>
      )} */}
    </Card>
  );
};

export default Result;
