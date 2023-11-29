import { createTheme } from '@material-ui/core/styles';
import palette from './palette';
import { getDirection } from '../localization';

const theme = createTheme({
    palette:palette,
    direction:getDirection(),
    spacing:2.5,
    typography: {
        h1 : {
            fontWeight:700,
            fontSize:getDirection()==="rtl"?50:52,
            lineHeight:"4rem",
            color:"#fff"
            
        },
        h2 : {
            fontWeight:700,
            fontSize:getDirection()==="rtl"?38:40,
            lineHeight:"3.2857rem",
            color:"#fff"
            
        },
        h3 : {
            fontWeight:600,
            fontSize:getDirection()==="rtl"?30:32,
            lineHeight:"4rem",
            color:"#fff",
            textAlign:"left"

            
        },
        h4 : {
            fontWeight:600,
            fontSize:getDirection()==="rtl"?26:28,
            lineHeight:"2.43rem",
            color:"#fff"
            
        },
        h5 : {
            fontWeight:600,
            fontSize:getDirection()==="rtl"?21:23,
            lineHeight:"2.14rem",
            color:"#fff",

            
        },
        h6 : {
            fontWeight:700,
            fontSize:getDirection()==="rtl"?16:18,
            lineHeight:"1.857rem",
            color:"#fff"
            
        },
        subtitle1 : {
            fontWeight:400,
            fontSize:getDirection()==="rtl"?18:20,
            lineHeight:"2rem",
            marginTop:15,
            color:"#a4acc4"
        },
        body1 : {
            fontWeight:400,
            fontSize:getDirection()==="rtl"?16:18,
            lineHeight:"1.8rem",
            color:"#a4acc4",
            textAlign:getDirection()==="rtl"?"justify":"left"

        },
        body2:{
            fontWeight:600,
            fontSize:getDirection()==="rtl"?14:16,
            color:"#a4acc4",
            letterSpacing:1,
            textAlign:"center"
        },
        button : {
            fontWeight:400,
            fontSize:getDirection()==="rtl"?12:14,
            // lineHeight:50,
            color:"#fff",
            letterSpacing:2
        },





    }

})
export default theme
