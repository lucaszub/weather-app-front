import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import HomeIcon from "@mui/icons-material/Home";
import GrainRoundedIcon from "@mui/icons-material/GrainRounded";
import WaterIcon from "@mui/icons-material/Water";
import { Toolbar } from "@mui/material";
import Home from "@mui/icons-material/Home";
import AirIcon from "@mui/icons-material/Air";
import ThermostatIcon from "@mui/icons-material/Thermostat";

export default function Sidebar() {
  return (
    <Box flex={1} p={2} sx={{ display: { xs: "none", sm: "block" } }}>
      <Box position="fixed"
      >
        <List>
          <ListItem disablePadding>
            <ListItemButton component="a" href="acceuil">
              <ListItemIcon>
                <Home />
              </ListItemIcon>
              <ListItemText primary="Acceuil" />
            </ListItemButton>
          </ListItem>
        </List>
        <List>
          <ListItem disablePadding>
            <ListItemButton component="a" href="temperature">
              <ListItemIcon>
                <ThermostatIcon />
              </ListItemIcon>
              <ListItemText primary="Température" />
            </ListItemButton>
          </ListItem>
        </List>
        <List>
          <ListItem disablePadding>
            <ListItemButton component="a" href="Precipitation">
              <ListItemIcon>
                <WaterIcon />
              </ListItemIcon>
              <ListItemText primary="Précipitation" />
            </ListItemButton>
          </ListItem>
        </List>
        <List>
          <ListItem disablePadding>
            <ListItemButton component="a" href="Vent">
              <ListItemIcon>
                <AirIcon />
              </ListItemIcon>
              <ListItemText primary="Vent" />
            </ListItemButton>
          </ListItem>
        </List>
      </Box>
    </Box>
  );
}