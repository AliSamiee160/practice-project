import React,{useState} from 'react'
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Typography,Modal } from "@material-ui/core";
import CarImg from "../assets/images/car-american-1.jpeg";


const useStyles = makeStyles(theme =>({
    root:{
     padding:15,
     display:"flex",
     flexDirection:"column",

    },
    Modal:{
        width:"60%",
        height:"60%",
        marginLeft:"auto",
        marginRight:"auto",
        marginTop:60,
    },
  }))


export default function Portfolio({img,title,subtitle}) {
  const classes = useStyles()
  const [open,setOpen]=useState(false)

  return (
    <>
        <Grid item lg={4} className={classes.root}>
            <img onClick={()=>setOpen(true)} src={img} alt="car"/>
            <Typography variant='h5'>{title}</Typography>
            <Typography variant='body2'>{subtitle}</Typography>

        </Grid>
        <Modal className={classes.Modal} open={open} onClose={()=>setOpen(false)}>
            <img src={img} alt="car"/>

        </Modal>
    </>

  )
}
