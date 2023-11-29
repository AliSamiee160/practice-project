import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Typography, Button } from "@material-ui/core";
import Title from "../components/title";
import { getTranslate } from "../localization/index";
import Skill from "../components/skill";
import WorkOutlineIcon from '@material-ui/icons/WorkOutline';
import MyStepper from "../components/MyStepper";
import LocalLibraryIcon from '@material-ui/icons/LocalLibrary';


const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: "100vh",
  },
  skillGrid: {
    paddingTop: 60,
    paddingBottom: 60,
    paddingRight: 30,
    paddingLeft: 30,
    [theme.breakpoints.down('xs')]:{
      paddingRight: 5,
      paddingLeft: 5,
    }
  },
  skiillSecondTitle:{
    marginLeft:15,
  },


}));
export default function ResumeScreen({title}) {
  const classes = useStyles();
  const translate = getTranslate();
  return (
    <Grid
      justify="flex-start"
      alignItems="flex-start"
      container
      className={classes.root}
    >
      <Grid className={classes.skillGrid} item container xs={12}>
        <Title title={translate.myskill} />
        <Grid container direction="row" >
          <Grid item xs={12} md={6} >
            <Skill value={80} title={translate.html} />
            <Skill value={90} title={translate.css} />
            <Skill value={85} title={translate.java} />
          </Grid>
          <Grid item xs={12} md={6} >
            <Skill value={95} title={translate.react} />
            <Skill value={75} title={translate.python} />
            <Skill value={90} title={translate.boot} />
          </Grid>
        </Grid>
        <Grid className={classes.skillGrid} item container xs={12}>
          <Title  title={translate.resume}/>
          <Grid container direction="row" justifyContent="flex-start">
              <WorkOutlineIcon style={{fontSize:40,color:"#fff"}} />
              <Typography className={classes.skiillSecondTitle} variant="h4" >
                {translate.workingExperience}
              </Typography>
          </Grid>
          <Grid container style={{marginTop:15,marginBottom:15}}>
              <MyStepper steps={translate.workingSteps}/> 
          </Grid>
          <Grid container direction="row" justifyContent="flex-start">
              <LocalLibraryIcon style={{fontSize:40,color:"#fff"}} />
              <Typography className={classes.skiillSecondTitle} variant="h4" >
                  {translate.Educational}
              </Typography>
          </Grid>
          <Grid container >
              <MyStepper steps={translate.educationalSteps}/> 
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
