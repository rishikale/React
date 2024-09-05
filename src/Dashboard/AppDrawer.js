import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import InfoIcon from "@mui/icons-material/Info";
import AddIcCallIcon from '@mui/icons-material/AddIcCall';
import BookIcon from '@mui/icons-material/Book';
import { Link, useNavigate } from "react-router-dom";

export default function AppDrawer(props) {
  const navigate = useNavigate();

  const DrawerList = (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      //   onClick={props.setOpenDrawer(false)}
    >
      <List>
        <ListItem disablePadding>
          <ListItemButton
            onClick={() => {
              navigate("/aboutus");
              props.closeDrawer();
            }}
          >
            <ListItemIcon>
              <InfoIcon />
            </ListItemIcon>
            <ListItemText primary={"About Us"} />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton
            onClick={() => {
              navigate("/contactus");
              props.closeDrawer();
            }}
          >
            <ListItemIcon>
              <AddIcCallIcon />
            </ListItemIcon>
            <ListItemText primary={"Contact Us"} />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton
            onClick={() => {
              navigate("/books");
              props.closeDrawer();
            }}
          >
            <ListItemIcon>
              <BookIcon />
            </ListItemIcon>
            <ListItemText primary={"Books"} />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton
            onClick={() => {
              navigate("/promises");
              props.closeDrawer();
            }}
          >
            <ListItemIcon>
              <BookIcon />
            </ListItemIcon>
            <ListItemText primary={"Promises"} />
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );

  return (
    <div>
      <Drawer open={props.openDrawer} onClose={props.closeDrawer}>
        {DrawerList}
      </Drawer>
    </div>
  );
}
