import React from 'react'
import { makeStyles } from "@material-ui/core/styles";
import { Grid,Typography} from "@material-ui/core";
import {getTranslate} from "../localization/index";
const useStyles = makeStyles(theme => ({
    root: {
        paddingLeft:15,
        paddingRight:15,
        marginTop:20,
        direction:"column"
    },
    main:{
        // height:250,
        backgroundColor:"#191d2b",
        zIndex:1,
        border:"1px solid #2e344e",
        borderTop:"5px solid #2e344e",
        padding:theme.spacing(8),
        transition:"0.4s",
        '&:hover':{
            borderTopColor:theme.palette.primary.main,
        transition:"0.4s",

        }

    },

    title:{
        marginTop:15,
        paddingBottom:15,
        position:"relative",
        "&::before":{
            content:"''",
            position:"absolute",
            left:0,
            top:"auto",
            bottom:0,
            height:2,
            width:50,
            background:"#2e344e"
        },
    },
    desc:{
        marginTop:15,
    },
}))
export default function Service({title,desc,icon}) {
    const classes = useStyles()
  return (
    <Grid item lg={4} md={4} xs={12} className={classes.root}>
        <Grid className={classes.main} container direction='column' alignItems='flex-start'>
            {icon}
            <Typography className={classes.title} variant='h5'>{title}</Typography>
            <Typography className={classes.desc} variant='body1'>
                {desc}
            </Typography>
        </Grid>
    </Grid>
  )
}
