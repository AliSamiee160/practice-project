import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Typography } from "@material-ui/core";
import { getTranslate } from "../localization/index";
const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    marginTop: 20,
  },
  main: {
    // height:250,
    backgroundColor: "#191d2b",
    zIndex: 1,
    border: "1px solid #2e344e",
    borderTop: "5px solid #2e344e",
    padding: theme.spacing(8),
    transition: "0.4s",
    "&:hover": {
      borderTopColor: theme.palette.primary.main,
      transition: "0.4s",
    },
  },

  title: {
    textAlign:"left",

  },

  desc:{
    transition:"0.4s",
    "&:hover":{
        color:theme.palette.primary.main,
        transition:"0.4s",
        cursor:"pointer"
    }
  },


  divIcon:{
    border:"1px solid #2e344e",
    marginRight:25,
    padding:10,
    paddingBottom:5

  }
}));
export default function Contact({ title, text1,text2, icon }) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid
        className={classes.main}
        container
        direction="row"
        alignItems="center"
        justifyContent="flex-start"
      >
        <div className={classes.divIcon}>
              {icon}
        </div>
        <div>
          <Typography className={classes.title} variant="h6">
            {title}
          </Typography>
          <Typography className={classes.desc} variant="body1">
            {text1}
          </Typography>
          <Typography className={classes.desc} variant="body1">
            {text2}
          </Typography>
        </div>
      </Grid>
    </div>
  );
}
