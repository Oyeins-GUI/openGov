import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { useState } from "react";
import { Link } from "react-router-dom";
import { userSession } from "./ConnectWallet";

export default function NavTabs() {
   const [value, setValue] = useState();
   const signedIn = userSession.isUserSignedIn();

   return (
      <Tabs
         textColor="inherit"
         value={value}
         indicatorColor="secondary"
         onChange={(e, value) => setValue(value)}
         sx={{ marginLeft: "auto" }}
      >
         <Link to="/" style={{ color: "white" }}>
            <Tab label="Home"></Tab>
         </Link>
         <Link
            to={signedIn ? "/create-proposal" : "/"}
            style={{ color: "white" }}
         >
            <Tab label="Create Proposal" />
         </Link>
         <Link
            to={signedIn ? "/view-proposals" : "/"}
            style={{ color: "white" }}
         >
            <Tab label="View Proposals" />
         </Link>
      </Tabs>
   );
}
