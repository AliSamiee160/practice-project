import React , {useEffect,useState} from 'react'
import { makeStyles } from "@material-ui/core/styles";
import { Typography, LinearProgress } from "@material-ui/core";


const useStyles = makeStyles((theme) => ({
    root: {
      width:"100%",
        padding:10,
        display:"flex",
        flexDirection:"column",
        alignItems:"flex-start",
    },
    skillGrid: {
      paddingTop: 60,
      paddingBottom: 60,
      paddingRight: 30,
      paddingLeft: 30,

    },
    progressDiv:{
        display:"flex",
        justifyContent:"flex-start",
        alignItems:"center",
        width:"100%",
    },
    progressBar : {
        width:"85%",
        marginLeft:15,
        height:6,
        backgroundColor:"#2e344e",
    },

}));  

export default function Skill({value,title}) {
    // const[val,setVal] =useState(40)
    const classes = useStyles();
    // useEffect(()=>{
    //     setTimeout(() => {
    //         if(val===value) {
    //             return
    //         }
    //         setVal(val=>val+5)
    //     }, 100);
    // },[val])






  return (
    <div className={classes.root}>
        <Typography variant="h6">{title} </Typography>
        <div className={classes.progressDiv}>
            <Typography >{value}%</Typography>
            <LinearProgress className={classes.progressBar} variant='determinate' value={value}></LinearProgress>
        </div>
    </div>
  )
}
