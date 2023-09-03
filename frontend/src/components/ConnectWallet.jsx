import Button from "@mui/material/Button";
import { AppConfig, showConnect, UserSession } from "@stacks/connect";

const appConfig = new AppConfig(["store_write", "publish_data"]);

export const userSession = new UserSession({ appConfig });

function authenticate() {
   showConnect({
      appDetails: {
         name: "openGov",
         icon: window.location.origin + "/logo512.png",
      },
      redirectTo: "/view-proposals",
      onFinish: () => {
         window.location.reload();
      },
      userSession,
   });
}

function disconnect() {
   userSession.signUserOut("/");
}

const ConnectWallet = () => {
   if (userSession.isUserSignedIn()) {
      return (
         <Button
            sx={{ marginLeft: "auto" }}
            variant="outlined"
            color="primary"
            onClick={disconnect}
         >
            Disconnect Wallet
         </Button>
      );
   }

   return (
      <Button
         sx={{ marginLeft: "auto" }}
         variant="outlined"
         color="primary"
         onClick={authenticate}
      >
         Connect Wallet
      </Button>
   );
};

export default ConnectWallet;
