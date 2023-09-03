import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import useMediaQuery from "@mui/material/useMediaQuery";
import DrawerComp from "../components/DrawerComp";
import NavTabs from "./NavTabs";
import ConnectWallet from "./ConnectWallet";
import useStyles from "../styles";
import theme from "../theme";

function Navbar() {
   const classes = useStyles();
   const isMatch = useMediaQuery(theme.breakpoints.down("md"));

   return (
      <>
         <AppBar>
            <Toolbar>
               {isMatch && <DrawerComp />}
               <Typography variant="h6" className={classes.logo}>
                  OpenGov
               </Typography>
               {!isMatch && <NavTabs />}
               <ConnectWallet />
            </Toolbar>
         </AppBar>
      </>
   );
}

export default Navbar;
