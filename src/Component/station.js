import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Avatar from '@material-ui/core/Avatar';
import Chip from '@material-ui/core/Chip';
import FaceIcon from '@material-ui/icons/Face';
import DoneIcon from '@material-ui/icons/Done';



const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    color: theme.palette.text.secondary,
  },
  btn: {
    border: "2px solid black",
    backgroundColor: "white",
    color: "black",
    padding: " 14px 28px",
    fontSize: "16px",
    cursor: "pointer",
    /* Green */
    success: {
      borderColor: " #4CAF50",
      color: "green",
    },

    successhover: {
      backgroundColor: "#4CAF50",
      color: "white",
    },
  },

  rootChip: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    '& > *': {
      margin: theme.spacing(0.5),
    },
  },

}));

export default function SimpleContainer() {
  const classes = useStyles();

  var className = `${className="success"}`
  return (
    <React.Fragment>

      <CssBaseline />
      <Container>
        <Typography
          component="div"
          style={{
            border: "1px solid #d2dae2",
            height: "100vh",
            borderRadius: "2px",
          }}
        >
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Paper className={classes.paper}>
                <button className="btn success" >Active</button>
                <button className="btn success"> Create New</button>
              </Paper>
            </Grid>
          </Grid>
          <div className="station_ovr">
          <h2>Stations Overview</h2>
          </div>
          <div className={classes.rootChip}>
          <Chip  label="Station" class="station"
          //  onClick={handleClick}
            />
            <Chip  label="Charger" class="charger" />     
           
            <Chip  label="Connector Type" class="connector" />     
            
            <Chip  label="Status" class="status" />         
            
            <Chip  label="Other Info" class="other_info" />       
            
          </div>

          <div className={classes.rootChip}>
            <table class="table_spacing">
              <tr>
                <td class="td_look1">hello</td>
                <td class="td_look">hello</td>
                <td class="td_look3">hello</td>
                <td class="td_look">hello</td>
                <td class="td_look">hello</td>

              </tr>

              <tr>
                <td class="td_look1">hello</td>
                <td class="td_look">hello</td>
                <td class="td_look3">hello</td>
                <td class="td_look">hello</td>
                <td class="td_look">hello</td>

              </tr>

              <tr>
                <td class="td_look1">hello</td>
                <td class="td_look">hello</td>
                <td class="td_look3">hello</td>
                <td class="td_look">hello</td>
                <td class="td_look">hello</td>

              </tr>

              <tr>
                <td class="td_look1">hello</td>
                <td class="td_look">hello</td>
                <td class="td_look3">hello</td>
                <td class="td_look">hello</td>
                <td class="td_look">hello</td>

              </tr>

              <tr>
                <td class="td_look1">hello</td>
                <td class="td_look">hello</td>
                <td class="td_look3">hello</td>
                <td class="td_look">hello</td>
                <td class="td_look">hello</td>

              </tr>
            </table>
          </div>

        </Typography>
        
      </Container>
         
    </React.Fragment>
  );
}
