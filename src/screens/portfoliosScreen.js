import React from 'react'
import { makeStyles } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";
import Title from "../components/title";
import { getTranslate } from "../localization/index";
import Portfolio from "../components/Portfolio";
import CarImg1 from "../assets/images/car-american-1.jpeg";
import CarImg2 from "../assets/images/car-american-2.jpeg";
import CarImg3 from "../assets/images/car-american-3.jpeg";
import CarImg4 from "../assets/images/car-american-4.jpeg";
import CarImg5 from "../assets/images/car-american-5.jpeg";





const useStyles = makeStyles(theme =>({
  root:{
    minHeight:"100vh",
    padding:30,
    paddingTop:60,
    width:"100%",
    [theme.breakpoints.down('xs')]:{
      paddingRight:10,
      paddingLeft:10,
    }
  },
}))

export default function PortfoliosScreen() {
  const classes = useStyles()
  const translate = getTranslate()
  return (
    <div container className={classes.root}>
        <Title title={translate.portfolios} />
        <Grid item xs={12} container direction="row" justify="flex-start" alignItems='center' >
          <Portfolio img={CarImg1} title={translate.americancar}  subtitle='1000$' />
          <Portfolio img={CarImg2} title={translate.americancar}   subtitle='1000$'  />
          <Portfolio img={CarImg3} title={translate.americancar}   subtitle='1000$'   />
          <Portfolio img={CarImg4} title={translate.americancar}   subtitle='1000$'  />
          <Portfolio img={CarImg5} title={translate.americancar}   subtitle='1000$'  />
          <Portfolio img={CarImg1} title={translate.americancar}   subtitle='1000$'  />

        </Grid>
    </div>
  )
}
