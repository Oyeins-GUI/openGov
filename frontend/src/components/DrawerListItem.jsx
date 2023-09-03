import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { Link } from "react-router-dom";

export default function DrawerListItems({ to, label }) {
   return (
      <>
         <Link to={to}>
            <ListItemButton>
               <ListItemIcon>
                  <ListItemText>{label}</ListItemText>
               </ListItemIcon>
            </ListItemButton>
         </Link>
      </>
   );
}
