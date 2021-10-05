import {makeStyles} from "@material-ui/core/styles";
const useStyles = makeStyles((theme)=>({
        typography: {
          fontFamily: [
            '-apple-system',
            'BlinkMacSystemFont',
            '"Segoe UI"',
            'monospace',
            '"Helvetica Neue"',
            'Arial',
            'sans-serif',
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"',
            '"  Cambria, Cochin, Georgia, Times, Times New Roman serif "',
      
          ].join(','),
        },
        font:{
          color:"#111",
          fontFamily: 'monospace',
          direction: "row",
          justify: "center",
          alignItems: "center",
          opacity:"0.8",
          margin:0
         },
        body: {

          fontWeight: 500,
        },
        margin: {
          margin: theme.spacing(1),
          width:"10rem",
        },
        alarmButton:{
        size:50,
        fontSize:"20px"
        },
        oo:{
          marginLeft:"auto",
          marginRight:"auto",
          marginTop:1,
          justify:"center",
          maxWidth: 485, 
           },
        moscow:{
          fontFamily: "Roboto",
          fontSize: 50,
          textAlign: "center",
        },
        temp:{
          fontFamily: "Roboto",
marginTop:0
        },
        sun:{
          fontSize: 60,
          color:"rgb(240, 236, 5)",
          marginTop:0,
          marginLeft:0,
        },
        cloud:{
          fontSize: 60,
          color:"#fff",
          marginLeft:0,
          marginTop:0,
        },
        cardContent:{
           margin: theme.spacing(1), 
          maxHeigt:400,
           fontWeight: 300,
          textAlign: "center",      
  },
        collapse:{
         margin:-20,
         textAlign: "center",
         backgroundColor:" transparent",
       },
       alert:{
        width: '100%',
        marginTop: theme.spacing(2),
        backgroundColor:" #fff",
      },
        hh:{
          direction: "row",
          justify: "center",
          alignItems: "center",
        },
        card:{
          marginLeft:"auto",
          marginRight:"auto",
          marginTop:"2rem",
          maxWidth: 445,
          backgroundColor:"rgba(255, 255, 255, 0.4)",
          borderRadius:" 16px 16px 16px 16px",
          boxShadow:" 0px 5px rgba(0, 0, 0, 0.2)",      
          color: "#313131",
          transition: "0.4s ease",
        },
        grid:{  
          width: "100%", 
          backgroundColor:" rgba(255, 255, 255, 0.4)",
          borderRadius:" 0px 0px 16px 16px",
        maxWidth: 455,
        boxShadow:" 0px 5px rgba(0, 0, 0, 0.2)",  
          color: "#313131",
          fontSize: "20px",     
          transition: "0.4s ease",
        },
        we: {
          '& > *': {
            margin: theme.spacing(2),
            width: '20ch',
            color:"#1dw11",
            fontSize: "20px",
          }
        },
      aa: {
          borderRadius: "5rem",
          color:"#111",
          backgroundColor: "transparent",
          width: '3rem',
          fontSize: 22,
          margin: theme.spacing(1),
      
      },
      ss:{
      margin: theme.spacing(1),
        direction: "row",
        justify: "center",
        alignItems: "center",
      },
      divider: {
        margin: theme.spacing(2, 0),
        backgroundColor: "#fff",
      },
      
  }))
  export default useStyles;