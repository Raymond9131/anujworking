import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Divider from "@material-ui/core/Divider";
import { Height } from "@material-ui/icons";

const useStyles = makeStyles({

  wlcmRoot:{
    textAlign: "center",
    paddingTop: "30px",
    marginBottom: 30
  },

  bckcolr :{
    display:'flex',
    alignItems:'center',
    justifyContent:'center',
    width:400,
    height:600,
    backgroundColor:'#00d2d3',
   
  }, 

  root: {
    alignItems: "center",
    // width: "50%",
    display: "flex",
    justifyContent:'center',
    width:300,
    padding:10,
    marginLeft:150,
    marginTop:20
    
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },

  mypaper :{    

    backgroundColor:'#55efc4',
    width : 800,
    margin: 10,
    padding:100,
    marginLeft:300,
       
},

});

export default function SimpleCard() {
  const classes = useStyles();

  return (
    <div>
      <Paper className={classes.mypaper} elevation={5}>
      <div className={classes.wlcmRoot}>
        <h3><p>Welcome to</p></h3>
        <h3><i><b>Dashboard</b></i></h3>
      </div>
      <Card className={classes.root}>
        <Divider variant="middle" />

        <CardContent>
          <form>
            <Grid item xs={12}>
              <label>User Name</label>
            </Grid>
            <Grid item xs={12}>
              <input type="text" placeholder="a.smith" size="25" />
            </Grid>
            <Grid item xs={12}>
              <label>Password</label>
            </Grid>

            <Grid item xs={12}>
              <input type="text" placeholder="********" size="25" />
              <Grid item xs={12}>
                <Button
                  variant="contained"
                  color="primary"
                  // style={{ margin: "5px" }}
                  class="login-btn" 
                >
                  Log In
                </Button>
              </Grid>
              <Grid item xs={12}>
                <a href="#">Forget Password</a>
              </Grid>
            </Grid>
          </form>
        </CardContent>
        <Divider variant="middle" />
      </Card>
      </Paper>
    </div>
  );
}
