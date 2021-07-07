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
// import { classExpression } fsrom "@babel/types";
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

const Result = ({
  artist,
  title,
  img,
  altText,
  view,
  date,
  id,
  addLiked,
  liked,
  deleteLiked,
  isLiked,
}) => {
  // const { artist, title, img, altText, view, date, id } = liked;
  const classes = useStyles();
  console.log(altText);
  console.log(isLiked);
  return (
    <Card className={classes.card}>
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
          <Button
            size="small"
            variant="contained"
            color="primary"
            onClick={() => deleteLiked(id)}
          >
            Remove from Your Gallery
          </Button>
        )}
        {!isLiked && (
          <Button
            size="small"
            variant="contained"
            color="primary"
            onClick={() => {
              console.log(liked);
              addLiked({ artist, id, title, view, altText, img, date });
            }}
          >
            Add to Your Gallery
          </Button>
        )}
      </CardActions>
    </Card>
  );
};

export default Result;
