import React, { useState } from "react";
import PropTypes from "prop-types";
import CssBaseline from "@material-ui/core/CssBaseline";
import Button from "@material-ui/core/Button";
import Drawer from "@material-ui/core/Drawer";
import Hidden from "@material-ui/core/Hidden";
import IconButton from "@material-ui/core/IconButton";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import MenuIcon from "@material-ui/icons/Menu";
import Typography from "@material-ui/core/Typography";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import ProfileImage from "../assets/images/aviary-image-1518372817315.jpeg";
import { getTranslate, changeLanguage,lang } from "../localization/index";
import HomeScreen from "./homeScreen";
import AboutScreen from "./aboutScreen";
import ContactScreen from "./contactScreen";
import ResumeScreen from "./resumeScreen";
import PortfoliosScreen from "./portfoliosScreen";
import './index.css'

const drawerWidth = 260;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  drawer: {
    [theme.breakpoints.up("sm")]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },

  menuButton: {
    margin: theme.spacing(2),
    width: 50,
    height: 50,
    backgroundColor: theme.palette.primary.backgroundColor,
    borderRadius: 0,
    border: "1px solid #2e344e",
    position: "fixed",
    cursor: "pointer",
    zIndex:1,
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  // necessary for content to be below app bar
  topDrawer: {
    width: "100%",
    padding: 20,
    borderBottom: "1px solid #2e344e",
    textAlign: "center",
  },
  profileImage: {
    width: 200,
    height: 200,
    maxWidth: "100%",
    borderRadius: 100,
    border: "7px solid #2e344e",
    verticalAlign: "middle",
  },
  drawerPaper: {
    width: drawerWidth,
    backgroundColor: "#191d2b",
    borderRight: "1px solid #2e344e ",
    height: "100vh",
  },
  centerDrawer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  bottomDrawer: {
    padding: 15,
    borderTop: "1px solid #2e344e",
  },
  content: {
    flexGrow: 1,
    paddingRight: theme.spacing(3),
    paddingLeft: theme.spacing(3),
    position:"relative"
  },
}));

function ResponsiveDrawer(props) {
  const { window } = props;
  const classes = useStyles();
  const theme = useTheme();
  const [page, setPage] = useState(3);
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const translate = getTranslate();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <>
      <div className={classes.topDrawer}>
        <img
          src={ProfileImage}
          alt={translate.name}
          className={classes.profileImage}
        />
      </div>
      <div className={classes.centerDrawer}>
        <List style={{width:"100%"}}>
          <ListItem className={page===0?null:"listItem" }style={{backgroundColor:page===0?"#037fff":"transparent",paddingLeft:"0"}} onClick={()=>{setPage(0);setMobileOpen(false)}} button>
            <ListItemText
              disableTypography={true}
              children={
                <Typography className="listItemText" style={{color:page===0?"#fff":"#a4acc4"}} variant="body2">{translate.home}</Typography>
              }
            />
            <div className="overlay" />

          </ListItem>
          <ListItem className={page===1?null:"listItem" }style={{backgroundColor:page===1?"#037fff":"transparent",paddingLeft:"0",paddingRight:"0"}} onClick={()=>{setPage(1);setMobileOpen(false)}} button>
            <ListItemText
              disableTypography={true}
              children={
                <Typography className="listItemText" style={{color:page===1?"#fff":"#a4acc4"}} variant="body2">{translate.about}</Typography>
              }
            />
            <div className="overlay" />
          </ListItem>
          <ListItem className={page===2?null:"listItem" } style={{backgroundColor:page===2?"#037fff":"transparent",paddingLeft:"0",paddingRight:"0"}} onClick={()=>{setPage(2);setMobileOpen(false)}} button>
            <ListItemText
              disableTypography={true}
              children={
                <Typography className="listItemText" style={{color:page===2?"#fff":"#a4acc4"}} variant="body2">{translate.resume}</Typography>
              }
            />
            <div className="overlay" />

          </ListItem>
          <ListItem className={page===3?null:"listItem" } style={{backgroundColor:page===3?"#037fff":"transparent",paddingLeft:"0",paddingRight:"0"}} onClick={()=>{setPage(3);setMobileOpen(false)}} button>
            <ListItemText
              disableTypography={true}
              children={
                <Typography className="listItemText" style={{color:page===3?"#fff":"#a4acc4"}} variant="body2">{translate.portfolios}</Typography>
              }
            />
            <div className="overlay" />

          </ListItem>
          <ListItem className={page===4?null:"listItem" } style={{backgroundColor:page===4?"#037fff":"transparent",paddingLeft:"0",paddingRight:"0"}} onClick={()=>{setPage(4);setMobileOpen(false)}} button>
            <ListItemText
              disableTypography={true}
              children={
                <Typography className="listItemText" style={{color:page===4?"#fff":"#a4acc4"}} variant="body2">{translate.contact}</Typography>
              }
            />
            <div className="overlay" />

          </ListItem>
        </List>
      </div>

      {/* <Divider /> */}
      <div className={classes.bottomDrawer}>
        <Button color={lang==="fa"?"primary":"secondary"} onClick={() => changeLanguage("fa")}>فارسی</Button>
        {"/"}
        <Button color={lang==="en"?"primary":"secondary"}  onClick={() => changeLanguage("en")}>English</Button>
      </div>
    </>
  );

  const getPage = () => {
    switch (page) {
      case 0:
        return <HomeScreen />;
        
      case 1:
        return <AboutScreen />;

      case 2:
        return <ResumeScreen />;

      case 3:
        return <PortfoliosScreen />;

      case 4:
        return <ContactScreen />;

      default:
        return <HomeScreen />;

        
    }
  };

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <div className={classes.root}>
      <CssBaseline />

      <IconButton
        color="inherit"
        aria-label="open drawer"
        edge="start"
        onClick={handleDrawerToggle}
        className={classes.menuButton}
      >
        <MenuIcon />
      </IconButton>

      <nav className={classes.drawer} aria-label="mailbox folders">
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Hidden smUp implementation="css">
          <Drawer
            container={container}
            variant="temporary"
            // anchor={theme.direction === "rtl" ? "right" : "left"}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation="css">
          <Drawer
            classes={{
              paper: classes.drawerPaper,
            }}
            variant="permanent"
            open
          >
            {drawer}
          </Drawer>
        </Hidden>
      </nav>
      <main className={classes.content}>
        <span className="line1" />
        <span className="line2" />
        <span className="line3" />
        <span className="line4" />

        {getPage()}
      </main>
    </div>
  );
}

ResponsiveDrawer.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default ResponsiveDrawer;
