import TextField from "@material-ui/core/TextField";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import {blue } from '@material-ui/core/colors';
import IconButton from "@material-ui/core/IconButton";
import clsx from 'clsx';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Alert from '@material-ui/lab/Alert';
import useStyles from "./components/styles";
import React, { useState, useEffect } from 'react';
import Form from "./components/Form";
import { BsSun } from "react-icons/bs";
import { GiRaining } from "react-icons/gi";
import { MdWbCloudy } from "react-icons/md";
import { FaCloudSunRain } from "react-icons/fa";

const api = {
  key: "cd76820f9ccbf766b587f69b63167394",
  base: "https://api.openweathermap.org/data/2.5/"
}
function App() {
  const [query, setQuery] = useState('');
  const [weather, setWeather] = useState({});
  const [lista, setList] = useState([]);
  const [moscow, setMoscow] = useState("Please enter some values");
  const [london, setLondon] = useState();
  const [alert, setAlert] = useState(false);

  useEffect(() => {
    //const data = localStorage.getItem("nesto");
    const da = localStorage.getItem("svasta");
   // setWeather(weather);
    if (/* data&& */da) {
      // setWeather(JSON.parse(data));
      setList(JSON.parse(da));
    }
  }, []);

  useEffect(() => {
    //localStorage.setItem("nesto",JSON.stringify(weather));
    localStorage.setItem("svasta", JSON.stringify(lista));
  });
  useEffect(() => {
    lista.map(item => { 
      if (item.name === weather.name) {
        lista.pop();
        //lista.splice(item,1);
        //lista.pop(item);
        setAlert(true); setWeather(weather);
      } if (item.name !== weather.name) {
        setAlert(false);
      }   
      return item;
    });
      const name = weather.name;  
     const visib = weather.visibility;
    if (name !== ('') && name !== undefined && weather ) {
      const cnt = weather.sys; const wth = weather.main;
      const wnd = weather.wind; const desc= weather.weather[0];
      const country = cnt.country; const temp = wth.temp;
      const humidity= wth.humidity;const speed = wnd.speed;
      const degrees = wnd.deg;const description = desc.description;
    lista.push({name,visib,country,temp,humidity,speed,degrees,description});
    setMoscow("that city was not found");
   
    if(description === "clear sky"){
      setLondon(<BsSun className={classes.sun}/>)
    }else if(description === "light rain"){
      setLondon(<GiRaining className={classes.clouds}/>)
    } else if(description === "overcast clouds"){
      setLondon(<MdWbCloudy className={classes.clouds}/>)
    }else if(description === "scattered clouds" ){
      setLondon(<FaCloudSunRain className={classes.sun}/>)
    }else{
      setLondon(<FaCloudSunRain className={classes.sun}/>)
    }
      return lista;
    };
  }, [weather]);
  const search = (ss, e) => {
    if (ss.key === "Enter") {
      fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
        .then(res => res.json())
        .then(result => {
          setWeather(result);
          setQuery("");
        });
    }
  };
 
  const dateBuilder = (d) => {
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();
    return `${day} ${date} ${month} ${year}`
  }
  const [expanded, setExpanded] = React.useState(false);
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  const classes = useStyles();
  return (
    <div className={(typeof weather.main != "undefined") ? ((weather.weather[0].description==='clear sky') ? 
    'wrapper app ' : 'wrapper app-warm') : 'wrapper '}>
      <div className="col-xs-10 col-lg-6  title-container">
        <Container className={classes.oo} >
          {alert ? (<Alert onClose={() => {setAlert(false) }}>
            You have alrd selected this city!</Alert>)
            : (" ")}
          <Grid className={classes.grid}
            container spacing={0}
            direction="row" justify="center" alignItems="center" >
            <Grid item xs={7} /* lg={2} */ sm={5} md={6} className="search-box" /*className={classes.root} */ >
              <TextField size="medium" id="standard-search"
                label="Search ..." color="primary"
                type="search" variant="outlined"
                onChange={e => setQuery(e.target.value)}
                value={query} onKeyPress={search}
              />
            </Grid>
            <Grid item xs={2} /* lg={1} */ sm={3} md={2}  >
              <IconButton onClick={() => { setList([]) }} color="primary" size="medium" aria-label="add an alarm">
                <DeleteOutlineIcon style={{ fontSize: 40, color: blue[900] }} />
              </IconButton>
            </Grid>
          </Grid>
        </Container>
        {(typeof weather.sys != "undefined") ? (
          <Card className={classes.card}>   
            <CardContent className={classes.cardContent}>
              <Container  >
                <Typography className={classes.font}  variant="h3" color="secondary">
                  {weather.name},      {weather.sys.country}
                </Typography>
                <Typography className={classes.font} variant="h3" color="secondary" >
                  Humidity:{weather.main.humidity}%</Typography>
                <Typography className={classes.font} variant="h3" color="secondary" >
                  {dateBuilder(new Date())}
                </Typography>
                <Typography className={classes.font} variant="h1" color="secondary"
                 /* className={classes.temp} */ >
                  {Math.round(weather.main.temp)}°c
                  {}
                 <span>{london}</span>
                </Typography>
                <Typography className={classes.font}     variant="h3" color="secondary" >
                  {weather.weather[0].description}
                </Typography>
              </Container>
            </CardContent>
            <CardActions disableSpacing className={classes.font}>
              see more
              <IconButton
                className={clsx(classes.expand, {
                  [classes.expandOpen]: expanded,
                })}
                onClick={handleExpandClick}
                aria-expanded={expanded}
                aria-label="show more">
                {""} <ExpandMoreIcon />
              </IconButton>
            </CardActions>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
              <CardContent className={classes.collapse}>
                <Typography className={classes.font} variant="h3" color="secondary" >
                  Windspeed: {weather.wind.speed}m/s</Typography>
                  <Typography className={classes.font} variant="h3" color="secondary" >
                  Direction: {weather.wind.deg}°</Typography>
                <Typography className={classes.font} variant="h3" color="secondary" >
                  Visibility: {weather.visibility}m</Typography>
              </CardContent>
            </Collapse>
          </Card>
        ) : (
          <Typography className={classes.moscow} color="primary" >
            {moscow}</Typography>
        )}
      </div>
      <div className="col-xs-10 col-lg-6 form-container">
        {lista[0]?(<Form lista={lista} {...lista} key={lista.id} />) : (
          <img className="main" src="../saw.jpg" alt="" />
        )}
      </div>
    </div>
  );
}
export default App;