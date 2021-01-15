import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import CheckBoxOutlineBlankIcon from "@material-ui/icons/CheckBoxOutlineBlank";
import CheckBoxIcon from "@material-ui/icons/CheckBox";
import Favorite from "@material-ui/icons/FiberManualRecordRounded";
import FavoriteBorder from "@material-ui/icons/RadioButtonUncheckedRounded";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },

  root: {
    maxWidth: 330,
  },

  selectEmpty: {
    marginTop: theme.spacing(2),
  },

  sol_radio_dis: {
    display:"flex",
    alignItems: "center",
    justifyContent:'space-between',
    // borderBottom: '2px solid grey'
  },

  linem : {
    borderBottom: '2px solid grey'
  }

}));

export default function SimpleSelect() {
  const classes = useStyles();
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  const OutlinedCard1 = () => {
    const bull = <span className={classes.bullet}>•</span>;
    const [state, setState] = React.useState({
      checkedA: true,
      checkedB: true,
      checkedF: true,
      checkedG: true,
    });

    const handleChange = (event) => {
      setState({ ...state, [event.target.name]: event.target.checked });
    };

    return (
      <Card className={classes.root} variant="outlined">
        <CardContent>          
          <Typography
            className={classes.title}
            color="textSecondary"
            gutterBottom
            className={classes.sol_radio_dis}
          >
            <lable>Solution 1</lable>
            <FormControlLabel
              control={
                <useStyles
                  checked={state.checkedG}
                  onChange={handleChange}
                  name="checkedG"
                />
              }
            />
            <FormControlLabel
              control={
                <Checkbox
                  icon={<FavoriteBorder />}
                  checkedIcon={<Favorite />}
                  name="checkedH"
                />
              }
            />
          </Typography>
             <hr width='110%'></hr>          
          <Grid container spacing={0}>
            <Grid item xs={6} sm={4} style={{ fontSize: 13 }}>
              <p>Voltage :550V</p>
              <p>Current :144A</p>
              <p>Power: 75KW</p>
            </Grid>
            <Grid item xs={6} sm={4}></Grid>
            <Grid item xs={6} sm={4}>
              <Button variant="contained" style={{ margin: "5px",marginTop:"50px",}}>
                Cancel 
              </Button>
            </Grid>
          </Grid>
        </CardContent>
      </Card>

      
    );
  };

  const OutlinedCard2 = () => {
    const bull = <span className={classes.bullet}>•</span>;
    const [state, setState] = React.useState({
      checkedA: true,
      checkedB: true,
      checkedF: true,
      checkedG: true,
    });

    const handleChange = (event) => {
      setState({ ...state, [event.target.name]: event.target.checked });
    };

    return (
      <Card className={classes.root} variant="outlined">
        <CardContent>          
          <Typography
            className={classes.title}
            color="textSecondary"
            gutterBottom
            className={classes.sol_radio_dis}
          >
            <lable>Solution 1</lable>
            <FormControlLabel
              control={
                <useStyles
                  checked={state.checkedG}
                  onChange={handleChange}
                  name="checkedG"
                />
              }
            />
            <FormControlLabel
              control={
                <Checkbox
                  icon={<FavoriteBorder />}
                  checkedIcon={<Favorite />}
                  name="checkedH"
                />
              }
            />
          </Typography>
             <hr width='110%'></hr>          
          <Grid container spacing={0}>
            <Grid item xs={6} sm={4} style={{ fontSize: 13 }}>
              <p>Voltage :550V</p>
              <p>Current :144A</p>
              <p>Power: 75KW</p>
            </Grid>
            <Grid item xs={6} sm={4}></Grid>
            <Grid item xs={6} sm={4}>
              <Button variant="contained" style={{marginTop:"5px",backgroundColor:"green",color:"#fff"}}>
                Available  
              </Button>
            </Grid>
          </Grid>
        </CardContent>
      </Card>

      
    );
  };

  return (
    <div>
      <FormControl className={classes.formControl}>
        <InputLabel id="demo-simple-select-label">Shows Only</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          onChange={handleChange}
        >
          <MenuItem value={10}>Active</MenuItem>
          <MenuItem value={20}>Deactive</MenuItem>
        </Select>
      </FormControl>
      <Grid container spacing={1}>
        <Grid item xs={3}>
            <div>{OutlinedCard1()}</div>        
        </Grid>
        <Grid   item xs={3}>
            <div>{OutlinedCard1()}</div>        
        </Grid>
        <Grid   item xs={3}>
            <div>{OutlinedCard1()}</div>        
        </Grid>
        <Grid   item xs={3}>
            <div>{OutlinedCard2()}</div>        
        </Grid>
      </Grid>

      <Grid container spacing={1}>
        <Grid item xs={3}>
            <div>{OutlinedCard2()}</div>        
        </Grid>
        <Grid   item xs={3}>
            <div>{OutlinedCard1()}</div>        
        </Grid>
        <Grid   item xs={3}>
            <div>{OutlinedCard2()}</div>        
        </Grid>
        <Grid   item xs={3}>
            <div>{OutlinedCard1()}</div>        
        </Grid>
      </Grid>
    </div>
  );
}
