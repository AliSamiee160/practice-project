import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Typography, TextField, Button } from "@material-ui/core";
import Title from "../components/title";
import { getTranslate } from "../localization/index";
import Contact from "../components/contact";
import CallIcon from "@material-ui/icons/CallOutlined";
import EmailIcon from "@material-ui/icons/EmailOutlined";
import RoomIcon from "@material-ui/icons/RoomOutlined";

import './contact.css'

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: "100vh",
  },
  contactGrid: {
    paddingTop: 60,
    paddingBottom: 60,
    paddingRight: 30,
    paddingLeft: 30,
    [theme.breakpoints.down('xs')]:{
      paddingRight: 10,
      paddingLeft: 10,
    }
  },
  FormGrid:{
    padding: 10,

  },
  detailGrid:{
    padding: 10,

  },
  getintouch:{
    textAlign:"left",
  },
  iconStyle:{
    fontSize:30,
    color:"#fff",
    
  },


}));
export default function ContactScreen() {
  const classes = useStyles();
  const translate = getTranslate();
  return (
    <Grid
      justify="flex-start"
      alignItems="flex-start"
      container
      className={classes.root}
    >
      <Grid className={classes.contactGrid} item container xs={12}>
        <Title title={translate.contactme} />
        <Grid container direction="row" className={classes.mainAbout}>
          <Grid item xs={12} md={6} className={classes.FormGrid}>
              <Typography className={classes.getintouch} variant="h4">{translate.getintouch}</Typography>
              <TextField required size="medium" style={{marginTop:25}} fullWidth  label={translate.enteryourname}  variant="outlined"/>
              <TextField required size="medium" style={{marginTop:25}} fullWidth  label={translate.enteryouremail}   variant="outlined"/>
              <TextField required size="medium" style={{marginTop:25}} fullWidth  label={translate.enteryoursubject}    variant="outlined"/>
              <TextField required size="medium" style={{marginTop:25}} fullWidth  label={translate.enteryourmessage}    variant="outlined" multiline rows={4}/>
              <Button variant="contained" size="large" color="primary" style={{marginTop:20,display:"flex"}}>{translate.sendmessage} </Button>
          </Grid>
          <Grid item xs={12} md={6} className={classes.detailGrid}>
              <Contact icon={<CallIcon className={classes.iconStyle} />} title={translate.phone} text1="09114406673" text2="09391217844" />
              <Contact icon={<EmailIcon className={classes.iconStyle} />} title={translate.email} text1="alisamiee160@gmail.com" text2="alisamiee7070@gamil.com" />
              <Contact icon={<RoomIcon className={classes.iconStyle} />} title={translate.address} text1="shahinshahr" text2="" />


          </Grid>
        </Grid>

        </Grid>
      </Grid>
    
  );
}
