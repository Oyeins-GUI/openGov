import { ThemeProvider, CssBaseline } from "@mui/material/";
import theme from "./theme";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import CreateProposal from "./pages/CreateProposal";
import ViewProposals from "./pages/ViewProposals";

function App() {
   return (
      <>
         <ThemeProvider theme={theme}>
            <CssBaseline />
            <Routes>
               <Route path="/" element={<Home />} />
               <Route path="/create-proposal" element={<CreateProposal />} />
               <Route path="/view-proposals" element={<ViewProposals />} />
            </Routes>
         </ThemeProvider>
      </>
   );
}

export default App;
