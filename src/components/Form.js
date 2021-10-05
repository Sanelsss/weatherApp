import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import Grid from '@material-ui/core/Grid';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import Typography from '@material-ui/core/Typography';
import InvertColorsIcon from '@material-ui/icons/InvertColors';
import VisibilitySharpIcon from '@material-ui/icons/VisibilitySharp';
import NearMeIcon from '@material-ui/icons/NearMe';
import { TiThermometer } from "react-icons/ti";
import { WiStrongWind } from "react-icons/wi";

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    maxWidth: "530px",
    maxHeight: "440px",
    borderRadius:" 16px 16px 16px 16px",
    backgroundColor:" rgba(255, 255, 255, 0.4)",  
  },
  gridList: {
    width: 600,
    maxHeight: 450,
    marginTop:"1rem",
    transform: 'translateZ(0)',
    },
  icon: {
    color: 'white',
  },
  da:{
       marginTop:"0rem", 
      },
     nn:{
      marginTop:"0rem", 
      marginLeft:"3%",
       },
 sun:{
  fontSize: 45,
  color:"#111",
  marginTop:5,
  marginRight:0,
  marginLeft:5,
  opacity:0.6,
   },
   sok:{
 justifyContent:"center",
 alignItems:"center"
     }
}));
export default function Form(props) {
  const classes = useStyles();
  return (
  <div className={classes.root}>
  <GridList cellHeight={255} spacing={2} className={classes.gridList}>
    {props.lista.map((tile) => (
      <GridListTile  key={tile.id} rows={1}  cols={2}>
    <div className={classes.da} >
         <Typography className={classes.nn} variant="h2" 
    /* color="#fff" */ > {tile.name} / {tile.country}  
          </Typography> 
          <div className="col-xs-6 col-lg-6  rows ">  
          <Grid container className={classes.sok} >
      <Grid item xs={6} md={4}>
        <span className="icon">{Math.round(tile.temp)}
        <h3 className="icon">°c</h3></span>     
      </Grid>
      <Grid item xs={6} md={4}>
      <TiThermometer className={classes.sun} />
       </Grid>
       <Grid item md={9} sm={12} xs={12} >
    <span className="icon-desc">{tile.description}</span>     
   </Grid>  
         <Grid item xs={6}   md={4}>
         <span className="icon">{tile.humidity}
         <h3 className="icon">%</h3></span>     
             </Grid>
      <Grid item xs={6} md={4}>
      <InvertColorsIcon className={classes.sun} />
       </Grid>
      </Grid>
       </div>
       <div className="col-xs-6 col-lg-6 rows" >
       <Grid container className={classes.sok} >
       <Grid item xs={6}  md={7}>
        <span className="icon">{tile.speed}
        <h3 className="icon">m/s</h3></span>     
      </Grid>
      <Grid item xs={6} md={5}>
      <WiStrongWind className={classes.sun} />
       </Grid>
       <Grid item xs={6} md={7}>
       <span className="icon">{tile.degrees}°
       </span>     
      </Grid>
      <Grid item xs={6}  md={5}  >
      <NearMeIcon className={classes.sun} />
       </Grid>
      <Grid item  md={7} xs={6} >
       <span className="icon">{tile.visib}
       <h3 className="icon" >m</h3></span>     
      </Grid>
      <Grid item  md={5} xs={6}   >
      <VisibilitySharpIcon className={classes.sun} />
       </Grid>
       </Grid>
</div>
        </div>   
       <GridListTileBar
          title={tile.title}
          titlePosition="top"
          actionIcon={
            <IconButton aria-label={`star ${tile.title}`} className={classes.icon}>
              <StarBorderIcon />   
            </IconButton>
          }
          actionPosition="right" /> 
      </GridListTile>
    ))}
  </GridList>
</div>
   
  );
 }
 




