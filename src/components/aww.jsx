import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardMedia from "@material-ui/core/CardMedia";
import Paper from "@material-ui/core/Paper";
import "./try.css";

const styles = theme => ({
  root: {
    flexGrow: 1,
    padding: 50
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: "center",
    color: theme.palette.text.secondary
  },
  media: {
    height: 200,
    width: "100%"
  }
});

function Cards(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <Card className={classes.card}>
          <CardActionArea>
            <CardMedia
              className="try"
              className={classes.media}
              image={props.image}
              title="Contemplative Reptile"
            />
          </CardActionArea>
        </Card>
        <h1>{props.name}</h1>
        <h3>{props.address}</h3>
      </Paper>
    </div>
  );
}
Cards.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Cards);
