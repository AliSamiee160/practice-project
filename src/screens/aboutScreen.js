import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Typography, Button } from "@material-ui/core";
import Title from "../components/title";
import { getTranslate } from "../localization/index";
import MainImage from "../assets/images/aviary-image-1518372817315.jpeg";
import Service from "../components/service";
import PhoneAndroidIcon from "@material-ui/icons/PhoneAndroid";
import CodeIcon from "@material-ui/icons/Code";
import WebIcon from "@material-ui/icons/Web";

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: "100vh",
  },
  aboutGrid: {
    paddingTop: 60,
    paddingBottom: 60,
    paddingRight: 30,
    paddingLeft: 30,
  },
  mainImage: {
    width: "100%",
    height: "100%",
  },
  nameText: {
    color: theme.palette.primary.main,
    [theme.breakpoints.down("xs")]: {
      display: "block",
    },
  },
  aboutTextGrid: {
    paddingRight: 20,
    paddingLeft: 20,
    [theme.breakpoints.down("xs")]: {
      padding: 0,
      marginTop: 15,
      marginBottom: 15,
    },
  },
  ImageGrid: {
    position: "relative",
    width: "500px",
    height: "500px",
    "&::after": {
      content: "''",
      position: "absolute",
      right: 0,
      bottom: 0,
      height: "65%",
      width: 25,
      background: "rgba(3,127,255,0.6)",
    },
    "&::before": {
      content: "''",
      position: "absolute",
      left: 0,
      top: 0,
      height: "65%",
      width: 25,
      background: "rgba(3,127,255,0.6)",
    },
  },
  iconStyle: {
    fontSize: 46,
    color: theme.palette.primary.main,
    display: "flex",
    justifyContent: "flex-start",
  },
}));
export default function AboutScreen() {
  const classes = useStyles();
  const translate = getTranslate();
  return (
    <Grid
      justify="flex-start"
      alignItems="flex-start"
      container
      className={classes.root}
    >
      <Grid className={classes.aboutGrid} item container xs={12}>
        <Title title={translate.aboutme} />
        <Grid container direction="row" className={classes.mainAbout}>
          <Grid item xs={12} md={6} className={classes.ImageGrid}>
            <img
              className={classes.mainImage}
              src={MainImage}
              alt={translate.name}
            />
          </Grid>
          <Grid item xs={12} md={6} className={classes.aboutTextGrid}>
            <Typography variant="h3">
              {translate.hi}{" "}
              <span className={classes.nameText}>{translate.name}</span>
              {translate.hi2}
            </Typography>
            <Typography variant="body1" style={{ marginTop: 10 }}>
              {translate.desc}
            </Typography>
            <Typography variant="body1" style={{ marginTop: 15 }}>
              <b style={{ minWidth: 100, display: "inline-block" }}>
                {translate.fullname}
              </b>
              {" : "}
              {translate.name}
            </Typography>
            <Typography variant="body1" style={{ marginTop: 5 }}>
              <b style={{ minWidth: 100, display: "inline-block" }}>
                {translate.age}
              </b>
              {" : "}
              28 {translate.years}
            </Typography>
            <Typography variant="body1" style={{ marginTop: 5 }}>
              <b style={{ minWidth: 100, display: "inline-block" }}>
                {translate.nationality}
              </b>
              {" : "}
              {translate.iranian}
            </Typography>
            <Typography variant="body1" style={{ marginTop: 5 }}>
              <b style={{ minWidth: 100, display: "inline-block" }}>
                {translate.Languages}
              </b>
              {" : "}
              {translate.persian},{translate.english}
            </Typography>
            <Typography variant="body1" style={{ marginTop: 5 }}>
              <b style={{ minWidth: 100, display: "inline-block" }}>
                {translate.phone}
              </b>
              {" : "}
              +989114406673
            </Typography>
            <div style={{ marginTop: 10, display: "flex" }}>
              <Button variant="contained" color="primary">
                {translate.download}
              </Button>
            </div>
          </Grid>
        </Grid>
        <Grid className={classes.aboutGrid} item container xs={12}>
          <Title title={translate.services} />
          <Grid container direction="row">
            <Service
              icon={<PhoneAndroidIcon className={classes.iconStyle} />}
              desc={translate.servicedesc}
              title={translate.mobileapp}
            />
            <Service
              icon={<CodeIcon className={classes.iconStyle} />}
              desc={translate.servicedesc}
              title={translate.webdep}
            />

            <Service
              icon={<WebIcon className={classes.iconStyle} />}
              desc={translate.servicedesc}
              title={translate.webdesign}
            />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
