import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import DrawerListItems from "./DrawerListItem";
import { useState } from "react";

function DrawerComp() {
   const [openDrawer, setOpenDrawer] = useState(false);
   const pages = ["Home", "Create Proposal", "View Proposals"];

   return (
      <>
         <Drawer open={openDrawer} onClose={() => setOpenDrawer(false)}>
            <List>
               <div
                  style={{
                     padding: "8px 16px",
                     display: "flex",
                     justifyContent: "flex-end",
                  }}
               >
                  <CloseIcon onClick={() => setOpenDrawer(!openDrawer)} />
               </div>
               <DrawerListItems to="/" label="Home" />
               <DrawerListItems to="/create-proposal" label="Create Proposal" />
               <DrawerListItems to="/view-proposals" label="View Proposals" />
            </List>
         </Drawer>
         <IconButton onClick={() => setOpenDrawer(!openDrawer)} color="inherit">
            <MenuIcon />
         </IconButton>
      </>
   );
}

export default DrawerComp;
