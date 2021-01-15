import React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import ListSubheader from "@material-ui/core/ListSubheader";
import DashboardIcon from "@material-ui/icons/Dashboard";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import PeopleIcon from "@material-ui/icons/People";
import BarChartIcon from "@material-ui/icons/BarChart";
import LayersIcon from "@material-ui/icons/Layers";
import AssignmentIcon from "@material-ui/icons/Assignment";

export default function ListItems(props) {
  const handleClick = (opt) => {
    props.handleComponents(opt);
  };
  return (
    <div>
      <ListItem  button onClick={() => handleClick(1)}>
        <ListItemText primary="Dashboard" />
      </ListItem>
      <ListItem button onClick={() => handleClick(2)}>
        <ListItemText primary="Stations" />
      </ListItem>
      <ListItem button onClick={() => handleClick(3)}>
        <ListItemText primary="Weather Data" />
      </ListItem>
      <ListItem button onClick={() => handleClick(4)}>
        <ListItemText primary="Sessions " />
      </ListItem>
      <ListItem button onClick={() => handleClick(5)}>
        <ListItemText primary="Statistics" />
      </ListItem>
      <ListItem button onClick={() => handleClick(6)}>
        <ListItemText primary="Users" />
      </ListItem>
    </div>
  );
}
